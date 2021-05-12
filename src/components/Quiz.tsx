import { FC } from "react";
import { Alternative, AlternativeProps } from "./Alternative";
import { Question } from "./Question";
import { QuestionCounter } from "./QuestionCounter";

type QuizProps = {
  answer: string;
  answerOptions: AlternativeProps[];
  counter: number;
  question: string;
  questionId: number;
  questionTotal: number;
  selectSize: number;
  onAnswerSelected: (value: any) => void;
};

export const Quiz: FC<QuizProps> = (props: QuizProps) => {
  function renderAnswerOptions(key: AlternativeProps) {
    return (
      <Alternative
        key={key.content}
        content={key.content}
        id={key.id}
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
