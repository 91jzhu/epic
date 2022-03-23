import {createContext, useContext} from "react";
import AuthStore from "./auth";
import UserStore from './user'
import ImageStore from './image'

const context=createContext({
    AuthStore,
    UserStore,
    ImageStore
})

const useStores=()=>useContext(context)

export default useStores