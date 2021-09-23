import { memo, VFC } from 'react';
import { Heading } from '@chakra-ui/react';

type Props = {
  content: string;
};

export const PrimaryTitle: VFC<Props> = memo((props) => {
  const { content } = props;
  return (
    <Heading
      as="h2"
      fontSize={{ base: '25', md: '30' }}
      textAlign={{ md: 'center' }}
    >
      {content}
    </Heading>
  );
});
