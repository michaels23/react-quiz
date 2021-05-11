import { FC } from "react";

export type Answer = {
  type: string;
  content: string;
};

export type answerOption = {
  content: string;
  id: number;
};

export type AnswerOptionProps = {
  answerId: number;
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
      id={props.answerId.toString()}
      value={props.answerId}
      disabled={props.answer.length > 0}
    >
      {props.answerContent}
    </option>
  );
};
