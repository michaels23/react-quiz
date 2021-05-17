import { FC } from "react";
import { QuestionCounter } from "./QuestionCounter";
import {
  MultipleChoiceQuestionComponent,
  MultipleChoiceQuestion,
} from "./MultipleChoiceQuestion";

export type QuizProps = {
  counter: number;
  question: MultipleChoiceQuestion;
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
      <MultipleChoiceQuestionComponent
        question={props.question}
        selectSize={props.selectSize}
        onAnswerSubmitted={props.onAnswerSelected}
        shuffleAlternatives={true}
      />{" "}
    </div>
  );
};
