import React from "react";
import style from "./Flashcard.module.css";

// imports needed props
export default function Flashcard({
  card,
  index,
  toggleFlip,
  cardRef,
  onDelete,
}) {
  return (
    <div
      // sets reference to the card which will be used to scroll to the last card
      ref={cardRef}
      // sets the flip state of the card for animation
      className={`${style.flashcard} ${card.flipped ? style.flipped : ""}`}
      // calls function to toggle flip state
      onClick={() => toggleFlip(index)}
    >
      {/* divs for the front and back of the card */}
      <div className={style.flipInner}>
        <div className={style.front}>
          <button
            className={style.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(index);
            }}
          >
            X
          </button>
          <h1>Question</h1>
          <p className={style.question}>{card.question}</p>
        </div>
        <div className={style.back}>
          <button className={style.closeButton}>x</button>
          <h1>Answer</h1>
          <p className={style.answer}>{card.answer}</p>
        </div>
      </div>
    </div>
  );
}
