import { FlexProps, keyframes, SpinnerProps, TextProps } from '@chakra-ui/react'

export const spin = keyframes`
  from { transform: rotate(0deg);}
  to { transform: rotate(360deg); }
`

export const home = {
  bg: 'url(/bg.png),linear-gradient(180deg, #b7dae3 0%, #e0b080 90%)',
  pt: '10',
  pb: "117px",
  minH: '100vh',
  w: '100%',
}

export const heading: TextProps = {
  as: 'h1',
  textAlign: 'center',
  fontSize: { base: "2xl", lg: '56px' },
  color: 'white',
  textShadow: 'rgb(31, 41, 55) -0.222rem -0.222rem 0px, rgb(31, 41, 55) 0.222rem -0.222rem 0px, rgb(31, 41, 55) -0.222rem 0.222rem 0px, rgb(31, 41, 55) 0.222rem 0.222rem 0px, rgb(31, 41, 55) -0.111rem -0.222rem 0px, rgb(31, 41, 55) 0.111rem -0.222rem 0px, rgb(31, 41, 55) -0.111rem 0.222rem 0px, rgb(31, 41, 55) 0.111rem 0.222rem 0px, rgb(31, 41, 55) -0.222rem -0.111rem 0px, rgb(31, 41, 55) 0.222rem -0.111rem 0px, rgb(31, 41, 55) -0.222rem 0.111rem 0px, rgb(31, 41, 55) 0.222rem 0.111rem 0px, rgb(31, 41, 55) 0.111rem 0.444rem 0px, rgb(31, 41, 55) 0.222rem 0.444rem 0px, rgb(31, 41, 55) 0.333rem 0.444rem 0px, rgb(31, 41, 55) 0.444rem 0.444rem 0px, rgb(31, 41, 55) 0.444rem 0.333rem 0px, rgb(31, 41, 55) 0.444rem 0.222rem 0px, rgb(31, 41, 55) 0.444rem 0.111rem 0px'
}

export const loading: FlexProps = {
  h: "calc(100vh - 160px)",
  fontSize: "4xl",
  fontWeight: "bold",
  flexDirection: "column",
  align: "center",
  justify: "center",
  color: "white",
  textShadow: '#000 2px 3px 0px',
  sx: {
    img: {
      boxSize: "56px",
      animation: `${spin} infinite 1s linear`
    }
  }
}

export const spinner: SpinnerProps = {
  size: 'xl',
  thickness: '4px',
  speed: '0.65s',
  emptyColor: 'gray.200',
  color: 'blue.500',
  mb: "4",
}

export const grid = {
  columnGap: { base: "4", lg: '8' },
  rowGap: { base: "12", lg: '16' },
  gridTemplateColumns: { base: 'repeat(auto-fit,minmax(160px, 1fr))', lg: 'repeat(auto-fit,minmax(300px, 1fr))' },
  mt: { base: "10", lg: '20' },
}

export const navbar: FlexProps = {
  background: 'rgba(253, 253, 253, 0.3)',
  backdropFilter: 'blur(8px)',
  borderTop: '1px',
  position: 'fixed',
  bottom: '0',
  left: '0',
  right: '0',
  justify: 'center',
  zIndex: 9,
  p: '4',
  shadow: 'xl',
}

export const navText = {
  fontWeight: 'bold',
  fontSize: { base: "xl", lg: '3xl' },
  color: { lg: 'white' },
  textShadow: { base: "none", lg: 'rgb(31, 41, 55) -0.222rem -0.222rem 0px, rgb(31, 41, 55) 0.222rem -0.222rem 0px, rgb(31, 41, 55) -0.222rem 0.222rem 0px, rgb(31, 41, 55) 0.222rem 0.222rem 0px, rgb(31, 41, 55) -0.111rem -0.222rem 0px, rgb(31, 41, 55) 0.111rem -0.222rem 0px, rgb(31, 41, 55) -0.111rem 0.222rem 0px, rgb(31, 41, 55) 0.111rem 0.222rem 0px, rgb(31, 41, 55) -0.222rem -0.111rem 0px, rgb(31, 41, 55) 0.222rem -0.111rem 0px, rgb(31, 41, 55) -0.222rem 0.111rem 0px, rgb(31, 41, 55) 0.222rem 0.111rem 0px, rgb(31, 41, 55) 0.111rem 0.444rem 0px, rgb(31, 41, 55) 0.222rem 0.444rem 0px, rgb(31, 41, 55) 0.333rem 0.444rem 0px, rgb(31, 41, 55) 0.444rem 0.444rem 0px, rgb(31, 41, 55) 0.444rem 0.333rem 0px, rgb(31, 41, 55) 0.444rem 0.222rem 0px, rgb(31, 41, 55) 0.444rem 0.111rem 0px' }
}