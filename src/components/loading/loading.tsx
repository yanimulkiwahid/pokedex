import { loading } from '@/containers/home/home.styles';
import { Flex, Image, Text } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Flex {...loading}>
      <Image src='/pokeball.png' alt='Loading' />
      <Text>Loading...</Text>
    </Flex>
  );
};

export default Loading;
