import {observable, action, computed, makeObservable} from "mobx";
import {Auth} from "../models";
import UserStore from './user'

class AuthStore {
    constructor() {
        makeObservable(this)
    }

    @observable values = {
        username: '',
        password: ''
    }

    @action setUserName(username: string) {
        this.values.username = username
    }

    @action setPassWord(password: string) {
        this.values.password = password
    }

    @action login() {
        return new Promise((resolve, reject) => {
            Auth.login(this.values.username, this.values.password)
                .then(user => {
                    console.log(user)
                    UserStore.pullUser()
                    resolve(user)
                })
                .catch(e => {
                    console.warn(e)
                    UserStore.resetUser()
                    reject(e)
                })
        })
    }

    @action register() {
        return new Promise((resolve, reject) => {
            Auth.register(this.values.username, this.values.password)
                .then(user => {
                    console.log(user)
                    UserStore.pullUser()
                    resolve(user)
                })
                .catch(e => {
                    console.warn(e)
                    UserStore.resetUser()
                    reject(e)
                })
        })
    }

    @action logOut() {
        return new Promise((resolve, reject) => {
            Auth.logout().then((info) => {
                resolve(info)
                UserStore.resetUser()
            }, () => reject())
        })
    }
}

export default new AuthStore()