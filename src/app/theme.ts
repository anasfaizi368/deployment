import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Cal Roman Capitals, sans-serif',
    body: 'Cal Roman Capitals, sans-serif',
    arabic: {
      heading: "'YourArabicFont', sans-serif",
      body: "'YourArabicFont', sans-serif",
    },
  },
});


export default theme;
