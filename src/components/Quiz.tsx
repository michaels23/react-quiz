import { FC } from "react";
import { QuestionCounter } from "./QuestionCounter";
import {alternative, MultipleChoiceQuestion, question} from "./MultipleChoiceQuestion";

export type QuizProps = {
  alternatives: alternative[];
  counter: number;
  question: question;
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
      onAnswerSelected={props.onAnswerSelected}/>    </div>
  );
};
