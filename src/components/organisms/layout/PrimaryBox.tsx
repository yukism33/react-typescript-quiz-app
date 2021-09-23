import { Box } from '@chakra-ui/layout';
import { VFC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const PrimaryBox: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <Box
      p={10}
      w="90%"
      maxW="970px"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
    >
      {children}
    </Box>
  );
};
