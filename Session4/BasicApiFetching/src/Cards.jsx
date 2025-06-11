import React from "react";

function Cards(props) {
  return (
    <div>
      <div className="cardContainer">
        <h2>Name: {props.name}</h2>
        <h2>Email: {props.email}</h2>
        <h2>Company Name: {props.companyName}</h2>
      </div>
    </div>
  );
}

export default Cards;
