import { colors } from '@/themes/colors';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'__VT323_4ca395', '__VT323_Fallback_4ca395'",
  },
  colors,
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        sm: {
          px: '6',
          border: "1px",
          borderColor: "black",
          fontSize: "lg",
          textShadow: '#000 1px 2px 0px'
        },
        lg: {
          h: '56px',
          fontSize: '2xl',
          px: '10',
          border: "2px",
          borderColor: "black",
          textShadow: '#000 1px 2px 0px'
        },
      },
      defaultProps: {
        size: 'lg',
        colorScheme: 'blue',
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            border: "2px",
            borderColor: "black",
            textAlign: "center",
            _hover: {
              borderColor: "blue.500"
            }
          }
        },
      },
      sizes: {
        lg: {
          field: {
            h: '56px',
            fontSize: '3xl',
            px: '4',
          }
        },
      },
      defaultProps: {
        size: 'lg',
        colorScheme: 'blue',
      },
    },
  },
})

export default theme