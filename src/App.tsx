import logo from "./logo.svg";
import "./App.css";
import Question from "./components/Question";
import { useEffect, useState } from "react";
import quizQuestions from "./api/quizQuestions";

export default () => {
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState([{}]);
  const [answer, setAnswer] = useState("");
  const [answersCount, setAnswersCount] = useState(0);
  const [result, setResult] = useState("");

  const shuffleArray = (array: any[]) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  useEffect(() => {
    const shuffledAnswerOptions = quizQuestions.map((question) =>
      shuffleArray(question.answers)
    );
    setQuestion(quizQuestions[0].question);
    setAnswerOptions(shuffledAnswerOptions[0]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz</h2>
      </header>
      <Question content="What is your favourite food?" />
    </div>
  );
};