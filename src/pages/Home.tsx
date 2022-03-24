import styled from "styled-components";
import {observer} from "mobx-react";
import useStores from "../store";
import Uploader from "../components/Uploader";
import Tips from "../components/Tips";

const Home = observer(() => {
    const {UserStore: {currentUser}, AuthStore} = useStores()
    return (
        <Wrapper>
            {currentUser ?  null: <Tips>请登录再上传</Tips>}
            <Uploader/>
        </Wrapper>
    )
})
const Wrapper = styled.div`
  flex: 1;
  //border:5px solid green;
`
export default Home