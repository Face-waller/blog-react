import React from "react";
import Header from "src/components/layout/header";
import Footer from "src/components/layout/footer";
import Home from "src/pages/home/home";
import {Redirect, Route, Switch} from "react-router";
import About from "src/pages/about/about";
import Mood from "src/pages/mood/mood";
import ArticleList from "src/pages/article/article-list"
import ArticleDetail from "src/pages/article/article-detail"
import Board from "src/pages/board/board";

function CommonLayout(props){
    return (
        <>
            <Header/>
            <section className="container" style={{marginTop: 20}}>
                <Switch>
                    <Route path={`/home`} component={Home} />
                    <Route path={`/about`} component={About} />
                    <Route path={`/mood`} component={Mood} />
                    <Route path={`/article-list`} component={ArticleList} />
                    <Route path={`/article-detail`} component={ArticleDetail} />
                    <Route path={`/board`} component={Board} />
                    <Redirect to={`/index`} />
                </Switch>
            </section>
            <Footer/>
        </>
    )
}

export default CommonLayout
