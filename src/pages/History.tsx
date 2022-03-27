import styled from "styled-components";
import {useStores} from "../store";
import Clist from "../components/Clist";

const History=()=>{
    const {UserStore}=useStores()
    return (
        <Wrapper>
            <h1>History</h1>
            <Clist/>
        </Wrapper>
    )
}
const Wrapper=styled.div`
  flex:1;
  border:1px dashed #ccc;
  width:100vw;
  padding:36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export default History