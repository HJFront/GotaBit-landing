import { PaletteMode, ThemeOptions } from '@mui/material'

const getDesignTokens: (mode: PaletteMode) => ThemeOptions = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: '#132F4C',
        },
        background: {
          default: '#fff',
        },
        text: {
          primary: '#132F4C',
          secondary: '#5D6975',
          info: '#198BFE'
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: '#F4F6F9',
        },
        background: {
          // default: deepOrange[900],
          // paper: deepOrange[900],
          default: '#030c14',
        },
        text: {
          primary: '#F4F6F9',
          secondary: '#5D6975',
        },
      }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  }
})

export default getDesignTokens
