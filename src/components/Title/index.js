import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
    <h1>Minion<img className='minions' src='/img/mmp.jpg' alt='minion' />Clicks</h1>
    <h6>Click each picture for once only !!</h6>
    Score: <span className="score">{props.score} &nbsp; &nbsp;| &nbsp; &nbsp;</span>
    Top Score: <span className="score">{props.topScore}</span>
  </div>
}

export default Title;