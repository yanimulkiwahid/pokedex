'use client';

import { Providers } from '@/app/provider';
import { home, navbar, navText } from '@/containers/home/home.styles';
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { VT323 } from 'next/font/google';
import Link from 'next/link';
import { ReactNode } from 'react';

const font = VT323({ weight: '400', subsets: ['latin'] });

interface IRootLayout {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang='en'>
      <body className={font.className} suppressHydrationWarning>
        <Providers>
          <Flex {...navbar}>
            <HStack spacing='8' divider={<StackDivider borderColor='black' />}>
              <Link href='/' passHref>
                <HStack align='center' spacing='3'>
                  <Image
                    src='/explore.png'
                    boxSize={{ base: '16px', lg: '32px' }}
                    alt='Explore'
                  />
                  <Text {...navText}>Explore</Text>
                </HStack>
              </Link>
              <Link href='/my-pokemon' passHref>
                <HStack align='center' spacing='3'>
                  <Image
                    src='/pokemon.png'
                    boxSize={{ base: '16px', lg: '32px' }}
                    alt='Poekmon'
                  />
                  <Text {...navText}>My Pokemon</Text>
                </HStack>
              </Link>
            </HStack>
          </Flex>
          <Box {...home}>
            <Container maxW='container.lg'>{children}</Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
