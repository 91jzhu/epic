import styled from "styled-components";
import {Uploader} from "../models";
import {useStores} from "../store";

const History=()=>{
    const {UserStore}=useStores()
    Uploader.find(UserStore.currentUser!).then(data=>{
        console.log(data)
    })
    return (
        <Wrapper>
            <h2>History</h2>

        </Wrapper>
    )
}
const Wrapper=styled.div`
  flex:1;
  border:1px dashed #ccc;
  width:900px;
`
export default History