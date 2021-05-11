import { FC } from "react";
import { AnswerOption, answerOption } from "./AnswerOption";
import { Question } from "./Question";
import { QuestionCounter } from "./QuestionCounter";

type QuizProps = {
  answer: string;
  answerOptions: answerOption[];
  counter: number;
  question: string;
  questionId: number;
  questionTotal: number;
  selectSize: number;
  onAnswerSelected: (value: any) => void;
};

export const Quiz: FC<QuizProps> = (props: QuizProps) => {
  function renderAnswerOptions(key: answerOption) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerId={key.id}
        answer={props.answer}
        questionId={props.questionId}
      />
    );
  }

  return (
    <div className="quiz">
      <QuestionCounter
        currentNumber={props.questionId}
        total={props.questionTotal}
      />
      <Question content={props.question} />
      <form id="answerForm">
        <label htmlFor={`question_${props.questionId}`} className="sr-only">
          Select an answer:
        </label>
        <select
          size={props.selectSize}
          className="answerOptions"
          id={`question_${props.questionId}`}
          name={`question_${props.questionId}`}
          required={true}
        >
          {props.answerOptions.map(renderAnswerOptions)}
        </select>
        <button
          type="button"
          className="submit"
          aria-label="Submit"
          onClick={props.onAnswerSelected}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
