import AV, {Query, User} from 'leancloud-storage'

AV.init({
    appId: "WEOI3D56qVYtAEKw2lVNloJi-gzGzoHsz",
    appKey: "K1CauEGMSdbtdmQSc1YQtROd",
    serverURL: "https://weoi3d56.lc-cn-n1-shared.com"
});

const user = new User();

const Auth = {
    register(username: string, password: string) {
        return new Promise((resolve, reject) => {
            user.setUsername(username);
            user.setPassword(password);
            user.signUp().then((user) => {
                resolve(`注册成功。objectId：${user.id}`)
            }, () => {
                reject('注册失败（通常是因为用户名已被使用')
            });
        })
    },
    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            User.logIn(username, password).then((user) => {
                resolve(user)
            }, () => {
                reject('登陆失败')
            });
        })
    },
    logout() {
        return new Promise((resolve, reject) => {
            User.logOut().then((info) => {
                resolve(info)
            }, (e) => reject(e))
        })
    },
    getCurrentUser() {
        return User.current()
    }
}

const Uploader={
    add(file:any,filename:string){
        return new Promise((resolve,reject)=>{
            const item:any=new AV.Object('Image')
            const avFile = new AV.File(filename, file)
            item.set('filename',filename)
            item.set('owner',AV.User.current())
            item.set('url',avFile)
            item.save().then((serverFile:any)=> {
                resolve(serverFile)
            }, (e:any) =>{
                reject(JSON.stringify(e))
            });
        })
    },
    find(page=0,limit=10){
        return new Promise(resolve=>{
            const query = new AV.Query('Image')
            query.limit(limit)
            query.skip(page*limit)
            query.descending('createdAt')
            query.equalTo('owner', AV.User.current())
            query.find().then((results) => {
                console.log(results)
                resolve(results)
            });
        }).catch(e=>{
            console.log(e)
        })
    }
}


export {Auth,Uploader}