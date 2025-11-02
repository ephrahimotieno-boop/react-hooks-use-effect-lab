import React, { useState } from "react";
import Question from "./Question";

function App() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "Which language runs in a web browser?",
      answers: ["Python", "Java", "C++", "JavaScript"],
      correctAnswer: "JavaScript"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswered = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Move to the next question (loop back to start)
    const nextIndex = (currentIndex + 1) % questions.length;
    setCurrentIndex(nextIndex);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="app">
      <h1>Trivia App</h1>
      <p>Score: {score}</p>

      <Question
        question={currentQuestion.question}
        answers={currentQuestion.answers}
        correctAnswer={currentQuestion.correctAnswer}
        onAnswered={handleAnswered}
      />
    </div>
  );
}

export default App;