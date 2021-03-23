import logo from "./logo.svg";
import "./App.css";
import Quiz from "./components/Quiz";
import { useEffect, useState } from "react";
import quizQuestions from "./api/quizQuestions";
import { answerOption } from "./components/AnswerOption";

let QuizApp = () => {
  const [counter, setCounter] = useState(1);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState([] as answerOption[]);
  const [answer, setAnswer] = useState("");
  // const [result, setResult] = useState("");

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

  function setUserAnswer(answer: string) {
    setAnswer(answer);
  }

  function setNextQuestion() {
    setCounter(counter + 1);
    setQuestionId(questionId + 1);
    setQuestion(quizQuestions[counter].question);
    setAnswerOptions(quizQuestions[counter].answers);
    setAnswer("");
  }

  function handleAnswerSelected(event: { currentTarget: { value: any } }) {
    setUserAnswer(event.currentTarget.value);
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
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={handleAnswerSelected}
        counter={counter}
      />
    </div>
  );
};

export default QuizApp;
