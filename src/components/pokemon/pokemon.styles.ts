import { FlexProps, ImageProps, TextProps } from '@chakra-ui/react'

export const skeleton = {
  rounded: '16px',
  shadow: 'lg',
}

export const card: FlexProps = {
  flexDirection: 'column',
  align: 'center',
  bg: 'white',
  p: { base: "4", lg: '6' },
  pt: '0 !important',
  rounded: '16px',
  shadow: 'lg',
  border: "2px",
  position: "relative",
  sx: {
    '& img': {
      imageRendering: 'pixelated',
    },
  }
}

export const image: ImageProps = {
  boxSize: { base: "72px", lg: '96px' },
  position: 'relative',
  top: { base: "-8", lg: '-12' },
  mb: '-8',
}

export const title: TextProps = {
  textTransform: 'capitalize',
  fontSize: { base: "xl", lg: '3xl' },
  fontWeight: 'black',
}

export const type: FlexProps = {
  fontWeight: 'bold',
  px: '3',
  rounded: 'md',
  textTransform: 'uppercase',
  color: "black",
  borderRadius: "25px",
  fontSize: { base: "xs", lg: "md" }
}

export const count: FlexProps = {
  align: 'center',
  position: 'absolute',
  top: '2',
  right: '4',
  fontWeight: "bold"
}