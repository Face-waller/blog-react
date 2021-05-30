import React from "react";
import {withRouter} from "react-router";
import MoodItem from "src/components/mood-item";
import 'src/static/css/timeline.css'

function Mood(props) {
    return (
        <div className="container-fluid">
            <div className="timeline">
                {
                    new Array(6).fill(0).map((article,index)=>
                        <MoodItem key={index} />)
                }
            </div>
        </div>
    )
}

export default withRouter(Mood)

