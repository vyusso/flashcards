import React from "react";
import style from "./Flashcard.module.css";

export default function Flashcard({ card, index, toggleFlip, cardRef }) {
  return (
    <div
      ref={cardRef}
      className={`${style.flashcard} ${card.flipped ? style.flipped : ""}`}
      onClick={() => toggleFlip(index)}
    >
      <div className={style.flipInner}>
        <div className={style.front}>
          <h1>Question</h1>
          <p className={style.question}>{card.question}</p>
        </div>
        <div className={style.back}>
          <h1>Answer</h1>
          <p className={style.answer}>{card.answer}</p>
        </div>
      </div>
    </div>
  );
}
