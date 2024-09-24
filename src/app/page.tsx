'use client'
import { useLanguage } from '@/components/context/LanguageContext';
// import HomePage from '@/components/page/HomePage/HomePage';
import HomePage2 from '@/components/page/HomePage/HomePage2';
import { Box } from '@chakra-ui/react';

const Home = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  return (
    <Box sx={{ fontFamily: isRTL ? 'Laureen-Zaza' : 'OpenSans-Italic-Variable' }}>
      <HomePage2 />
    </Box>)

};

export default Home;
