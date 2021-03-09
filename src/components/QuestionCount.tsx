type QuestionCountProps = {
  counter: number;
  total: number;
};

function QuestionCount(props: QuestionCountProps) {
  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}

export default QuestionCount;
