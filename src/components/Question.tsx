import { FC } from "react";

type QuestionProps = {
  content: string;
};

export const Question: FC<QuestionProps> = (props: QuestionProps) => {
  return <h2 className="question">{props.content}</h2>;
};
