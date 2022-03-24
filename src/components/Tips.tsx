import useStores from "../store";
import {observer} from "mobx-react";
import styled from "styled-components";

const Tips = observer(({children}: { children: any }) => {
    console.log(children)
    const {UserStore} = useStores()
    return (
        <Wrapper>
            {UserStore.currentUser ? null : children}
        </Wrapper>
    )
})
const Wrapper=styled.div`
  border:1px solid red;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color:grey;
  font-size: 32px;
`
export default Tips