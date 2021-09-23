export type QuizType = {
  question: string;
  answers: {
    content: string;
    judgement: boolean;
  }[];
}[];
