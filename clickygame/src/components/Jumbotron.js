import React from "react";

function Jumbotron(props) {
  return (
    <div className="Jumbotron text-center m-1 border">
      <h1>ClickEmDead!</h1>
      <h4 className="instructions">Click an image to earn points, but don't click any more than once!</h4>
    </div>
  )
};

export default Jumbotron;