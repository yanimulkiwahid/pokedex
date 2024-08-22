import { BoxProps, FlexProps, GridProps, HeadingProps, StackProps, TextProps } from '@chakra-ui/react';

export const header = {
  align: 'center',
  spacing: '6',
  sx: {
    a: {
      display: { base: "none", lg: "inline-flex" }
    }
  }
}

export const back = {
  boxSize: '40px',
  bg: 'white',
  align: 'center',
  justify: 'center',
  borderRadius: '50%',
  shadow: 'lg',
  border: '2px',
}

export const heading: HeadingProps = {
  fontSize: { base: '64px', lg: "80px" },
  textTransform: 'capitalize',
  color: 'white',
  textShadow: 'rgb(31, 41, 55) -0.222rem -0.222rem 0px, rgb(31, 41, 55) 0.222rem -0.222rem 0px, rgb(31, 41, 55) -0.222rem 0.222rem 0px, rgb(31, 41, 55) 0.222rem 0.222rem 0px, rgb(31, 41, 55) -0.111rem -0.222rem 0px, rgb(31, 41, 55) 0.111rem -0.222rem 0px, rgb(31, 41, 55) -0.111rem 0.222rem 0px, rgb(31, 41, 55) 0.111rem 0.222rem 0px, rgb(31, 41, 55) -0.222rem -0.111rem 0px, rgb(31, 41, 55) 0.222rem -0.111rem 0px, rgb(31, 41, 55) -0.222rem 0.111rem 0px, rgb(31, 41, 55) 0.222rem 0.111rem 0px, rgb(31, 41, 55) 0.111rem 0.444rem 0px, rgb(31, 41, 55) 0.222rem 0.444rem 0px, rgb(31, 41, 55) 0.333rem 0.444rem 0px, rgb(31, 41, 55) 0.444rem 0.444rem 0px, rgb(31, 41, 55) 0.444rem 0.333rem 0px, rgb(31, 41, 55) 0.444rem 0.222rem 0px, rgb(31, 41, 55) 0.444rem 0.111rem 0px',
  textAlign: { base: "center", lg: "left" },
  flex: 1,
}

export const grid = {
  mt: '8',
  mb: { base: "8", lg: '16' },
  gap: { base: "8", lg: '16' },
  gridTemplateColumns: { base: "1fr", lg: '400px 1fr' },
  alignItems: 'center',
  sx: {
    '& img': {
      imageRendering: 'pixelated',
    },
  }
}

export const statList: FlexProps = {
  align: 'center',
  fontWeight: 'bold',
  rounded: 'md',
  color: 'black',
  borderRadius: '25px',
  fontSize: '2xl',
  textAlign: 'center',
  p: '1',
  justify: 'space-between',
  border: '2px',
  bg: 'gray.100',
  borderColor: 'gray.100',
  flexDirection: 'column',
}

export const statItem = (index: number) => ({
  align: 'center',
  justify: 'center',
  bg: `stat.${index}`,
  borderRadius: '50%',
  boxSize: '40px',
})

export const label: TextProps = {
  fontSize: { base: "lg", lg: 'xl' },
  fontWeight: 'bold',
  textTransform: 'uppercase',
}

export const badge = (item: string): BoxProps => ({
  bg: item,
  fontWeight: 'bold',
  px: '6',
  rounded: 'md',
  textTransform: 'uppercase',
  color: 'black',
  borderRadius: '25px',
  fontSize: { base: "xl", lg: '2xl' },
  border: '2px',
  borderColor: item,
})

export const genderItem = (isHide: boolean): FlexProps => ({
  fontWeight: 'bold',
  rounded: 'md',
  textTransform: 'uppercase',
  color: 'black',
  borderRadius: '25px',
  fontSize: { base: "xl", lg: '2xl' },
  border: '2px',
  textAlign: 'center',
  bg: 'white',
  ...(isHide && {
    display: 'none',
  })
})

export const badgeSmall: BoxProps = {
  fontWeight: 'bold',
  rounded: 'md',
  textTransform: 'uppercase',
  color: 'black',
  borderRadius: '25px',
  fontSize: { base: "xl", lg: '2xl' },
  border: '2px',
  bg: 'white',
  px: '6',
}

export const moveList: GridProps = {
  gap: '2',
  mt: '2',
  flexWrap: 'wrap',
  gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
}

export const moveItem: BoxProps = {
  fontWeight: 'bold',
  rounded: 'md',
  textTransform: 'uppercase',
  color: 'black',
  borderRadius: '25px',
  fontSize: { base: "md", lg: 'lg' },
  border: '2px',
  textAlign: 'center',
  bg: 'white',
  px: '4',
}

export const form: StackProps = {
  w: '320px',
  maxW: "full",
  spacing: '4',
  align: 'stretch',
  mt: '8',
}

export const info: StackProps = {
  spacing: { base: '4', lg: '6' },
  align: 'flex-start',
  flexWrap: 'wrap',
}

export const action = {
  gap: '4',
  w: "full",
  gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
  mt: '8',
  maxW: "520px"
}