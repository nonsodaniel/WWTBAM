import { useEffect, useState } from "react";

interface IQuestionTimerProps {
  setStop: any;
  questionNumber: any;
}

export default function Timer({
  setStop,
  questionNumber,
}: IQuestionTimerProps) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setStop]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return <div className="timer">{timer}</div>;
}
