import { Fragment, useEffect, useState } from "react";

interface IQuestionsProps {
  questionNumber: number;
  questionList: any;
  setTimeout: any;
  setQuestionNumber: any;
}

const Questions = ({
  questionList,
  setTimeout,
  setQuestionNumber,
  questionNumber,
}: IQuestionsProps) => {
  const [question, setQuestion] = useState<any>(null);
  useEffect(() => {
    setQuestion(questionList[questionNumber - 1]);
  }, [questionList, questionNumber]);
  return (
    <div className="question-answer">
      <div className="question">{question?.question}?</div>
      <div className="answers">
        {question?.answers?.map((answer: any) => (
          <Fragment key={answer.text}>
            <div className={`answer ${answer.correct}`}>{answer.text}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Questions;
