import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  judgementAnswer: string;
  onClickNextQuestion: () => void;
  quizFinished: boolean;
};

export const JudgementModal = memo((props: Props) => {
  const {
    onClose,
    isOpen,
    judgementAnswer,
    onClickNextQuestion,
    quizFinished,
  } = props;
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        onOverlayClick={onClickNextQuestion}
      >
        <ModalOverlay />
        <ModalContent p="10" w={{ base: '90%', md: '100%' }}>
          <ModalHeader textAlign="center" fontSize="21">
            {judgementAnswer}
          </ModalHeader>
          <ModalFooter justifyContent="center">
            <Button
              onClick={onClickNextQuestion}
              w={{ base: '100%', md: '50%' }}
              bg="blue.100"
              size="lg"
              _hover={{
                background: 'blue.500',
                color: 'white',
              }}
              _focus={{ outline: 'none' }}
            >
              {quizFinished ? '結果発表！' : '次へ'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
