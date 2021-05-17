import { FC } from "react";
import { QuestionCounter } from "./QuestionCounter";
import { Alternative, MultipleChoiceQuestion, Question } from "./MultipleChoiceQuestion";

export type QuizProps = {
  alternatives: Alternative[];
  counter: number;
  question: Question;
  questionTotal: number;
  selectSize: number;
  onAnswerSelected: (value: any) => void;
};

export const Quiz: FC<QuizProps> = (props: QuizProps) => {
  return (
    <div className="quiz">
      <QuestionCounter
        currentNumber={props.question.id}
        total={props.questionTotal}
      />
      <MultipleChoiceQuestion
        alternatives={props.alternatives}
        question={props.question}
        selectSize={props.selectSize}
        onAnswerSelected={props.onAnswerSelected} />    </div>
  );
};
