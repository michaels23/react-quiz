import logo from "./logo.svg";
import "./App.css";
import { Quiz } from "./components/Quiz";
import { FC, useEffect, useState } from "react";
import quizQuestions from "./api/quizQuestions";

export const App: FC = () => {
  const [counter, setCounter] = useState(1);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState(quizQuestions[0]);

  useEffect(() => {
    setQuestion(quizQuestions[0]);
  }, []);

  function setUserAnswer(answer: string) {}

  function setNextQuestion() {
    setCounter(counter + 1);
    setQuestionId(questionId + 1);
    setQuestion(quizQuestions[counter]);
  }

  function handleAnswerSelected(value: any) {
    setUserAnswer(value);
    if (questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300);
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz</h2>
      </div>
      <Quiz
        question={question}
        questionTotal={quizQuestions.length}
        counter={counter}
        selectSize={3}
        onAnswerSelected={handleAnswerSelected}
      />
    </div>
  );
};
