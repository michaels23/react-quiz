import { FC } from "react";

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
};

export const AnswerOption: FC<AnswerOptionProps> = (
  props: AnswerOptionProps
) => {
  return (
    <option
      className="answerOption"
      id={props.answerType}
      value={props.answerType}
      disabled={props.answer.length > 0}
    >
      {props.answerType}
    </option>
  );
};
