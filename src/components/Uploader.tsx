import {useStores} from "../store";
import {observer, useLocalObservable} from "mobx-react";
import {Alert, message, Spin, Upload} from "antd";
import {InboxOutlined} from '@ant-design/icons';
import styled from "styled-components";

const {Dragger} = Upload;

const Uploader = observer(() => {
    const {ImageStore, UserStore} = useStores()
    const store = useLocalObservable(() => ({
        width: null,
        height: null,
        get widthStr() {
            return store.width ? `/w/${store.width}` : ''
        },
        get heightStr() {
            return store.height ? `/h/${store.height}` : ""
        },
        get fullStr() {
            return (ImageStore.serverFile as any).attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
        }
    }))
    const props = {
        showUploadList: false,
        beforeUpload(file: any) {
            console.log(file)
            if (UserStore.currentUser) {
                if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
                    message.error('只能上传 png/svg/jpg/jpeg/gif 类型的图片')
                    return false;
                }
                if (file.size > 1024 * 1024) {
                    message.error('图片不能超过 1M')
                    return false;
                }
                ImageStore.setFile(file)
                ImageStore.setFileName(file.name)
                ImageStore.upload().then((serverFile: any) => {
                    console.log('上传成功')
                    console.log(serverFile);
                }).catch(e => {
                    console.warn(e)
                })
            } else {
                message.warning('请先登录')
            }
            return false;
        },
    };
    const handleWidth = (e: any) => {
        store.width = e.target.value
    }
    const handleHeight = (e: any) => {
        store.height = e.target.value
    }
    return (
        <Wrapper>
            <Spin spinning={ImageStore.isLoading} tip='上传中，请稍后...'>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">点击或拖拽上传图片</p>
                    <p className="ant-upload-hint">仅支持 png / jpg / jpeg / gif /svg 格式，且大小 1M 内</p>
                </Dragger>
            </Spin>
            {ImageStore.serverFile ?
                <Result>
                    <H1>上传结果</H1>
                    <dl>
                        <dt>线上地址</dt>
                        <dd>
                            <a href={(ImageStore.serverFile as any).attributes.url.attributes.url}
                               rel='noreferrer'
                               target='_blank'>{(ImageStore.serverFile as any).attributes.url.attributes.url}</a>
                        </dd>
                        <dt>文件名</dt>
                        <dd>{ImageStore.filename}</dd>
                        <dt>图片预览</dt>
                        <dd>
                            <Image src={(ImageStore.serverFile as any).attributes.url.attributes.url}
                                   alt={ImageStore.filename}/>
                        </dd>
                        <dt>尺寸定制</dt>
                        <dd>
                            <input placeholder='最大宽度(可选)' onChange={handleWidth}/>
                            <input placeholder='最大高度(可选)' onChange={handleHeight}/>
                        </dd>
                        <dd>
                            <a href={store.fullStr} target='_blank' rel='noreferrer'>{store.fullStr}</a>
                        </dd>
                    </dl>
                </Result> : null}
        </Wrapper>
    )
})
const Wrapper = styled.div`
  //border: 1px dashed #ccc;
  padding: 24px;
  width: 900px;
  flex:1;
`
const Result = styled.div`
  border: 1px dashed #ccc;
  margin-top: 30px;
  padding: 24px;
  width: 852px;
`
const H1 = styled.h1`
  margin: 20px 0;
  text-align: center;
`
const Image = styled.img`
  max-width: 300px;
`
export default Uploader