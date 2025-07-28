import React, { useEffect, useState, useRef } from "react";
import style from "./Flashcard.module.css";

export default function FlashcardAdd({ cards, setCards }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const answerRef = useRef(null);
  const questionRef = useRef(null);

  const handleAddCard = () => {
    if (!question.trim() || !answer.trim()) return;
    const newCard = { question, answer, flipped: false };
    setCards([...cards, newCard]);
    setQuestion("");
    setAnswer("");
    questionRef.current.focus();
  };

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <div className={style.flashcardAdd}>
      <div className={style.textAreas}>
        <div className={style.divider}>
          <h1>Question</h1>
          <textarea
            ref={questionRef}
            className={style.questionInput + " " + style.input}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                answerRef.current.focus();
              }
            }}
            value={question}
          />
        </div>
        <div className={style.divider}>
          <h1>Answer</h1>
          <textarea
            ref={answerRef}
            className={style.answerInput + " " + style.input}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            value={answer}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleAddCard();
              }
            }}
          />
        </div>
      </div>

      <button className={style.addCardButton} onClick={handleAddCard}>
        Add Card
      </button>
    </div>
  );
}
