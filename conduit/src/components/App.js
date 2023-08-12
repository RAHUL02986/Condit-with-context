import React from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import { UserContext } from "./context/UserContext";
import Home from "./Home";
import Aside from "./Aside";
export default function App (){
    return<>
    <UserContext.Provider  >
        <Header/>
        <Subheader/>
        <Home/>
        <Aside/>
    </UserContext.Provider>
    </>
}