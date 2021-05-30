import React from "react";
import {withRouter} from "react-router";
import Sidebar from "src/components/layout/sidebar";
import ArticleIndexItem from "src/components/article-index-item";

function ArticleList(props) {
    return (
        <>
            <div className="col-sm-9 col-md-9">
                {/*article list*/}
                <ul className="index_arc">
                    {
                        new Array(6).fill(0).map((article,index)=>
                            <ArticleIndexItem key={index} hasImg={index % 2 === 0}/>)
                    }
                </ul>
                <div className="text-c mb-20" id="moreBlog">
                    <a className="btn  radius btn-block "
                       onClick="moreBlog('${blogType.id}','${tag.name}');">点击加载更多</a>
                    <a className="btn  radius btn-block hidden">加载中……</a>
                </div>
            </div>
            <Sidebar/>
        </>
    )
}

export default withRouter(ArticleList)