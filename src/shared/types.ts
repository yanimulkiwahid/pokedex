
export interface IAllPokemonResponse {
  count: number;
  next?: string;
  previous?: string;
  results: IPokemon[];
}
export interface IPokemon {
  name: string;
  url?: string;
  caught?: number;
}
export interface IType {
  type?: {
    name?: string;
  };
}
export interface IAbility {
  ability?: {
    name?: string;
  };
}
export interface IMove {
  move?: {
    name?: string;
  };
}
export interface IStat {
  base_stat?: number;
  stat?: {
    name?: string;
  };
}
export interface IMyPokemon {
  name: string;
  nickname: string;
  sprites: string;
  sequence: number
}