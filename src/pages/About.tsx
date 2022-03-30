import styled from "styled-components";
import {useStores} from "../store";
import dayjs from 'dayjs';

const About=()=>{
    const {UserStore}=useStores()
    const time=()=>{
        return dayjs((UserStore.currentUser as any).createdAt).format('YYYY年MM月DD日')
    }
    return (
        <Wrapper>
            <h1>About</h1>
            {
               !UserStore.currentUser?
                   <h2>空空如也，快登录吧</h2>:
                   <>
                       <h3>用户名：{(UserStore.currentUser as any).attributes.username}</h3>
                       <h3>创建时间：{time()}</h3>
                   </>
            }
        </Wrapper>
    )
}
const Wrapper=styled.div`
  flex:1;
  border:1px dashed #ccc;
  padding:36px;
  width:100vw;
`
export default About