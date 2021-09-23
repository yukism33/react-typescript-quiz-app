import { memo, VFC } from 'react';
import { Text } from '@chakra-ui/react';

type Props = {
  quizNo: number;
};

export const QestionNo: VFC<Props> = memo((props) => {
  const { quizNo } = props;
  return (
    <Text fontSize={25} mb={3} textAlign="center">
      Q.0{quizNo}
    </Text>
  );
});
