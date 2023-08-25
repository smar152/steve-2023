import { useState, useEffect } from "react";
import "./App.css";
import Pyro from "./components/Pyro";
import Marquee from "react-fast-marquee";

function App() {
  const [clicked, setClicked] = useState(false);
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [text, setText] = useState("");
  const [marqueeText, setMarqueeText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (clicked) {
      timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        setMarqueeText((prevState) => prevState + seconds + ". Χρόνια πολλά! ");
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (seconds === 30) {
      setSeconds(0);
      setClicked(false);
      setFinished(true);
      setMarqueeText("");
    }
  }, [seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setText("Και που λες");
    }
    if (seconds === 6) {
      setText("Έχεις γενέθλια");
    }
    if (seconds === 12) {
      setText("Παίζει να το ξέρεις δηλαδή");
    }
    if (seconds === 18) {
      setText("απλά είπα να πω");
    }
    if (seconds === 24) {
      setText("ΧΡΟΝΙΑ ΠΟΛΛΑΑΑΑΑΑΑΑ");
    }
  }, [seconds]);

  return (
    <>
      <div className="card">
        {!clicked && (
          <>
            {finished && (
              <h2>🎉🥳 Δις χαζ μπην γιορ θερτι-σεκοντ μπέρθντεϊ 🥳🎉</h2>
            )}
            <h1>{finished && "Ξανα"}πάμε;</h1>
            <button onClick={() => setClicked(true)}>
              {finished && "Ξανα"}πάμε
            </button>
          </>
        )}
        {clicked && (
          <>
            <Pyro />
            <h1>Χρόνια πολλάααααα!</h1>
            <h2>{text}</h2>
            <p className="read-the-docs">{marqueeText}</p>
            <Marquee></Marquee>
          </>
        )}
      </div>
    </>
  );
}

export default App;
