import useStores from "../store";
import {observer} from "mobx-react";

const Login=observer(()=>{
    const {AuthStore:{values:{username,password}}}=useStores()
    return (
        <div>
            <h2>{username}</h2>
        </div>
    )
})
export default Login