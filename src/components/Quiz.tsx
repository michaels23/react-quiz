import { ChangeEvent, FC } from "react";
import { AnswerOption, answerOption } from "./AnswerOption";
import { Question } from "./Question";
import { QuestionCount } from "./QuestionCount";

type QuizProps = {
  answer: string;
  answerOptions: answerOption[];
  counter: number;
  question: string;
  questionId: number;
  questionTotal: number;
  onAnswerSelected: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Quiz: FC<QuizProps> = (props: QuizProps) => {
  function renderAnswerOptions(key: answerOption) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div className="quiz">
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
};
