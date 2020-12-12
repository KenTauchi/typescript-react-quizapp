import React, { useState } from "react";
import fetchQuizQuestions from "./API";

import { QuestionState, Difficulty } from "./API";

import QuestionCard from "./components/QuestionCard";

import { GlobalStyle, Wrapper } from "./app.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [diff, setDifficulty] = useState("easy");
  const [qNum, setQnum] = useState("10");
  const [seeScoreBtn, setSeeScoreBtn] = useState(false);
  const [seeScore, setSeeScore] = useState(false);
  const [backBtn, setBackBtn] = useState(false);

  const selectDif = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value);
  };

  const selectNum = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQnum(event.target.value);
  };

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(qNum, diff);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      correct ? setScore((prev) => prev + 1) : setScore((prev) => prev);

      const answerObj = {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObj]);
      if (!loading && number === parseInt(qNum) - 1) {
        setSeeScoreBtn(true);
      }
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === parseInt(qNum)) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const seeScoreFunc = () => {
    setGameOver(true);
    setSeeScore(true);
    setBackBtn(true);
  };

  const reset = () => {
    setQuestions([]);
    setNumber(0);
    setUserAnswers([]);
    setScore(0);
    setGameOver(true);
    setDifficulty("easy");
    setQnum("10");
    setSeeScoreBtn(false);
    setSeeScore(false);
    setBackBtn(false);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz</h1>

        {gameOver && !backBtn ? (
          <form>
            <label>Difficulty:</label>
            <select
              className="difficulty"
              name="difficulty"
              onChange={selectDif}
            >
              {Object.keys(Difficulty).map((dif) => (
                <option value={dif} key={dif}>
                  {dif}
                </option>
              ))}
            </select>
            <label>Number of Qs:</label>
            <select className="numQ" name="numQ" onChange={selectNum}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <input
              type="submit"
              className="start"
              onClick={startTrivia}
              value="Start"
            />
          </form>
        ) : null}

        {seeScore && <p className="score">Score: {score}</p>}

        {loading && <p>Loading Questions ...</p>}

        {!loading && !gameOver && (
          <QuestionCard
            qNum={number + 1}
            totalQ={parseInt(qNum)}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== parseInt(qNum) - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}

        {seeScoreBtn && !gameOver && (
          <button className="seeScore" onClick={seeScoreFunc}>
            See Score
          </button>
        )}
        {backBtn && (
          <button className="back" onClick={reset}>
            Back
          </button>
        )}
      </Wrapper>
    </>
  );
}

export default App;
