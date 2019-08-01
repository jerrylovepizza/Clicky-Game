import React from "react";
import "./style.css";

function Alert(props) {
  return <div className="alert">
    <br/><h1> Game Over</h1>
    <h3 className="blink"> Do you want to play again?</h3><br/>
    <div className="btn btn-danger replay" onClick={props.handleAlert} >Replay</div><br/><br/><br/>

    <div className="mGif">
      <img className='mAlert' src='/img/cLL.gif' alt='win' />
    </div>
  </div>;
}

export default Alert;