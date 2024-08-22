import { POKEMON_API } from '@/shared/config';
import { IPokemon, IType } from '@/shared/types';
import { fetcher } from '@/shared/utils';
import { Flex, HStack, Image, Skeleton, Text } from '@chakra-ui/react';
import Link from 'next/link';

import {
  card,
  count,
  image,
  skeleton,
  title,
  type,
} from '@/components/pokemon/pokemon.styles';
import useSWR from 'swr';

const Pokemon = ({ name, caught }: IPokemon) => {
  const { data } = useSWR(POKEMON_API + '/pokemon/' + name, fetcher);
  const sprites =
    data?.sprites?.versions?.['generation-v']?.['black-white'].animated
      .front_default;
  const types = data?.types.map((item: IType) => item?.type?.name);
  return (
    <Skeleton isLoaded={data} {...skeleton}>
      <Link href={`/pokemon/${name}`} passHref>
        <Flex {...card} _hover={{ color: data?.types[0]?.type?.name }}>
          <Image src={sprites} alt={name} {...image} />
          <Text {...title}>{name}</Text>
          <HStack spacing='2' mt='2'>
            {types?.map((item: string) => (
              <Flex key={item} bg={item} {...type}>
                {item}
              </Flex>
            ))}
          </HStack>
          {caught ? (
            <Flex {...count}>
              <Image src='/pokeball.png' alt='Pokemon' boxSize='16px' />
              <Text ml='1' fontSize='xl'>
                &times;{caught}
              </Text>
            </Flex>
          ) : null}
        </Flex>
      </Link>
    </Skeleton>
  );
};

export default Pokemon;
