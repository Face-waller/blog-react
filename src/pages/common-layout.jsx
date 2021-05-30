import React, {useState} from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Index from "./index";

function CommonLayout(props){
    return (
        <>
            <Header/>
            <section className="container" style={{marginTop: 20}}>
                <Index/>
            </section>
            <Footer/>
        </>
    )
}

export default CommonLayout
