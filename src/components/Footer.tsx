import styled from "styled-components";

const Footer=()=>{
    return (
        <Wrapper>
            <h2>Footer</h2>
        </Wrapper>
    )
}
const Wrapper=styled.div`
  h2{
    color:grey;
  }
  border:1px solid red;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:18px 0;
`
export default Footer