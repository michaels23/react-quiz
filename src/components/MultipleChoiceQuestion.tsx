import { FC } from "react";

export type Alternative = {
    id: number;
    content: string;
};

export type Question = {
    id: number;
    content: string;
};

export type MultipleChoiceQuestionProps = {
    alternatives: Alternative[];
    question: Question;
    selectSize: number;
    onAnswerSelected: (value: any) => void;
};

export const MultipleChoiceQuestion: FC<MultipleChoiceQuestionProps> = (props: MultipleChoiceQuestionProps) => {
    function renderAlternatives(alternative: Alternative) {
        return (
            <option
                className="alternative"
                id={`alternative_${alternative.id}`}
                value={alternative.id}
                label={alternative.content}
            />
        );
    }

    return (
        <div className="multipleChoiceQuestion">
            <h2 className="question">
                {props.question.content}
            </h2>
            <form id="answerForm">
                <label htmlFor={`question_${props.question.id}`} className="sr-only">
                    Select an answer:
                </label>
                <select
                    className="alternative"
                    id={`question_${props.question.id}`}
                    name={`question_${props.question.id}`}
                    required={true}
                    size={props.selectSize}
                >
                    {props.alternatives.map(renderAlternatives)}
                </select>
                <button
                    type="button"
                    className="submit"
                    aria-label="Submit"
                    onClick={props.onAnswerSelected}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};