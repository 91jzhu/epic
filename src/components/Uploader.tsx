import useStores from "../store";
import {observer} from "mobx-react";
import {message, Upload} from "antd";
import {InboxOutlined} from '@ant-design/icons';
import styled from "styled-components";

const {Dragger} = Upload;


const Uploader = observer(() => {
    const {ImageStore,UserStore} = useStores()
    const props = {
        showUploadList:false,
        beforeUpload(file: any) {
            console.log(file)
            if(UserStore.currentUser){
                ImageStore.setFile(file)
                ImageStore.setFileName(file.name)
                ImageStore.upload().then((serverFile: any) => {
                    console.log('上传成功')
                    console.log(serverFile);
                }).catch(e => {
                    console.warn(e)
                })
            }else{
                message.warning('请先登录')
            }
            return false;
        },
    };
    return (
        <Wrapper>
            <h2>uploader</h2>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined/>
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
            <h3>上传结果</h3>
            <div>
                {ImageStore.serverFile ? <div>
                    <div>{ImageStore.filename}</div>
                    <div>{(ImageStore.serverFile as any).attributes.url.attributes.url}</div>
                </div>:null}
            </div>
        </Wrapper>
    )
})
const Wrapper = styled.div`
  border: 1px solid red;
  padding: 24px;
`

export default Uploader