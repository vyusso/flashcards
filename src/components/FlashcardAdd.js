import React, { useEffect, useState, useRef } from "react";
import style from "./Flashcard.module.css";

export default function FlashcardAdd({ cards, setCards }) {
  // state variables for question and answer values
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  // references to the question and answer text areas
  const answerRef = useRef(null);
  const questionRef = useRef(null);

  // function to handle adding a new card
  const handleAddCard = () => {
    if (!question.trim() || !answer.trim()) return;
    const newCard = { question, answer, flipped: false };
    // adds the new card to the cards array
    setCards([...cards, newCard]);
    // resets the question and answer values
    setQuestion("");
    setAnswer("");
    // sets the cursor to the question text area
    questionRef.current.focus();
  };

  // logs the cards array just for debugging
  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <div className={style.flashcardAdd}>
      {/* divs for the question and answer text areas */}
      <div className={style.textAreas}>
        <div className={style.divider}>
          <h1>Question</h1>
          <textarea
            maxLength={200}
            ref={questionRef}
            className={style.input}
            // sets the value of the question state variable
            onChange={(e) => setQuestion(e.target.value)}
            // sets the cursor to the answer text area when the enter key is pressed
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                answerRef.current.focus();
              }
            }}
            // sets the value of the question state variable so when reset it will be empty
            value={question}
          />
        </div>
        <div className={style.divider}>
          <h1>Answer</h1>
          <textarea
            maxLength={200}
            ref={answerRef}
            className={style.input}
            // sets the value of the answer state variable
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            // adds the card when the enter key is pressed just as if addCardButton is clicked
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleAddCard();
              }
            }}
            // sets the value of the answer state variable so when reset it will be empty
            value={answer}
          />
        </div>
      </div>

      {/* button to add a new card */}
      <button className={style.addCardButton} onClick={handleAddCard}>
        Add Card
      </button>
    </div>
  );
}
