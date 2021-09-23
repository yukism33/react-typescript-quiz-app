export type QuizDataType = {
  question: string;
  answers: {
    content: string;
    judgement: boolean;
  }[];
};
