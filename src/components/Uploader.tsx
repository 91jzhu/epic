import useStores from "../store";
import {observer} from "mobx-react";


const Uploader = observer(() => {
    const {ImageStore}=useStores()
    const onChange=(e:any)=>{
        console.dir()
        if(e.target.files[0]){
            console.log(e.target.files[0])
            ImageStore.setFile(e.target.files[0])
            ImageStore.setFileName(e.target.files[0].name)
            ImageStore.upload().then((serverFile:any)=>{
                console.log('上传成功')
                console.log(serverFile);
            }).catch(e=>{
                console.warn(e)
            })
        }
    }
    return (
        <>
            <h2>uploader</h2>
            <input type='file' onChange={onChange}/>
        </>
    )
})

export default Uploader