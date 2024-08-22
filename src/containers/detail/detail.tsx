'use client';

import Loading from '@/components/loading';
import Modal from '@/components/modal';
import { useDetail } from '@/containers/detail/detail.action';
import {
  action,
  back,
  badge,
  badgeSmall,
  form,
  genderItem,
  grid,
  header,
  heading,
  info,
  label,
  moveItem,
  moveList,
  statItem,
  statList,
} from '@/containers/detail/detail.styles';
import { statName } from '@/shared/utils';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MdFemale, MdMale, MdOutlineArrowBack } from 'react-icons/md';

const Detail = () => {
  const {
    data,
    types,
    abilities,
    moves,
    sprites,
    description,
    color,
    gender,
    stats,
    isLoading,
    onCatchPokemon,
    isCatching,
    isCaught,
    isCatch,
    isNickName,
    onChange,
    onSave,
    nickname,
    isValid,
    isSaved,
    isSaving,
  } = useDetail();
  const getGender = (gender: string) => {
    if (gender === 'male') {
      return <MdMale color='#009BFE' size={34} />;
    }
    return gender === 'female' ? <MdFemale color='#FF4B64' size={34} /> : null;
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <HStack {...header}>
        <Link href='/' passHref>
          <Flex {...back}>
            <MdOutlineArrowBack size={20} />
          </Flex>
        </Link>
        <Heading as='h1' {...heading}>
          {data?.name}
        </Heading>
      </HStack>
      <Grid {...grid}>
        <VStack spacing='6' align='stretch'>
          <Box position='relative'>
            <Flex align='center' flexDirection='column'>
              <Image
                src={sprites}
                alt={data?.name}
                boxSize='320px'
                maxW='full'
              />
              <Button
                colorScheme='red'
                mt='4'
                fontSize='4xl'
                leftIcon={
                  <Image src='/pokeball.png' alt='Catch' boxSize='32px' />
                }
                onClick={onCatchPokemon}
              >
                CATCH
              </Button>
            </Flex>
          </Box>
          <HStack spacing='2' justify='center' flexWrap='wrap'>
            {stats?.map((item: string, index: number) => (
              <Flex key={index} {...statList}>
                <Box>{statName[index as keyof typeof statName]}</Box>
                <Flex {...statItem(index)}>{item}</Flex>
              </Flex>
            ))}
          </HStack>
        </VStack>
        <VStack spacing='6' align='stretch'>
          <Text fontSize={{ base: '2xl', lg: '3xl' }}>{description}</Text>
          <VStack spacing='2' align='stretch'>
            <Text {...label}>Type</Text>
            <HStack spacing='2' flex='wrap'>
              {types?.map((item: string, index: number) => (
                <Box key={index} {...badge(item)}>
                  {item}
                </Box>
              ))}
            </HStack>
          </VStack>
          <VStack spacing='2' align='stretch'>
            <Text {...label}>Abilities</Text>
            <HStack spacing='2' flexWrap='wrap'>
              {abilities?.map((item: string, index: number) => (
                <Box key={index} {...badge(`${color}.200`)}>
                  {item}
                </Box>
              ))}
            </HStack>
          </VStack>
          <HStack {...info}>
            <VStack spacing='2' align='stretch'>
              <Text {...label}>Gender</Text>
              <HStack spacing='2'>
                {gender?.map((item: string, index: number) => (
                  <Flex key={index} {...genderItem(item === 'genderless')}>
                    {getGender(item)}
                  </Flex>
                ))}
              </HStack>
            </VStack>
            <VStack spacing='2' align='stretch'>
              <Text {...label}>Height</Text>
              <Box {...badgeSmall}>{data?.height / 10}m</Box>
            </VStack>
            <VStack spacing='2' align='stretch'>
              <Text {...label}>Weight</Text>
              <Box {...badgeSmall}>{data?.weight / 10}kg</Box>
            </VStack>
            <VStack spacing='2' align='stretch'>
              <Text {...label}>Base Exp</Text>
              <Box {...badgeSmall}>{data?.base_experience}</Box>
            </VStack>
          </HStack>
        </VStack>
      </Grid>
      <VStack spacing='2' align='stretch'>
        <Text {...label} textAlign='center'>
          Moves
        </Text>
        <Grid {...moveList}>
          {moves?.map((item: string, index: number) => (
            <Box key={index} {...moveItem}>
              {item}
            </Box>
          ))}
        </Grid>
      </VStack>
      <Modal
        isOpen={isCatching}
        type='catching'
        name={data?.name}
        sprites={sprites}
      />
      <Modal
        isOpen={isCaught && isCatch}
        type='caught'
        name={data?.name}
        sprites={sprites}
      />
      <Modal
        isOpen={!isCaught && isCatch}
        type='fled'
        name={data?.name}
        sprites={sprites}
      />
      <Modal
        isOpen={isNickName && !isSaved}
        type='nickname'
        name={data?.name}
        sprites={sprites}
        isValid={isValid}
      >
        <VStack {...form}>
          <Input
            w='full'
            isRequired
            placeholder='Enter a nickname'
            onChange={onChange}
            isInvalid={!isValid}
            isDisabled={isSaving}
          />
          <Button
            w='full'
            onClick={onSave}
            isDisabled={nickname?.length === 0}
            isLoading={isSaving}
          >
            Save
          </Button>
        </VStack>
      </Modal>
      <Modal
        isOpen={isSaved}
        type='saved'
        name={data?.name}
        sprites={sprites}
        nickname={nickname}
      >
        <Grid {...action}>
          <Link href='/' passHref>
            <Button w='full'>Catch Another Pokémon</Button>
          </Link>
          <Link href='/my-pokemon' passHref>
            <Button w='full' colorScheme='yellow' color='white'>
              See My Pokémon
            </Button>
          </Link>
        </Grid>
      </Modal>
    </>
  );
};

export default Detail;
