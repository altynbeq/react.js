import React from "react";
import { useState } from "react";

const questions = [
  {
    title: "React - is ... ?",
    options: ["Library", "Framework", "App"],
    correct: 0
  },
  {
    title: "Component - is ...?",
    options: ["App", "Part of app or page", "Something I don't know"],
    correct: 1
  },
  {
    title: "JSX - is ...?",
    options: ["simple HTML", "Function", "same as HTML, but can handle JS"],
    correct: 2
  }
];

function Result({ score, questions, onClick }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h1>
        You have answered {score} out of {questions.length} !
      </h1>
      <button onClick={onClick}>Try again</button>
    </div>
  );
}

function Game({ question, questions, onClick, index }) {
  const percent = ((index * 100) / questions.length).toFixed(1);
  console.log(percent);
  return (
    <div>
      <div className="progress">
        <div
          style={{ width: `${percent}` + "%" }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.options.map((el, index) => (
          <li onClick={() => onClick(index)} key={el}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [indx, setIndx] = useState(0);
  const [score, setScore] = useState(0);

  const question = questions[indx];

  function handleClick(index) {
    setIndx(indx + 1);
    if (question.correct === index) {
      setScore(score + 1);
    }
  }

  function handleBackClick() {
    setIndx(0);
    setScore(0);
  }

  return (
    <div className="App">
      {indx !== questions.length ? (
        <Game
          onClick={handleClick}
          question={question}
          questions={questions}
          index={indx}
        />
      ) : (
        <Result score={score} questions={questions} onClick={handleBackClick} />
      )}
    </div>
  );
}
