import {observable, action, makeObservable} from "mobx";
import {Uploader} from "../models";
import {message} from "antd";

class ImageStore {
    constructor() {
        makeObservable(this)
    }

    @observable filename = '';
    @observable file = null;
    @observable isLoading = false
    @observable serverFile=null

    @action setFileName(newFileName: string) {
        this.filename = newFileName
    }

    @action setFile(newFile: any) {
        this.file = newFile
    }

    @action upload() {
        this.serverFile=null;
        return new Promise((resolve,reject)=>{
            this.isLoading = true
            Uploader.add(this.file, this.filename).then((serverFile: any) => {
                this.serverFile=serverFile
                resolve(serverFile)
            }).catch(e => {
                message.error(`上传失败，${e}`)
                reject(e)
            }).finally(() => {
                this.isLoading = false
            })
        })
    }
}

export default new ImageStore()