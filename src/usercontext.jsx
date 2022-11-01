import React, { createContext, useState } from "react";
export const AccountContext= createContext([])
 
export function UserContextprovider(props){
const [account, setAccount]=useState([])
return(
    <AccountContext.Provider value={{account, setAccount}}>{props.children} </AccountContext.Provider>
)
}
