import {
  bg,
  content,
  icon,
  imageCatching,
  textBold,
  textSmall,
} from '@/components/modal/modal.styles';
import {
  Box,
  Heading,
  Image,
  Modal as M,
  ModalContent,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { MdElectricBolt, MdStar } from 'react-icons/md';

interface IModal {
  isOpen: boolean;
  sprites: string;
  name: string;
  type?:
    | 'catching'
    | 'caught'
    | 'fled'
    | 'nickname'
    | 'saved'
    | 'others'
    | 'failed';
  children?: ReactNode;
  isValid?: boolean;
  nickname?: string;
}

const Modal = ({
  isOpen,
  sprites,
  name,
  type = 'catching',
  children,
  isValid,
  nickname,
}: IModal) => {
  return (
    <M isOpen={isOpen} onClose={() => {}} size='full' motionPreset='none'>
      <ModalContent {...bg(type)}>
        <VStack {...content}>
          <Image
            src={sprites}
            alt={name}
            boxSize={{ base: '240px', lg: '320px' }}
          />
          <VStack justify='center' spacing='0' w='full'>
            {type === 'catching' && (
              <>
                <Image src='/pokeball.png' alt='Loading' {...imageCatching} />
                <Heading {...textBold}>Catching...</Heading>
              </>
            )}
            {type === 'caught' && (
              <>
                <Box position='relative'>
                  <Image src='/pokeball.png' alt='Loading' boxSize='80px' />
                  <Box {...icon}>
                    <MdStar color='#ECC94B' size={40} />
                  </Box>
                </Box>
                <Heading {...textBold} color='yellow.500'>
                  <strong>{name.toUpperCase()}</strong> was caught!
                </Heading>
              </>
            )}
            {type === 'fled' && (
              <>
                <Box position='relative'>
                  <Image src='/pokeball.png' alt='Loading' boxSize='80px' />
                  <Box {...icon}>
                    <MdElectricBolt color='#fff' size={40} />
                  </Box>
                </Box>
                <Heading {...textBold}>
                  Oh no! <strong>{name.toUpperCase()}</strong> fled
                </Heading>
              </>
            )}
            {type === 'nickname' &&
              (isValid ? (
                <Box {...textSmall}>
                  <Text>
                    <strong>{name.toUpperCase()}</strong> caught! A New Addition
                    to the Team!
                  </Text>
                  <Text>
                    Now set <strong>{name.toUpperCase()}</strong> a nickname
                  </Text>
                </Box>
              ) : (
                <Box {...textSmall}>
                  <Text color='red.600'>Nickname is taken</Text>
                  <Text>Please pick another nickname</Text>
                </Box>
              ))}
            {type === 'saved' && (
              <>
                <Text {...textSmall}>
                  Yeaaah!{' '}
                  <Text as='strong' textTransform='uppercase'>
                    {nickname}
                  </Text>{' '}
                  is now in your Pokémon list
                </Text>
              </>
            )}
            {children}
          </VStack>
        </VStack>
      </ModalContent>
    </M>
  );
};

export default Modal;
