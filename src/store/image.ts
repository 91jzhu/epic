import {observable, action, makeObservable} from "mobx";
import {Uploader} from "../models";

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

    @action upload(file: any, filename: string) {
        return new Promise((resolve,reject)=>{
            this.isLoading = true
            Uploader.add(file, filename).then((serverFile: any) => {
                this.serverFile=serverFile
                resolve(serverFile)
            }).catch(e => {
                console.error(e)
                reject(e)
            }).finally(() => {
                this.isLoading = false
            })
        })
    }
}

export default new ImageStore()