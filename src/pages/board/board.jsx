import React from "react";
import {withRouter} from "react-router";

function Board(props) {
    return (
        <div className="col-xs-12 col-md-10 col-md-offset-1 mt-20">
            {/*用于评论*/}
            <div className="mt-20" id="ct">
                <div id="err" className="Huialert Huialert-danger hidden radius">成功状态提示</div>
                <textarea id="textarea1" name="comment" style={{height: 200}} placeholder="看完不留一发？"> </textarea>
                <div className="text-r mt-10">
                    <button className="btn btn-primary radius"> 发表评论</button>
                </div>
            </div>

            <div className="line"></div>

            <ul className="commentList mt-50">

                <li className="item cl"><a href="#"><i className="avatar size-L radius"><img alt=""
                                                                                             src="http://q.qlogo.cn/qqapp/101388738/1CF8425D24660DB8C3EBB76C03D95F35/100"/></i></a>
                    <div className="comment-main">
                        <header className="comment-header">
                            <div className="comment-meta"><a className="comment-author" href="#">老王</a>
                                <time title="2014年8月31日 下午3:20" dateTime="2014-08-31T03:54:20" className="f-r">2014-8-31
                                    15:20
                                </time>
                            </div>
                        </header>
                        <div className="comment-body">
                            你是猴子派来的救兵吗？

                            <ul className="commentList">
                                <li className="item cl"><a href="#"><i className="avatar size-L radius"><img alt=""
                                                                                                             src="http://qzapp.qlogo.cn/qzapp/101388738/1CF8425D24660DB8C3EBB76C03D95F35/100"/></i></a>
                                    <div className="comment-main">
                                        <header className="comment-header">
                                            <div className="comment-meta"><a className="comment-author" href="#">老王</a>
                                                <time title="2014年8月31日 下午3:20" dateTime="2014-08-31T03:54:20"
                                                      className="f-r">2014-8-31 15:20
                                                </time>
                                            </div>
                                        </header>
                                        <div className="comment-body">
                                            <p> 是的</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="item cl"><a href="#"><i className="avatar size-L radius"><img alt=""
                                                                                                             src="http://qzapp.qlogo.cn/qzapp/101388738/696C8A17B3383B88804BA92ECBAA5D81/100"/></i></a>
                                    <div className="comment-main">
                                        <header className="comment-header">
                                            <div className="comment-meta"><a className="comment-author" href="#">老王</a>
                                                <time title="2014年8月31日 下午3:20" dateTime="2014-08-31T03:54:20"
                                                      className="f-r">2014-8-31 15:20
                                                </time>
                                            </div>
                                        </header>
                                        <div className="comment-body">
                                            <p> +1</p>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                            <button className="hf f-r btn btn-default size-S mt-10" name="2">回复</button>

                        </div>
                    </div>
                </li>
                <li className="item cl"><a href="#"><i className="avatar size-L radius"><img alt=""
                                                                                             src="http://qzapp.qlogo.cn/qzapp/101388738/1CF8425D24660DB8C3EBB76C03D95F35/100"/></i></a>
                    <div className="comment-main">
                        <header className="comment-header">
                            <div className="comment-meta"><a className="comment-author" href="#">老王</a>
                                <time title="2014年8月31日 下午3:20" dateTime="2014-08-31T03:54:20" className="f-r">2014-8-31
                                    15:20
                                </time>
                            </div>
                        </header>
                        <div className="comment-body">
                            你是猴子派来的救兵吗？

                            <button className="hf f-r btn btn-default size-S mt-10" name="3">回复</button>

                        </div>
                    </div>
                </li>

            </ul>
            {/*用于回复*/}
            <div className="comment hidden mt-20">
                <div id="err2" className="Huialert Huialert-danger hidden radius">成功状态提示</div>
                <textarea className="textarea" style={{height: 100}}> </textarea>
                <button type="button" className="btn btn-primary radius mt-10">回复</button>
                <a className="cancelReply f-r mt-10">取消回复</a>
            </div>

        </div>
    )
}

export default withRouter(Board)