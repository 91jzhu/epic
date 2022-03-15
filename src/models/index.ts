import AV, {Query, User} from 'leancloud-storage'


AV.init({
    appId: "WEOI3D56qVYtAEKw2lVNloJi-gzGzoHsz",
    appKey: "K1CauEGMSdbtdmQSc1YQtROd",
    serverURL: "https://weoi3d56.lc-cn-n1-shared.com"
});

const user = new User();

const Auth = {
    register(username, password) {
        return new Promise((resolve, reject) => {
            user.setUsername(username);
            user.setPassword(password);
            user.signUp().then((user) => {
                resolve(`注册成功。objectId：${user.id}`)
            }, (error) => {
                reject('注册失败（通常是因为用户名已被使用')
            });
        })
    },
    login(username, password) {
        return new Promise((resolve, reject) => {
            User.logIn(username, password).then((user) => {
                // 登录成功
                resolve('登陆成功', user)
            }, (error) => {
                reject('登陆失败', error)
            });
        })
    },
    logout() {
        return new Promise((resolve, reject) => {
            User.logOut().then((info) => resolve(info), (e) => reject(e))
        })
    },
    getCurrentUser(){
        return User.current()
    }
}


export {Auth}