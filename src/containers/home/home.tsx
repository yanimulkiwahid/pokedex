'use client';

import Loading from '@/components/loading';
import Pokemon from '@/components/pokemon';
import { useHome } from '@/containers/home/home.action';
import { grid, heading } from '@/containers/home/home.styles';
import { IMyPokemon, IPokemon } from '@/shared/types';
import { Button, Flex, Grid, Heading } from '@chakra-ui/react';

const Home = () => {
  const { data, onMore, isLoading, isFirstLoading, isDisabled } = useHome();
  if (isFirstLoading) {
    return <Loading />;
  }
  return (
    <>
      <Heading {...heading}>
        Catch Them All!
        <br />
        Collect Strongest and Rarest Pokémon
      </Heading>
      <Grid {...grid}>
        {data?.map((item: IPokemon, index: number) => {
          const myPokemon = localStorage.getItem('pokedex');
          const pokemon: IMyPokemon[] = JSON.parse(myPokemon!) || [];
          const getPokemon = pokemon?.filter(
            (itemChild) => itemChild?.name === item?.name
          );
          return (
            <Pokemon key={index} name={item.name} caught={getPokemon.length} />
          );
        })}
      </Grid>
      <Flex justify='center' mt='12'>
        <Button
          onClick={onMore}
          isLoading={isLoading && isDisabled}
          loadingText='Loading more...'
        >
          Load More Pokémon
        </Button>
      </Flex>
    </>
  );
};

export default Home;
