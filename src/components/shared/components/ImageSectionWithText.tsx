import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useLanguage } from '@/components/context/LanguageContext';

const ImageSectionWithText: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar'
  const translations = {
    en: {
      
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta, dolorem ipsam, minima ex dicta eum sunt, harum earum atque quaerat illo. Iusto culpa magni mollitia amet quo repellendus magnam officiis.",
    buttonText: "Read More"
    },
    ar: {
      text: "لوريم ايبسوم دولار سيت أميت، كونسيكتيتور أدايبيسيكينغ إيليت. يوت سولوتا، دولوريم إيبسام، مينيميا إكس ديكتا إيام سونت، هاروم إييروم أتكي كوارات إيلو. يوتسو كالبا ماجني موليتيا أميت كو ريبيللندوس ماجنام أوفيسيس.",
      buttonText: "اقرأ المزيد"
    }
  };

  const currentLang = language === 'ar' ? translations.ar : translations.en;

  return (
    <Box
      position="relative"
      h={{ base: "49vh", lg: "60vh" }}
      w="100%"
      backgroundImage="url('./_CED2753.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: "contain", lg: "cover" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      dir={isRTL ? 'rtl' : 'ltr'}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.7,
        zIndex: 1,
      }}
    >
      <Box zIndex={2} color="white" textAlign="center">
        <Text fontSize={{ base: "18px", lg: "24px" }} color="#b7791f" fontStyle="italic">
          {currentLang.text}
        </Text>
        <Button bgColor="#3c3c3c" fontSize="15px" marginTop="2rem" w="120px" color="white" backgroundColor="#b7791f">
          {currentLang.buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ImageSectionWithText;
