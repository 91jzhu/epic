import {createContext, useContext} from "react";
import AuthStore from "./auth";

const context=createContext({
    AuthStore:new AuthStore()
})

const useStores=()=>useContext(context)

export default useStores