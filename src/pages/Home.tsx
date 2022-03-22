import styled from "styled-components";
import {observer} from "mobx-react";
import useStores from "../store";

const Home=observer(()=>{
    const {UserStore:{currentUser},AuthStore} = useStores()
    return (
        <Wrapper>
            <h2>Home</h2>
            {currentUser?currentUser['attributes']['username']:'未登录'}
        </Wrapper>
    )
})
const Wrapper=styled.div`
  flex:1;
`
export default Home