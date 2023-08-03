import { Fragment, useEffect, useState } from "react";

interface IQuestionsProps {
  questionNumber: number;
  questionList: any;
  setStop: any;
  setQuestionNumber: any;
}

const Questions = ({
  questionList,
  setStop,
  setQuestionNumber,
  questionNumber,
}: IQuestionsProps) => {
  const [question, setQuestion] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [className, setClassName] = useState<any>("answer");
  useEffect(() => {
    setQuestion(questionList[questionNumber - 1]);
  }, [questionList, questionNumber]);
  const setDelay = (duration: any, callback: any) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a: any) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    setDelay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

    setDelay(5000, () => {
      if (a.correct) {
        setDelay(1000, () => {
          setQuestionNumber((prev: any) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        setDelay(1000, () => {
          setStop(true);
        });
      }
    });
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
