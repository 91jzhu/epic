import {action, makeObservable, observable} from "mobx";

class HistoryStore{
    constructor() {
        makeObservable(this)
    }
    @observable historyList:any=[]
    @action addHistoryList(list:any){
        this.historyList.push(list)
    }
}

export default new HistoryStore()