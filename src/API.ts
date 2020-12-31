import { shuffleArray } from "./utils";
require("dotenv").config();

// const env = process.env;
// console.log(process.env.REACT_APP_API_URL);

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

// concatinate question object and original array "answers"
export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

const fetchQuizQuestions = async (amount: string, difficulty: string) => {
  const endPoint = `${process.env.REACT_APP_API_URL}api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  var host = window.location.host;
  const endPoint2 = endPoint.replace("host", "https://:");

  const data = await (await fetch(endPoint2)).json();

  return data.results.map((question: Question) => ({
    //   first return all exsisting values in the array
    ...question,

    // and here you are adding the acual value to the anwers array which is created in line 15
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

export default fetchQuizQuestions;
