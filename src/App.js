import "./App.css";
import Flashcard from "./components/Flashcard";
import FlashcardAdd from "./components/FlashcardAdd";
import { useState, useRef, useEffect } from "react";
import style from "./components/Flashcard.module.css";

function App() {
  const [cards, setCards] = useState([]);
  const lastCardRef = useRef(null);
  const toggleFlip = (index) => {
    setCards((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  useEffect(() => {
    if (lastCardRef.current) {
      lastCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [cards]);

  return (
    <div className="App">
      <div className={style.header}>
        <h1 className={style.siteTitle}>Flashcard</h1>
        <p className={style.author}>
          By: <a href="https://github.com/vyusso">angel</a>
        </p>
      </div>

      <FlashcardAdd cards={cards} setCards={setCards} />
      <div className={style.flashcardContainer}>
        {cards.map((card, index) => (
          <Flashcard
            key={index}
            card={card}
            toggleFlip={toggleFlip}
            index={index}
            cardRef={index === cards.length - 1 ? lastCardRef : null}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
