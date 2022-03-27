import {createContext, useContext} from "react";
import AuthStore from "./auth";
import UserStore from './user'
import ImageStore from './image'
import HistoryStore from './history'

const context=createContext({
    AuthStore,
    UserStore,
    ImageStore,
    HistoryStore
});
(window as any).store=HistoryStore.historyList

export const useStores=()=>useContext(context)