type QuestionProps = {
  content: string;
};

function Question(props: QuestionProps) {
  return <h2 className="question">{props.content}</h2>;
}

export default Question;
