import { FlexProps, ImageProps, TextProps } from '@chakra-ui/react'

export const grid = {
  gap: '6',
  mt: { base: "10", lg: '20' },
  columnGap: { base: '4', lg: '6' },
  rowGap: { base: '12', lg: '16' },
  gridTemplateColumns: { base: "repeat(2,minmax(120px,1fr))", lg: 'repeat(4, 1fr)' },
  alignItems: "flex-start",
  sx: {
    '& img': {
      imageRendering: 'pixelated',
    }
  }
}

export const card: FlexProps = {
  bg: 'white',
  rounded: '16px',
  shadow: 'lg',
  border: '2px',
  position: 'relative',
  flexDirection: 'column',
  align: 'center',
  p: '4',
  pt: '0',
  h: "full",
}

export const release: FlexProps = {
  position: 'absolute',
  top: { base: "-2", lg: '-4' },
  right: { base: "-2", lg: '-4' },
  boxSize: '32px',
  bg: 'white',
  align: 'center',
  justify: 'center',
  borderRadius: '50%',
  shadow: 'lg',
  border: '2px',
  zIndex: 2,
  cursor: 'pointer',
  _hover: {
    bg: 'gray.100',
  }
}

export const image: ImageProps = {
  boxSize: { base: '72px', lg: '96px' },
  position: 'relative',
  top: { base: '-8', lg: '-12' },
  mb: '-8',
}

export const pokemonNick: TextProps = {
  fontSize: '2xl',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  mb: '-1',
  textAlign: 'center',
  whiteSpace: 'wrap',
  wordBreak: 'break-word',
}

export const empty: FlexProps = {
  align: 'center',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  w: '100%',
  p: "4",
}

export const emptyText: TextProps = {
  my: '4',
  fontSize: { base: "3xl", lg: '48px' },
  textAlign: "center",
  fontWeight: 'bold',
  color: 'white',
  textShadow: '#000 2px 3px 0px',
}