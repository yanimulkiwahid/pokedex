import { POKEMON_API } from '@/shared/config';
import { IAbility, IMove, IMyPokemon, IPokemon, IStat, IType } from '@/shared/types';
import { fetcher } from '@/shared/utils';
import { useParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';


export const useDetail = () => {
  const params = useParams()
  const [isCatching, setIsCatching] = useState<boolean>(false)
  const [isCaught, setIsCaught] = useState<boolean>(false);
  const [isCatch, setIsCatch] = useState<boolean>(false);
  const [isNickName, setIsNickName] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const { data, isLoading: isLoadingData } = useSWR(`${POKEMON_API}/pokemon/${params.id}`, fetcher)
  const { data: dataSpecies, isLoading: isLoadingSpecies } = useSWR(data?.species?.url, fetcher)
  const { data: dataGender, isLoading: isLoadingGender } = useSWR(`${POKEMON_API}/gender/?name=${params.id}`, fetcher)
  const sprites =
    data?.sprites?.versions?.['generation-v']?.['black-white'].animated
      .front_default;
  const types = data?.types.map((item: IType) => item?.type?.name);
  const abilities = data?.abilities?.map((item: IAbility) => item?.ability?.name);
  const moves = data?.moves?.map((item: IMove) => item?.move?.name);
  const stats = data?.stats?.map((item: IStat) => item?.base_stat);
  const description = dataSpecies?.flavor_text_entries?.[0]?.flavor_text;
  const color = dataSpecies?.color?.name;
  const gender = dataGender?.results?.map((item: IPokemon) => item?.name);
  const isLoading = isLoadingData || isLoadingGender || isLoadingSpecies
  const catchPokemon = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random() < 0.5 ? false : true);
      }, 2000);
    });
  }
  const onCatchPokemon = async () => {
    setIsCatching(true)
    const isCaught = await catchPokemon()
    setIsCatching(false)
    setIsCatch(true);
    if (isCaught) {
      setIsCaught(true);
    } else {
      setIsCaught(false);
    }
    setTimeout(() => {
      setIsCatch(false);
      isCaught && setIsNickName(true)
    }, 3000);
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }
  const onSave = () => {
    const myPokemon = localStorage.getItem("pokedex");
    const pokemon: IMyPokemon[] = JSON.parse(myPokemon!) || [];
    const isExist = pokemon.some(item => item.nickname === nickname)
    if (!isExist) {
      setIsValid(true)
      setIsSaving(true)
      pokemon.push({
        name: data?.name,
        nickname,
        sprites,
        sequence: -1,
      })
      localStorage.setItem("pokedex", JSON.stringify(pokemon));
      setTimeout(() => {
        setIsSaved(true)
        setIsSaving(false)
      }, 1500);
    } else {
      setIsValid(false)
    };
  }
  return {
    data,
    isLoading,
    types,
    abilities,
    moves,
    sprites,
    description,
    color,
    gender,
    stats,
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
    isSaving
  };
};