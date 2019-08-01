
import React from "react";
import "./style.css";

function MinionCard(props) {
  return (
    <div className="cards">
      <div className="card" onClick={() => props.handleClick(props.id)} >
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default MinionCard;