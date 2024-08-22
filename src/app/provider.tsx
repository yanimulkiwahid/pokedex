'use client';

import theme from '@/themes';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IProvider {
  readonly children: ReactNode;
}

export function Providers({ children }: IProvider) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
