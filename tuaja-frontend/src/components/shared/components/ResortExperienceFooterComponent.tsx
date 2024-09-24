import { useLanguage } from '@/components/context/LanguageContext';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface ResortExperienceFooterProps {
  color?: string;
  text1_en: string;
  text1_ar: string;
  text2_en: string;
  text2_ar: string;
  Asset: string;
}

const ResortExperienceFooterComponent: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const IconCard: React.FC<ResortExperienceFooterProps> = ({
    color,
    text1_en,
    text1_ar,
    text2_en,
    text2_ar,
    Asset,
  }) => {
    return (
      <Flex
        flexDir="column"
        color={color}
        align="center"
        justify="space-between"
        _hover={{ cursor: 'pointer' }}
      >
        <Box h={20} w={20} sx={{ fontFamily: 'OpenSans-Italic-Variable' }}>
          <Image
            src={Asset}
            alt="svg"
            width={80}
            height={80}
            objectFit="cover"
          />
        </Box>
        <Flex
          as="b"
          flexDir="column"
          textTransform="uppercase"
          justifyContent="center"
          align="center"
          fontSize="x-large"
          fontFamily={'Open-Sans-Light'}
          marginTop={'1rem'}
        >
          <Text>{isRTL ? text1_ar : text1_en}</Text>
          <Text>{isRTL ? text2_ar : text2_en}</Text>
        </Flex>
      </Flex>
    );
  };

  const cardsData: ResortExperienceFooterProps[] = [
    {
      color: 'green.400',
      text1_en: 'premium farm',
      text2_en: 'Resort',
      text1_ar: 'مزرعة متميزة',
      text2_ar: 'ملجأ',
      Asset: '/Asset-1.svg',
    },
    {
      color: 'green.800',
      text1_en: 'eco',
      text2_en: 'Resort',
      text1_ar: 'مزرعة متميزة',
      text2_ar: 'ملجأ',
      Asset: '/Asset-2.svg',
    },
    {
      color: 'red.700',
      text1_en: 'Adventure',
      text2_en: 'Resort',
      text1_ar: 'مزرعة متميزة',
      text2_ar: 'ملجأ',
      Asset: '/Asset-3.svg',
    },
  ];
  const displayCards = isRTL ? cardsData.slice().reverse() : cardsData;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      width="100%"
      maxWidth="full"
      mx="auto"
      p={4}
      spacing={10}
    >
      {displayCards.map((item, index) => (
        <IconCard
          key={index}
          color={item.color}
          text1_en={item.text1_en}
          text1_ar={item.text1_ar}
          text2_en={item.text2_en}
          text2_ar={item.text2_ar}
          Asset={item.Asset}
        />
      ))}
    </SimpleGrid>
  );
};

export default ResortExperienceFooterComponent;
