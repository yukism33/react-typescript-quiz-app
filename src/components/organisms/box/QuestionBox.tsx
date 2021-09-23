import { Wrap, WrapItem } from '@chakra-ui/layout';
import { QestionNo } from '../../atoms/title/QestionNo';
import { PrimaryTitle } from '../../atoms/title/PrimaryTitle';
import { AnswersType } from '../../../type/data/answersType';
import { memo, VFC } from 'react';
import { PrimaryBox } from '../layout/PrimaryBox';

type Props = {
  answers: AnswersType[];
  quizNo: number;
  question: string;
  onClickAnswer: (judgement: boolean) => void;
};
export const QuestionBox: VFC<Props> = memo((props) => {
  const { answers, quizNo, question, onClickAnswer } = props;
  return (
    <PrimaryBox>
      <QestionNo quizNo={quizNo} />
      <PrimaryTitle content={question} />
      <Wrap mt={35} justify="center" spacing="30px">
        {answers.map((answer, index) => {
          return (
            <WrapItem
              p={5}
              borderRadius="10px"
              _hover={{ cursor: 'pointer', opacity: 0.8 }}
              bg="blue.200"
              key={index}
              w={{ base: '100%', md: '180px', lg: '200px' }}
              fontWeight="bold"
              justifyContent="center"
              css={{
                transition: '.3s ease',
              }}
              onClick={() => onClickAnswer(answer.judgement)}
            >
              {answer.content}
            </WrapItem>
          );
        })}
      </Wrap>
    </PrimaryBox>
  );
});
