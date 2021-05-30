import React from 'react';
import './App.scss';
import CommonLayout from "./pages/common-layout";
import {Route} from "react-router";

function App(props) {
    return (
        <div className="App">
            <Route path={`/:componentPath?`} component={CommonLayout}/>
            {/*<CommonLayout/>*/}
        </div>
    );
}

export default App;
