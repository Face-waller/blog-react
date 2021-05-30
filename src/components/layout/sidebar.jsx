import React from "react";

import img40 from '../../static/img/40.jpg'

function Sidebar(props) {
    return (
        <div className="col-sm-3 col-md-3">
            {/*站点声明*/}
            <div className="panel panel-default mb-20">
                <div className="panel-body">
                    <i className="Hui-iconfont" style={{float: 'left'}}>&#xe62f;&nbsp;</i>
                    <div className="slideTxtBox">
                        <div className="bd">
                            <ul>
                                <li>Lao博客测试版上线，欢迎访问</li>
                                <li>内容如有侵犯，请立即联系管理员删除</li>
                                <li>本站内容仅供学习和参阅，不做任何商业用途</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*博主信息*/}
            <div className="bg-fff box-shadow radius mb-20">
                <div className="tab-category">
                    <a href=""><strong>博主信息</strong></a>
                </div>
                <div className="tab-category-item">
                    <ul className="index_recd">
                        <li className="index_recd_item"><i className="Hui-iconfont">&#xe653;</i>姓名：王风宇</li>
                        <li className="index_recd_item"><i className="Hui-iconfont">&#xe70d;</i>职业：JavaWeb开发</li>
                        <li className="index_recd_item"><i className="Hui-iconfont">&#xe63b;</i>邮箱：<a
                            href="mailto:wfyv@qq.com">wfyv@qq.com</a></li>
                        <li className="index_recd_item"><i className="Hui-iconfont">&#xe671;</i>定位：安徽 &middot; 合肥</li>
                    </ul>
                </div>
            </div>
            {/*热门推荐*/}
            <div className="bg-fff box-shadow radius mb-20">
                <div className="tab-category">
                    <a href=""><strong>热门推荐</strong></a>
                </div>
                <div className="tab-category-item">
                    <ul className="index_recd">
                        <li>
                            <a>阻止a标签href默认跳转事件</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                        </li>
                        <li>
                            <a>PHP面试题汇总</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                        </li>
                        <li>
                            <a>阻止a标签href默认跳转事件</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                        </li>
                        <li>
                            <a>阻止a标签href默认跳转事件</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                        </li>
                        <li>
                            <a>PHP面试题汇总</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe622;</i> 276 </p>
                        </li>
                    </ul>
                </div>
            </div>
            {/*点击排行*/}
            <div className="bg-fff box-shadow radius mb-20">
                <div className="tab-category">
                    <a href=""><strong>点击排行</strong></a>
                </div>
                <div className="tab-category-item">
                    <ul className="index_recd clickTop">
                        <li>
                            <a>AJAX的刷新和前进后退问题解决</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe6c1;</i> 276° </p>
                        </li>
                        <li>
                            <a>AJAX的刷新和前进后退问题解决</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe6c1;</i> 276° </p>
                        </li>
                        <li>
                            <a>AJAX的刷新和前进后退问题解决</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe6c1;</i> 276° </p>
                        </li>
                        <li>
                            <a>AJAX的刷新和前进后退问题解决</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe6c1;</i> 276° </p>
                        </li>
                        <li>
                            <a>AJAX的刷新和前进后退问题解决</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe6c1;</i> 276° </p>
                        </li>
                        <li>
                            <a>AJAX的刷新和前进后退问题解决</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe6c1;</i> 276° </p>
                        </li>
                        <li>
                            <a >AJAX的刷新和前进后退问题解决</a>
                            <p className="hits"><i className="Hui-iconfont" title="点击量">&#xe6c1;</i> 276° </p>
                        </li>
                    </ul>
                </div>
            </div>
            {/*标签*/}
            <div className="bg-fff box-shadow radius mb-20">
                <div className="tab-category">
                    <a href=""><strong>标签云</strong></a>
                </div>
                <div className="tab-category-item">
                    <div className="tags"><a href="http://www.h-ui.net/">H-ui前端框架</a> <a
                        href="http://www.h-ui.net/websafecolors.shtml">Web安全色</a> <a
                        href="http://www.h-ui.net/Hui-4.4-Unslider.shtml">jQuery轮播插件</a> <a
                        href="http://idc.likejianzhan.com/vhost/korea_hosting.php">韩国云虚拟主机</a> <a
                        href="http://www.h-ui.net/bug.shtml">IEbug</a> <a
                        href="http://www.h-ui.net/site.shtml">IT网址导航</a> <a
                        href="http://www.h-ui.net/icon/index.shtml">网站常用小图标</a> <a
                        href="http://www.h-ui.net/tools/jsformat.shtml">web工具箱</a> <a
                        href="http://www.h-ui.net/bg/index.shtml">网站常用背景素材</a> <a
                        href="http://www.h-ui.net/yuedu/chm.shtml">H-ui阅读</a> <a
                        href="http://www.h-ui.net/easydialog-v2.0/index.html">弹出层插件</a> <a
                        href="http://www.h-ui.net/SuperSlide2.1/demo.html">SuperSlide插件</a> <a
                        href="http://www.h-ui.net/TouchSlide1.1/demo.html">TouchSlide</a></div>
                </div>
            </div>
            {/*图片*/}
            <div className="bg-fff box-shadow radius mb-20">
                <div className="tab-category">
                    <a href=""><strong>扫我关注</strong></a>
                </div>
                <div className="tab-category-item">
                    <img data-original="temp/gg.jpg" className="img-responsive lazyload" alt="响应式图片"></img>
                </div>
            </div>
            {/*友情链接*/}
            <div className="bg-fff box-shadow radius mb-20">
                <div className="tab-category">
                    <a href=""><strong>隔壁邻居</strong></a>
                </div>
                <div className="tab-category-item">
                    <span><i className="Hui-iconfont">&#xe6f1;</i><a  className="btn-link">百度</a></span>
                    <span><i className="Hui-iconfont">&#xe6f1;</i><a  className="btn-link">淘宝</a></span>
                    <span><i className="Hui-iconfont">&#xe6f1;</i><a  className="btn-link">腾讯</a></span>
                    <span><i className="Hui-iconfont">&#xe6f1;</i><a  className="btn-link">慕课网</a></span>
                    <span><i className="Hui-iconfont">&#xe6f1;</i><a  className="btn-link">h-ui</a></span>
                </div>
            </div>
            {/*最近访客*/}
            <div className="bg-fff box-shadow radius mb-20">
                <div className="tab-category">
                    <a href=""><strong>最近访客</strong></a>
                </div>
                <div className="panel-body">
                    <ul className="recent">
                        <div className="item"><img src={img40} alt=""></img></div>
                        <div className="item"><img src={img40} alt=""></img></div>
                        <div className="item"><img src={img40} alt=""></img></div>
                        <div className="item"><img src={img40} alt=""></img></div>
                        <div className="item"><img src={img40} alt=""></img></div>
                        <div className="item"><img src={img40} alt=""></img></div>
                        <div className="item"><img src={img40} alt=""></img></div>
                        <div className="item"><img src={img40} alt=""></img></div>
                        <div className="item"><img src={img40} alt=""></img></div>
                        <div className="item"><img src={img40} alt=""></img></div>
                    </ul>
                </div>
            </div>
            {/*分享*/}
            <div className="bg-fff box-shadow radius mb-20">
                <div className="tab-category">
                    <a href=""><strong>站点分享</strong></a>
                </div>
                <div className="panel-body">
                    <div className="bdsharebuttonbox Hui-share"><a  className="bds_weixin Hui-iconfont"
                                                                   data-cmd="weixin" title="分享到微信">&#xe694;</a><a
                         className="bds_qzone Hui-iconfont" data-cmd="qzone" title="分享到QQ空间">&#xe6c8;</a> <a
                         className="bds_sqq Hui-iconfont" data-cmd="sqq" title="分享到QQ好友">&#xe67b;</a> <a
                         className="bds_tsina Hui-iconfont" data-cmd="tsina" title="分享到新浪微博">&#xe6da;</a> <a
                         className="bds_tqq Hui-iconfont" data-cmd="tqq" title="分享到腾讯微博">&#xe6d9;</a></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar