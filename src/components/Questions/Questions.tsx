import { Fragment, useEffect, useState } from "react";
import correctAnswerSound from "../sounds/correctAnswer.mp3";
import wrongAnswerSound from "../sounds/wrongAnswer.mp3";
import playSoundUrl from "../sounds/play.mp3";
import waitSound from "../sounds/wait.mp3";
import useSound from "use-sound";

// Custom hook to handle AudioContext
const useAudioContext = () => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    const context = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    setAudioContext(context);

    return () => {
      // Close the AudioContext on component unmount (optional)
      context.close().catch((error) => {
        console.error("Error closing AudioContext:", error);
      });
    };
  }, []);

  return audioContext;
};

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
  const [playSound, { sound }] = useSound(playSoundUrl);
  const [correctAnswer] = useSound(correctAnswerSound);
  const [wrongAnswer] = useSound(wrongAnswerSound);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioContext = useAudioContext();

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
          correctAnswer();
          setDelay(1000, () => {
            setQuestionNumber((prev: any) => prev + 1);
            setSelectedAnswer(null);
          });
        });
      } else {
        wrongAnswer();
        setDelay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  useEffect(() => {
    fetch(playSoundUrl)
      .then((response) => response.blob())
      .then((blob) => {
        console.log({ blob });
        setAudioLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching audio:", error);
      });
  }, []);

  useEffect(() => {
    playSound();
    // if (audioLoaded && sound && audioContext) {
    //   // Check if the AudioContext is suspended
    //   if (audioContext.state === "suspended") {
    //     // Resume the AudioContext on user interaction
    //     console.log({ resume: });
    //     audioContext.resume().then(() => {
    //       // Play the sound after the AudioContext is resumed
    //       playSound();
    //     });
    //   } else {
    //     // If the AudioContext is already active, directly play the sound
    //     playSound();
    //   }
    // }
  }, [playSound]);

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
