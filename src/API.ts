import { StringLiteral } from "typescript";

import { shuffleArray } from "./utils";

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
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endPoint = `https:opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endPoint)).json();
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
