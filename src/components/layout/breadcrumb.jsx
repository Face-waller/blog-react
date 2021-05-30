import React from "react";
import {withRouter} from "react-router";

function Breadcrumb(props) {
    return (
        <nav className="breadcrumb">
            <div className="container"><i className="Hui-iconfont">&#xe67f;</i> <a href="index.html"
                                                                                   className="c-primary">首页</a> <span
                className="c-gray en">&gt;</span> <span className="c-gray">关于</span></div>
        </nav>
    )
}

export default withRouter(Breadcrumb)