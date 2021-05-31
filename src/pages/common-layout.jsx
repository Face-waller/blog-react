import React from "react";
import 'src/pages/common-layout.scss'
import Header from "src/components/layout/header";
import Footer from "src/components/layout/footer";
import Breadcrumb from "src/components/layout/breadcrumb";
import Home from "src/pages/home/home";
import {Redirect, Route, Switch} from "react-router";
import About from "src/pages/about/about";
import Mood from "src/pages/mood/mood";
import ArticleList from "src/pages/article/article-list"
import ArticleDetail from "src/pages/article/article-detail"
import Board from "src/pages/board/board";
import {BackTop} from "antd";
import {ArrowUpOutlined} from '@ant-design/icons';

function CommonLayout(props){
    return (
        <>
            <Header/>
            <Breadcrumb/>
            <section className="container" style={{marginTop: 20}}>
                <Switch>
                    <Route path={`/home`} component={Home} />
                    <Route path={`/about`} component={About} />
                    <Route path={`/mood`} component={Mood} />
                    <Route path={`/article-list`} component={ArticleList} />
                    <Route path={`/article-detail`} component={ArticleDetail} />
                    <Route path={`/board`} component={Board} />
                    <Redirect to={`/home`} />
                </Switch>
            </section>
            <Footer/>
            <BackTop>
                <div className="to-top">
                    <ArrowUpOutlined />
                </div>
            </BackTop>
        </>
    )
}

export default CommonLayout
