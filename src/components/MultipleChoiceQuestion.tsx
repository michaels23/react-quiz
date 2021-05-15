import { FC } from "react";

export type alternative = {
    id: number;
    content: string;
  };  

  export type question = {
      id: number;
      content: string;
    };  

export type MultipleChoiceQuestionProps = {
    alternatives: alternative[];
    question: question;
    selectSize: number;
    onAnswerSelected: (value: any) => void;
  };

  export const MultipleChoiceQuestion: FC<MultipleChoiceQuestionProps> = (props: MultipleChoiceQuestionProps) => {
  function renderAlternatives(key: alternative) {
    return (
      <option
      className="alternative"
      id={`alternative_${key.id}`}
      value={key.id}
      label={key.content}
    />
    );
  }
  
  return (
  <div className="multipleChoiceQuestion">
      <h2 className="question">{props.question.content}</h2>
      <form id="answerForm">
        <label htmlFor={`question_${props.question.id}`} className="sr-only">
          Select an answer:
        </label>
        <select
          size={props.selectSize}
          className="alternative"
          id={`question_${props.question.id}`}
          name={`question_${props.question.id}`}
          required={true}
        >
          {props.alternatives.map(renderAlternatives)}
        </select>
        <button
          type="button"
          className="submit"
          aria-label="Submit"
          onClick={props.onAnswerSelected}
        >
          Submit
        </button>
      </form></div>
  );
};