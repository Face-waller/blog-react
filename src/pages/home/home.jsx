import React from "react"
import Sidebar from "src/components/layout/sidebar";
import ArticleIndexItem from "src/components/article-index-item";
import { Carousel } from 'antd';

import "src/pages/home/home.scss"

import banner1 from 'src/static/img/temp/banner1.jpg'
import banner8 from 'src/static/img/temp/banner8.png'
import {withRouter} from "react-router";

function Home(props) {
    // 更多
    const moreBlog = ()=> {
    }
    return (
        <>
            <div className="col-sm-9 col-md-9">
                {/*滚动图*/}
                <div className="slider_main">
                    <Carousel autoplay>
                        <div className='banner-box'>
                            <img className='img-banner' src={banner1} alt=""/>
                        </div>
                        <div className='banner-box'>
                            <img className='img-banner' src={banner8} alt=""/>
                        </div>
                    </Carousel>
                </div>

                <div className="mt-20 bg-fff box-shadow radius mb-5">
                    <div className="tab-category">
                        <a href=""><strong className="current">最新发布</strong></a>
                    </div>
                </div>

                <div className="art_content">
                    <ul className="index_arc">
                        {
                            new Array(6).fill(0).map((article,index)=>
                                <ArticleIndexItem key={index} hasImg={index % 2 === 0}/>)
                        }
                    </ul>
                    <div className="text-c mb-20" id="moreBlog">
                        <a className="btn  radius btn-block " onClick={moreBlog}>点击加载更多</a>
                        <a className="btn  radius btn-block hidden">加载中……</a>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </>
    )
}

export default withRouter(Home)
