import type { DeepPartial, Theme } from '@chakra-ui/react';


const extendedColors: Record<string, string | Record<string, string>> = {
  "normal": "#CDCDA8",
  "fire": "#F6A66C",
  "fighting": "#E9625A",
  "water": "#98B6FF",
  "flying": "#C2B1F6",
  "grass": "#92E469",
  "poison": "#C080C0",
  "electric": "#F8E084",
  "ground": "#F8DD95",
  "psychic": "#F488A9",
  "rock": "#DCC873",
  "ice": "#B7F3F3",
  "bug": "#CFDF46",
  "dragon": "#B8A0F8",
  "ghost": "#9D84C7",
  "dark": "#967F6F",
  "steel": "#DCDCF0",
  "fairy": "#FFD9DD",
  stat: {
    0: "#92E469",
    1: "#E9625A",
    2: "#F6A66C",
    3: "#C080C0",
    4: "#F8E084",
    5: "#B7F3F3"
  },
  brown: {
    "200": "#F8DD95",
  },
  white: {
    "200": "#DCDCF0",
  }
};


const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};