import styled from "styled-components";
import {Spin} from "antd";

const Loading=()=>{
    return (
        <Wrapper>
            <Spin tip='loading...'/>
        </Wrapper>
    )
}
const Wrapper=styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Loading