import React from "react";
import "./Card.component.css";
const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
      />
      <h1>{props.name}</h1>
      <h3>{props.email}</h3>
    </div>
  );
};
export default Card;
