import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar bg-dark text-white border">
      <div className="col-lg-4">
        <strong><h2>ClickEmDead</h2></strong>
      </div>
      <div className="col-lg-4">
        <h4>{props.instructions}</h4>
      </div>
      <div className="col-lg-4">
        <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
      </div>
    </nav>
  )
}

export default Navbar;