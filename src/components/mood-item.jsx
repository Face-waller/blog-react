import React from "react";
import {withRouter} from "react-router";

import 'src/static/css/timeline.css'
import location from 'src/static/css/timeline/cd-icon-location.svg'

function MoodItem(props) {
    return (
        <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
                <img src={location} alt="position"/>
            </div>
            <div className="cd-timeline-content">
                <h4>测试测试</h4>
                <p>Lao王博客测试版本上线。。Lao王博客测试版本上线。。Lao王博客测试版本上线。。Lao王博客测试版本上线。。Lao王博客测试版本上线。。Lao王博客测试版本上线。。</p>
                <a href="http://www.wfyvv.com" className="f-r">
                    <input className="btn btn-success size-S" type="button" value="更多"/>
                </a>
                <span className="cd-date" style={{left: '130%'}}>2017年1月01日</span>
            </div>
        </div>
    )
}

export default withRouter(MoodItem)