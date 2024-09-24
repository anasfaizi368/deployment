import React from 'react';
import {
  Box,
  Text,
  Input,
  FormControl,
  Grid,
  Textarea,
  Button
} from '@chakra-ui/react';
import { useLanguage } from '@/components/context/LanguageContext';

const Form: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar'

  const translations = {
    en: {
      heading: "GET IN TOUCH WITH US",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit repellat minus.",
      namePlaceholder: "Enter your Name...",
      emailPlaceholder: "youremail@domain.com",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Here goes your message...",
      sendButton: "SEND"
    },
    ar: {
      heading: "تواصل معنا",
      description: "لوريم ايبسوم دولار سيت أميت, كونسيكتيتور أدايبيسيكينغ إيليت, ريبيللات مينوس.",
      namePlaceholder: "ادخل اسمك...",
      emailPlaceholder: "بريدك الإلكتروني@domain.com",
      subjectPlaceholder: "الموضوع",
      messagePlaceholder: "هنا رسالتك...",
      sendButton: "إرسال"
    }
  };
  const currentLang = language === 'ar' ? translations.ar : translations.en;

  return (
    <Box
      h="auto"
      w="100%"
      bgColor="white"
      display="flex"
      justifyContent="center"
      paddingBottom="2rem"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Box h="100%" w="80%" bgColor="white" paddingTop="1rem" textAlign={isRTL ? 'right' : 'left'}>
        <Text color="#b7791f" fontSize={{ base: "26px", lg: "36px" }}>
          {currentLang.heading}
        </Text>
        <Text color="gray" fontSize="18px" marginTop="10px">
          {currentLang.description}
        </Text>

        <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }} gap={4} marginTop={{ base: "3rem", lg: "5rem" }}>
          <FormControl id="name1" isRequired>
            <Input
              type="text"
              w="100%"
              border="none"
              marginTop={{ base: "1rem", lg: "0rem" }}
              borderBottom="1px solid gray"
              placeholder={currentLang.namePlaceholder}
              _focus={{ boxShadow: 'none', borderBottom: '1px solid gray' }}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <Input
              type="email"
              marginTop={{ base: "1rem", lg: "0rem" }}
              w="100%"
              border="none"
              borderBottom="1px solid gray"
              placeholder={currentLang.emailPlaceholder}
              _focus={{ boxShadow: 'none', borderBottom: '1px solid gray' }}
            />
          </FormControl>
          <FormControl id="subject" isRequired>
            <Input
              type="text"
              marginTop={{ base: "1rem", lg: "0rem" }}
              w="100%"
              border="none"
              borderBottom="1px solid gray"
              placeholder={currentLang.subjectPlaceholder}
              _focus={{ boxShadow: 'none', borderBottom: '1px solid gray' }}
            />
          </FormControl>
        </Grid>
        <Grid templateColumns="repeat(1, 1fr)" gap={4} marginTop="1rem">
          <FormControl id="message" isRequired>
            <Textarea
              w="full"
              border="none"
              marginTop={{ base: "1rem", lg: "0rem" }}
              borderBottom="1px solid gray"
              placeholder={currentLang.messagePlaceholder}
              rows={5}
              resize="none"
              _focus={{ boxShadow: 'none', borderBottom: '1px solid gray' }}
            />
          </FormControl>
        </Grid>
        <Button bgColor="#3c3c3c" fontSize="13px" marginTop="2rem" w="90px" color="white">
          {currentLang.sendButton}
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
