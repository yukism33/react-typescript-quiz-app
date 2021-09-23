import { QuizType } from './type/data/data';
export const quizDataset: QuizType = [
  {
    question: 'モモから生まれたのは？',
    answers: [
      { content: 'ももたろう', judgement: true },
      { content: 'ものたろう', judgement: false },
      { content: 'ももクロ', judgement: false },
    ],
  },
  {
    question: 'おじいさんは山へしばかりに、おばあさんは川へ何しに行った？',
    answers: [
      { content: '洗車', judgement: false },
      { content: '洗濯', judgement: true },
      { content: 'ラフティング', judgement: false },
    ],
  },
  {
    question: 'FF7の主人公は？',
    answers: [
      { content: 'スコール', judgement: false },
      { content: 'ノクティス', judgement: false },
      { content: 'クラウド', judgement: true },
    ],
  },
];
