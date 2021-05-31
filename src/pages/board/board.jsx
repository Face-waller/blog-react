import React, {useEffect, useRef} from "react";
import {withRouter} from "react-router";
import 'src/pages/board/board.scss'
import ReactWEditor from 'wangeditor-for-react';
import CommentLeaveItem from "src/components/comment-leave-item";

function Board(props) {
    const editorConfig = {
        height: 184,
        colors: ['#429798'],
        menus:  ['code', 'quote', 'bold', 'image', 'emoticon', 'undo'],
        emotions: [
            {
                title: 'emoji',  // tab 的标题
                type: 'emoji', // 'emoji' / 'image'
                // emoji 表情，content 是一个数组即可
                content: '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐'.split(/\s/),
            }
        ]
    }

    const msgList = [
        {
            id: 1,
            pid: 0,
            msgUser: {
                name: '老王',
                headerUrl: 'http://q.qlogo.cn/qqapp/101388738/1CF8425D24660DB8C3EBB76C03D95F35/100'
            },
            time: '2014-8-31 8:30',
            details: '你是猴子派来的救兵吗',
            reply: [
                {
                    id: 1,
                    pid: 1,
                    msgUser: {
                        name: '小李',
                        headerUrl: 'http://q.qlogo.cn/qqapp/101388738/1CF8425D24660DB8C3EBB76C03D95F35/100'
                    },
                    time: '2014-8-31 8:35',
                    details: '显然不是',
                    reply: [],
                }
            ]
        },
        {
            id: 2,
            pid: 0,
            msgUser: {
                name: '小王',
                headerUrl: 'http://qzapp.qlogo.cn/qzapp/101388738/1CF8425D24660DB8C3EBB76C03D95F35/100'
            },
            time: '2014-8-31 9:30',
            details: '你是猴子派来的逗比吗',
            reply: []
        },

    ]

    return (
        <div className="col-xs-12 col-md-10 col-md-offset-1">
            {/*用于评论*/}
            <div id="ct">
                <div id="err" className="Huialert Huialert-danger hidden radius">成功状态提示</div>
                <ReactWEditor
                    placeholder='想说点什么...'
                    defaultValue=''
                    config={editorConfig}
                    onChange={(html) => {
                        console.log('onChange html:', html)
                    }}
                />
                <div className="text-r mt-10">
                    <button className="btn btn-primary radius"> 发表评论</button>
                </div>
            </div>
            <div className="line"/>
            <ul className="commentList mt-50">
                {
                    msgList.map(n=><CommentLeaveItem key={n.id} msgItem={n}/>)
                }
            </ul>
        </div>
    )
}

export default withRouter(Board)