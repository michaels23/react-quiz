import { useState } from "react";
import { FC } from "react";

export type Alternative = {
  id: number;
  content: string;
};

export type MultipleChoiceQuestion = {
  id: number;
  content: string;
  alternatives: Alternative[];
};

export type MultipleChoiceQuestionComponentProps = {
  question: MultipleChoiceQuestion;
  selectSize: number;
  shuffleAlternatives?: boolean;
  onAnswerSubmitted: (value: any) => void;
};

export const shuffleArray = (array: any[]) => {
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

export const MultipleChoiceQuestionComponent: FC<MultipleChoiceQuestionComponentProps> =
  (props: MultipleChoiceQuestionComponentProps) => {
    const [alternatives] = useState(
      props.shuffleAlternatives
        ? shuffleArray(props.question.alternatives)
        : props.question.alternatives
    );

    function renderAlternative(alternative: Alternative) {
      return (
        <option
          className="alternative"
          id={`alternative_${alternative.id}`}
          value={alternative.id}
          label={alternative.content}
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
            className="alternative"
            id={`question_${props.question.id}`}
            name={`question_${props.question.id}`}
            required={true}
            size={props.selectSize}
          >
            {alternatives.map(renderAlternative)}
          </select>
          <button
            type="button"
            className="submit"
            aria-label="Submit"
            onClick={props.onAnswerSubmitted}
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
