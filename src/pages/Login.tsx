import useStores from "../store";
import {observer} from "mobx-react";
import React from "react";

const Login=observer(()=>{
    const {AuthStore}=useStores()
    const onChange=(e:any)=>{
        AuthStore.setUserName(e.target.value)
    }
    return (
        <div>
            <h2>{AuthStore.values.username}</h2>
            <input onChange={onChange}/>
        </div>
    )
})

export default Login