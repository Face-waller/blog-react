import React, {useState} from "react";

import logo from "../../static/img/logo.png"
import qqIcon from "../../static/img/qq.jpg"

import "../../static/css/common.css"

function Header(props) {
    // 是否显示nav
    const [navbarNavToggle, setNavbarNavToggle] = useState('block')
    const showSide = ()=> {
        let toggleValue = navbarNavToggle === 'block' ? 'none' : 'block'
        setNavbarNavToggle(toggleValue)
    }

    return (
        <header className="navbar-wrapper">
            <div className="navbar navbar-fixed-top">
                <div className="container cl">
                    <a className="navbar-logo hidden-xs" href="index.html">
                        <img className="logo" src={logo} alt="Lao王博客"/>
                    </a>
                    <a className="logo navbar-logo-m visible-xs" href="index.html">Lao王博客</a>
                    <a
                        aria-hidden="false"
                        className="nav-toggle Hui-iconfont visible-xs"
                        onClick={showSide}
                    >
                        &#xe667;
                    </a>
                    <nav style={{display: navbarNavToggle}} className="nav navbar-nav nav-collapse w_menu" role="navigation">
                        <ul className="cl">
                            <li className="active"><a href="index.html" data-hover="首页">首页</a></li>
                            <li><a href="about.html" data-hover="关于我">关于我</a></li>
                            <li><a href="mood.html" data-hover="碎言碎语">碎言碎语</a></li>
                            <li><a href="article.html" data-hover="学无止尽">学无止尽</a></li>
                            <li><a href="board.html" data-hover="留言板">留言板</a></li>
                        </ul>
                    </nav>
                    <nav style={{display: navbarNavToggle,top: 0}} className="navbar-nav navbar-userbar hidden-xs hidden-sm">
                        <ul className="cl">
                            <li className="userInfo dropDown dropDown_hover">
                                <a href="javascript:;"><img className="avatar radius" src="img/40.jpg" alt="丶似浅 "></img></a>
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

export default Header