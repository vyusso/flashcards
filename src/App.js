import "./App.css";
import Flashcard from "./components/Flashcard";
import FlashcardAdd from "./components/FlashcardAdd";
import { useState, useRef, useEffect } from "react";
import style from "./components/Flashcard.module.css";

function App() {
  // creates a state variable called "cards" to hold the flashcard data for all cards
  const [cards, setCards] = useState([]);
  // creates a reference to the last card in the list
  const lastCardRef = useRef(null);
  // function to toggle the flip state of a card using index
  const toggleFlip = (index) => {
    setCards((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  // scroll to the last card when the cards change
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
      {/* where the component to add cards lives */}
      <FlashcardAdd cards={cards} setCards={setCards} />
      {/* div to hold all the flashcards */}
      <div className={style.flashcardContainer}>
        {/* map through the cards state that holds an array of objects from before and displays them as flashcards using the Flashcard component */}
        {cards.map((card, index) => (
          <Flashcard
            // necessary props
            key={index}
            card={card}
            toggleFlip={toggleFlip}
            index={index}
            // adds a ref to the last card
            cardRef={index === cards.length - 1 ? lastCardRef : null}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
