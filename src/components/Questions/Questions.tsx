import { Fragment, useEffect, useState } from "react";

interface IQuestionsProps {
  questionNumber: number;
  questionList: any;
  setTimeOut: any;
  setQuestionNumber: any;
}

const Questions = ({
  questionList,
  setTimeOut,
  setQuestionNumber,
  questionNumber,
}: IQuestionsProps) => {
  const [question, setQuestion] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [className, setClassName] = useState<any>("answer");
  useEffect(() => {
    setQuestion(questionList[questionNumber - 1]);
  }, [questionList, questionNumber]);
  const handleClick = (answer: any) => {
    setSelectedAnswer(answer);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(answer.correct ? "correct answer" : "wrong answer");
    }, 3000);
  };
  return (
    <div className="question-answer">
      <div className="question">{question?.question}?</div>
      <div className="answers">
        {question?.answers?.map((answer: any) => {
          console.log({ selectedAnswer, answer });
          return (
            <Fragment key={answer.text}>
              <div
                className={`${
                  selectedAnswer === answer ? className : "answer"
                }`}
                onClick={() => handleClick(answer)}
              >
                {answer.text}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
