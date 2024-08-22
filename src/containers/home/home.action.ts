import { POKEMON_API } from '@/shared/config';
import { IPokemon } from '@/shared/types';
import { fetcher } from '@/shared/utils';
import { useState } from 'react';
import useSwr from 'swr';

export const useHome = () => {
  const defaultLimit = 30;
  const [limit, setLimit] = useState<number>(0);
  const [data, setData] = useState<IPokemon[]>([]);
  const [isShowMore, setIsShowMore] = useState<boolean>(true);
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { isLoading } = useSwr(`${POKEMON_API}/pokemon?limit=${defaultLimit}&offset=${limit}`, fetcher,
    {
      onSuccess: (res) => {
        setIsFirstLoading(false)
        setIsDisabled(false)
        setData((prev: IPokemon[]) => [...prev, ...res?.results ?? []]);
        if (data?.length + 1 === res?.count) {
          setIsShowMore(false);
        }
      },
      onError: (err) => {
        console.log(err)
      }
    })
  const onMore = () => {
    setIsDisabled(true)
    setLimit(limit + defaultLimit);
  };

  return {
    data,
    isLoading,
    isFirstLoading,
    isShowMore,
    isDisabled,
    onMore
  };
};