import React, {useEffect, useState} from "react";

import logo from "src/static/img/logo.png"
import qqIcon from "src/static/img/qq.jpg"

import "src/static/css/common.css"
import {withRouter} from "react-router";

function Header(props) {
    // 当前菜单激活项
    const [currentMenuActive, setCurrentMenuActive] = useState('首页')
    // 是否显示nav
    const [navbarNavToggle, setNavbarNavToggle] = useState('block')
    const showSide = ()=> {
        let toggleValue = navbarNavToggle === 'block' ? 'none' : 'block'
        setNavbarNavToggle(toggleValue)
    }

    useEffect(()=>{
        switch (props.match.params.componentPath) {
            case 'home':{
                setCurrentMenuActive('首页')
                break;
            }
            case 'about':{
                setCurrentMenuActive('关于我')
                break;
            }
            case 'mood':{
                setCurrentMenuActive('动态')
                break;
            }
            case 'article-list':{
                setCurrentMenuActive('文章')
                break;
            }
            case 'board':{
                setCurrentMenuActive('留言板')
                break;
            }
        }
    },[props.match.params])

    const menuClick = (mark) => {
        setCurrentMenuActive(mark)
        switch (mark) {
            case '首页':{
                props.history.push('/home')
                break;
            }
            case '关于我':{
                props.history.push('/about')
                break;
            }
            case '动态':{
                props.history.push('/mood')
                break;
            }
            case '文章':{
                props.history.push('/article-list')
                break;
            }
            case '留言板':{
                props.history.push('/board')
                break;
            }
        }
    }

    return (
        <header className="navbar-wrapper">
            <div className="navbar navbar-fixed-top">
                <div className="container cl">
                    <a className="navbar-logo hidden-xs">
                        <img className="logo" src={logo} alt="番茄博客"/>
                    </a>
                    <a className="logo navbar-logo-m visible-xs">番茄博客</a>
                    <a
                        aria-hidden="false"
                        className="nav-toggle Hui-iconfont visible-xs"
                        onClick={showSide}
                    >
                        &#xe667;
                    </a>
                    <nav style={{display: navbarNavToggle}} className="nav navbar-nav nav-collapse w_menu" role="navigation">
                        <ul className="cl">
                            <li className={(currentMenuActive === '首页' && 'active').toString()}>
                                <a onClick={()=> menuClick('首页')} data-hover="首页">首页</a>
                            </li>
                            <li className={(currentMenuActive === '动态' && 'active').toString()}>
                                <a onClick={()=> menuClick('动态')} data-hover="动态">动态</a>
                            </li>
                            <li className={(currentMenuActive === '文章' && 'active').toString()}>
                                <a onClick={()=> menuClick('文章')} data-hover="文章">文章</a>
                            </li>
                            <li className={(currentMenuActive === '留言板' && 'active').toString()}>
                                <a onClick={()=> menuClick('留言板')} data-hover="留言板">留言板</a>
                            </li>
                            <li className={(currentMenuActive === '关于我' && 'active').toString()}>
                                <a onClick={()=> menuClick('关于我')} data-hover="关于我">关于我</a>
                            </li>
                        </ul>
                    </nav>
                    <nav style={{display: navbarNavToggle,top: 0}} className="navbar-nav navbar-userbar hidden-xs hidden-sm">
                        <ul className="cl">
                            <li className="userInfo dropDown dropDown_hover">
                                <a><img className="avatar radius" src="img/40.jpg" alt="丶似浅 "></img></a>
                                <ul className="dropDown-menu menu radius box-shadow">
                                    <li><a href="/app/loginOut">退出</a></li>
                                </ul>
                                <a href="/app/qq">
                                    <img className="avatar size-S" src={qqIcon} title="登入"></img>
                                    登入
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header)