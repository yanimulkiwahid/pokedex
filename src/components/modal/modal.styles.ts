import { BoxProps, TextProps } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const shake = keyframes`
  0% {
    transform: translateX(0) rotate(0);
  }
  20% {
    transform: translateX(-10px) rotate(-20deg);
  }
  30% {
    transform: translateX(10px) rotate(20deg);
  }
  50% {
    transform: translateX(-10px) rotate(-10deg);
  }
  60% {
    transform: translateX(10px) rotate(10deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }`

export const imageCatching = {
  animation: `${shake} infinite 1.5s linear`,
  boxSize: '80px'
}

export const content = {
  align: 'center',
  justify: 'center',
  h: '100vh',
  p: "4",
  spacing: '8',
  sx: {
    '& img': {
      imageRendering: 'pixelated',
    },
  }
}

export const textBold: TextProps = {
  fontSize: { base: "3xl", lg: '64px' },
  color: 'white',
  textShadow: { base: "none", lg: '#000 3px 5px 0px' }
}

export const icon: BoxProps = {
  position: 'absolute',
  top: '-4',
  left: '50%',
  transform: 'translateX(-50%)',
}

export const textSmall: TextProps = {
  fontSize: { base: "2xl", lg: '4xl' },
  textAlign: 'center',
}

const getBg = (type: string) => ({
  bg: {
    catching: "blackAlpha.800",
    caught: "whiteAlpha.800",
    others: "blackAlpha.800",
    fled: "#e53e3eb3",
    failed: "#e53e3eb3"
  }[type] || "gray.100"

})

export const bg = (type: string) => ({
  ...getBg(type)
})