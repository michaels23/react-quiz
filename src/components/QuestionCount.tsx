import { FC } from "react";

type QuestionCountProps = {
  counter: number;
  total: number;
};

export const QuestionCount: FC<QuestionCountProps> = (
  props: QuestionCountProps
) => {
  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
};
