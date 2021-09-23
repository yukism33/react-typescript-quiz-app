import { VFC } from 'react';
import { Text } from '@chakra-ui/layout';
import { PrimaryTitle } from '../../atoms/title/PrimaryTitle';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { PrimaryBox } from '../layout/PrimaryBox';

type Props = {
  score: number;
  questionLen: number;
  onClickBackToBegining: () => void;
};

export const ResultBox: VFC<Props> = (props) => {
  const { score, questionLen, onClickBackToBegining } = props;
  return (
    <PrimaryBox>
      <PrimaryTitle content={'結果は...'} />
      <Text
        textAlign="center"
        fontSize={{ base: '30', md: '50' }}
        fontWeight="bold"
        mt="20px"
      >
        {questionLen === score
          ? `全問正解😍！`
          : `${questionLen}問中${score}問でした😇`}
      </Text>
      <ButtonGroup w="100%" justifyContent="center" mt="50">
        <Button colorScheme="blue" size="lg" onClick={onClickBackToBegining}>
          もう一度！
        </Button>
      </ButtonGroup>
    </PrimaryBox>
  );
};
