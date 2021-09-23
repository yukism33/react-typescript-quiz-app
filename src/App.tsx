import { useCallback, useEffect, useState } from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { useDisclosure, Button, ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';

import { quizDataset } from './quizdataset';
import { JudgementModal } from './components/organisms/JudgementModal';
import { QuestionBox } from './components/organisms/box/QuestionBox';

import { AnswersType } from './type/data/answersType';
import { QuizDataType } from './type/data/quizDataType';
import { ResultBox } from './components/organisms/box/ResultBox';

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [question, setQestion] = useState<string>('');
  const [answers, setAnswers] = useState<AnswersType[]>([]);
  const [dataset, setDataset] = useState(quizDataset);
  const [judgementAnswer, setJudgementAnswer] = useState<string>('');

  const numberOfQuestion = Object.keys(dataset).length;
  const [questionLen, setQuestionLen] = useState<number>(numberOfQuestion);
  const [quizCount, setQuizCount] = useState<number>(0);
  const [quizNo, setQuizNo] = useState<number>(1);
  const [score, setScore] = useState<number>(0);

  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const settingDatas = (quizData: QuizDataType) => {
    const quizDataset = quizData;
    const quizQuestion = quizDataset.question;
    const quizAnswers = quizDataset.answers;
    setAnswers(quizAnswers);
    setQestion(quizQuestion);
  };

  //初回の表示
  useEffect(() => {
    settingDatas(dataset[quizCount]);
  }, []);

  //「次へ」をクリックした時
  const onClickNextQuestion = useCallback(() => {
    onClose();
    setQuizCount((prevQuizCount) => prevQuizCount + 1);
    setQuizNo((prevQuizCount) => prevQuizCount + 1);
  }, []);

  // quizCountが更新された時。（「次へ」をクリックした時と最初に戻る時）
  useEffect(() => {
    if (quizCount < numberOfQuestion) {
      settingDatas(dataset[quizCount]);
    }
    if (quizCount === numberOfQuestion - 1) {
      setQuizFinished(true);
    }
  }, [quizCount]);

  //最初のQに戻る
  const onClickBackToBegining: () => void = useCallback(() => {
    settingDatas(dataset[0]);
    setQuizCount(0);
    setScore(0);
    setQuizNo(1);
    setQuizFinished(true);
  }, [quizFinished]);

  // 回答をクリックした時
  const onClickAnswer: (judgement: boolean) => void = useCallback(
    (judgement: boolean) => {
      if (judgement === true) {
        setScore((prevQuizCount) => prevQuizCount + 1);
        setJudgementAnswer('正解✨');
        onOpen();
      } else {
        setJudgementAnswer('残念😝');
        onOpen();
      }
    },
    [setJudgementAnswer]
  );

  return (
    <ChakraProvider theme={theme}>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        h="100vh"
      >
        {quizCount < questionLen ? (
          <>
            <Heading
              as="h1"
              fontSize={{ base: '35', md: '40' }}
              textAlign="center"
              w="100%"
              mb="35"
            >
              全部で{numberOfQuestion}問
            </Heading>
            <QuestionBox
              answers={answers}
              quizNo={quizNo}
              question={question}
              onClickAnswer={onClickAnswer}
            />
          </>
        ) : (
          <ResultBox
            score={score}
            questionLen={questionLen}
            onClickBackToBegining={onClickBackToBegining}
          />
        )}
      </Flex>
      <JudgementModal
        isOpen={isOpen}
        onClose={onClose}
        onClickNextQuestion={onClickNextQuestion}
        judgementAnswer={judgementAnswer}
        quizFinished={quizFinished}
      />
    </ChakraProvider>
  );
}
