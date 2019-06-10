import React from "react";

function GameCard(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-1 hover">
      <div className="card text-center m-1 p-1" onClick={() => props.makeFriend(props.id, props.sound)}>
        <div className="image-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  )
};

export default GameCard;