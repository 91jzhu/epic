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
  padding:12px 0;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Footer