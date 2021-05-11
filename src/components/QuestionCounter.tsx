import { FC } from "react";

type QuestionCounterProps = {
  currentNumber: number;
  total: number;
};

export const QuestionCounter: FC<QuestionCounterProps> = (
  props: QuestionCounterProps
) => {
  return (
    <div className="questionCount">
      Question <span>{props.currentNumber}</span> of <span>{props.total}</span>
    </div>
  );
};
