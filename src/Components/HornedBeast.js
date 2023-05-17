import React from "react";
import { useState } from "react";

export default function HornedBeast({ title, imageUrl, description, handleModal, beast }) {
  //votes function
  const [votes, setVotes] = useState(0);
  function handleVotes() {
    setVotes(votes + 1);
    handleModal(beast)
  }

  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} onClick={handleVotes}/>
      <p> {description}</p>
      <p > ❤️ {votes} </p>
    </div>
  );
}
