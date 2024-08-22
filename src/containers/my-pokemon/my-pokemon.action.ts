import { IMyPokemon } from '@/shared/types';
import { useEffect, useState } from 'react';

export const useMyPokemon = () => {
  const [data, setData] = useState<IMyPokemon[]>([]);
  const [random, setRandom] = useState<number>(0);
  const [selected, setSelected] = useState<IMyPokemon>({
    name: "",
    nickname: "",
    sprites: "",
    sequence: 0,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const myPokemon = localStorage.getItem('pokedex');
  const getMyPokemon: IMyPokemon[] = JSON.parse(myPokemon!) || [];
  useEffect(() => {
    setData(getMyPokemon)
  }, []);
  const isPrime = (num: number) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  const onReleaseConfirmation = (pokemon: IMyPokemon) => {
    setSelected(pokemon);
    setIsOpen(true)
  }
  const onCancel = () => setIsOpen(false)
  const onRelease = (pokemon: IMyPokemon) => {
    setIsFailed(false);
    setRandom(Math.floor(Math.random() * 10))
    if (isPrime(random)) {
      const data = getMyPokemon?.filter((item: IMyPokemon) => item?.nickname !== pokemon?.nickname);
      localStorage.setItem("pokedex", JSON.stringify(data));
      setIsOpen(false);
      setData(data);
    }
    else {
      setIsFailed(true);
      setIsOpen(false);
    }
  }
  const onCancelFailed = () => setIsFailed(false);
  const fib = (n: number) => {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
  }
  const onRename = (pokemon: IMyPokemon) => {
    const updatedPokemon = getMyPokemon.map((item: IMyPokemon) => {
      if (item?.nickname === pokemon?.nickname) {
        const sequence = item?.sequence! + 1;
        const getName = item?.nickname?.substring(0, item?.nickname?.indexOf("-"))
        return {
          ...item,
          nickname: item?.sequence === -1 ? `${item?.nickname}-${fib(sequence)}` : `${getName}-${fib(sequence)}`,
          sequence: sequence,
        };
      }
      return item;
    });
    setData(updatedPokemon);
    localStorage.setItem("pokedex", JSON.stringify(updatedPokemon));
  };


  return {
    getMyPokemon,
    data,
    selected,
    onReleaseConfirmation,
    isOpen,
    onCancel,
    onRelease,
    isFailed,
    onCancelFailed,
    onRename

  };
}