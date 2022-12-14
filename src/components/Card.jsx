import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img}></Avatar>
        </div>
        <div className="bottom">
          <Info tel={props.tel} mail={props.mail}></Info>
        </div>
      </div>
    </div>
  );
}

export default Card;
