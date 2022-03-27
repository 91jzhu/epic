import {action, makeObservable, observable} from "mobx";
import {Uploader} from "../models";
import {message} from "antd";

class HistoryStore{
    constructor() {
        makeObservable(this)
    }
    @observable historyList=[]
    @observable isLoading=false;
    @observable hasMore=true
    @observable page=0;

    @action appendList(list:any){
        this.historyList=this.historyList.concat(list)
    }

    @action pushList(){
        return new Promise((resolve, reject)=>{
            this.isLoading=true
            Uploader.find(this.page,6).then((data:any)=>{
                if(data.length<6) {
                    this.hasMore = false
                }
                this.page++
                this.appendList(data)
                resolve(data)
            })
        }).catch(e=>{
            message.error(e)
        }).finally(()=>{
            this.isLoading=false
        })
    }
    @action reset(){
        this.historyList.length=0;
        this.isLoading = false;
        this.hasMore = true;
        this.page = 0;
    }
}

export default new HistoryStore()