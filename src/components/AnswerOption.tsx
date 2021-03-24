import { ChangeEvent, FC } from "react";

export type Answer = {
  type: string;
  content: string;
};

export type answerOption = {
  content: string;
  type: string;
};

export type AnswerOptionProps = {
  answerType: string;
  answerContent: string;
  answer: string;
  questionId: number;
  onAnswerSelected: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const AnswerOption: FC<AnswerOptionProps> = (
  props: AnswerOptionProps
) => {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer.length > 0}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
};
