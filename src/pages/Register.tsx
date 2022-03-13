import {observer} from "mobx-react";
import useStores from "../store";
import React from "react";

const Register=observer(()=>{
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

export default Register