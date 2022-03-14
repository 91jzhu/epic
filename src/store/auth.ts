import {observable, action, computed, makeObservable} from "mobx";

class AuthStore{
    constructor() {
        makeObservable(this)
    }
    @observable isLogin=false
    @observable isLoading=false
    @observable values={
        username:'jirengu',
        password:''
    }
    @action setIsLogin(isLogin:boolean){
        this.isLogin=isLogin
    }
    @action setUserName(username:string){
        this.values.username=username
    }
    @action setPassWord(password:string){
        this.values.password=password
    }
    @action login(){
        this.isLoading=true
        setTimeout(()=>{
            this.isLogin=true
            this.isLoading=false
        },1000)
    }
    @action register(){
        this.isLoading=true
        setTimeout(()=>{
            this.isLogin=true
            this.isLoading=false
        },1000)
    }
    @action logOut(){

    }
}
export default AuthStore