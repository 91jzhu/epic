import {observable, action, computed, makeObservable} from "mobx";
import {Auth} from "../models";

class UserStore {
    constructor() {
        makeObservable(this)
    }

    @observable currentUser=null;

    @action pullUser(){
        // @ts-ignore
        this.currentUser=Auth.getCurrentUser()
    }
    @action resetUser(){
        this.currentUser=null
    }
}

export default new UserStore()