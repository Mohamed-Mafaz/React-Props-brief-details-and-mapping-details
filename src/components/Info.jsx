import React from "react";
function Info(props) {
  return (
    <div>
      <p className="info">{props.tel}</p>
      <p className="info">{props.mail}</p>
    </div>
  );
}
export default Info;
