'use client';

import Modal from '@/components/modal';
import { textSmall } from '@/components/modal/modal.styles';
import { action } from '@/containers/detail/detail.styles';
import { heading } from '@/containers/home/home.styles';
import { useMyPokemon } from '@/containers/my-pokemon/my-pokemon.action';
import {
  card,
  empty,
  emptyText,
  grid,
  image,
  pokemonNick,
  release,
} from '@/containers/my-pokemon/my-pokemon.styles';
import { IMyPokemon } from '@/shared/types';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';

const MyPokemon = () => {
  const {
    data,
    onReleaseConfirmation,
    isOpen,
    selected,
    onCancel,
    onRelease,
    isFailed,
    onCancelFailed,
    onRename,
  } = useMyPokemon();
  return (
    <>
      <Heading {...heading}>My Pokémon ({data?.length || 0})</Heading>
      {data?.length ? (
        <Grid {...grid}>
          {[...data].reverse()?.map((item: IMyPokemon, index: number) => (
            <Flex key={index} {...card}>
              <Flex onClick={() => onReleaseConfirmation(item)} {...release}>
                <MdClose color='#E53E3E' />
              </Flex>
              <Image src={item?.sprites} alt={item?.name} {...image} />
              <Text {...pokemonNick}>{item?.nickname}</Text>
              <Text fontSize='xl' textTransform='uppercase' color='gray.500'>
                {item?.name}
              </Text>
              <Button size='sm' mt='4' onClick={() => onRename(item)}>
                Rename
              </Button>
            </Flex>
          ))}
        </Grid>
      ) : (
        <Flex {...empty}>
          <Image src='/explore.png' boxSize='128px' alt='Explore' />
          <Text {...emptyText}>You haven`t caught any pokemon</Text>
          <Link href='/' passHref>
            <Button>Explore</Button>
          </Link>
        </Flex>
      )}
      <Modal
        isOpen={isOpen}
        name={selected?.name}
        sprites={selected?.sprites}
        type='others'
      >
        <Box color='white'>
          <Text {...textSmall}>
            Are you sure you want to release{' '}
            <strong>{selected?.nickname?.toLocaleUpperCase()}</strong>?
          </Text>
          <Text {...textSmall}>
            You`ll have to catch another one and cannot undo this action
          </Text>
        </Box>
        <Grid {...action}>
          <Button w='full' onClick={onCancel}>
            Cancel
          </Button>
          <Button
            w='full'
            colorScheme='red'
            onClick={() => onRelease(selected)}
          >
            Release
          </Button>
        </Grid>
      </Modal>
      <Modal
        isOpen={isFailed}
        name={selected?.name}
        sprites={selected?.sprites}
        type='failed'
      >
        <Text {...textSmall} color='white'>
          Failed to release{' '}
          <strong>{selected?.nickname?.toLocaleUpperCase()}</strong>
        </Text>
        <Button onClick={onCancelFailed} mt='8'>
          Back
        </Button>
      </Modal>
    </>
  );
};

export default MyPokemon;
