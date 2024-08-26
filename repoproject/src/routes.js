import React from "react";
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Main from "./pages/Main";
import Repository from "./pages/Repository";
export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path= "/" element= {<Main/>}/>
            <Route path= "/repository/:repoId" element= {<Repository/>}/>
        </Switch>
        </BrowserRouter>

    )
}