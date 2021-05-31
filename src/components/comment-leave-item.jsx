import React from "react";
import {withRouter} from "react-router";

function CommentLeaveItem({msgItem}) {
    console.log(`msgItem.msgUser.headerUrl : ==> ${msgItem.msgUser.headerUrl}`)
    return (
        <li className="item cl">
            <a href="#">
                <i className="avatar size-L radius">
                    <img alt="" src={msgItem.msgUser.headerUrl}/>
                </i>
            </a>
            <div className="comment-main">
                <header className="comment-header">
                    <div className="comment-meta"><a className="comment-author" href="#">{msgItem.msgUser.name}</a>
                        <div className="f-r">2014-8-31
                            {msgItem.time}
                        </div>
                    </div>
                </header>
                <div className="comment-body">
                    {msgItem.details}
                    <ul className="commentList">
                        {
                            msgItem.reply.length > 0 ?
                            msgItem.reply.map(n=> <CommentLeaveItem key={n.id} msgItem={n} />) :
                            null
                        }
                    </ul>
                    <button className="hf f-r btn btn-default size-S mt-10" name="2">回复</button>
                </div>
            </div>
        </li>
    )
}

export default withRouter(CommentLeaveItem)