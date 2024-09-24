import React from 'react';
import { SimpleGrid, Flex, Heading, Text, Box } from '@chakra-ui/react';
import { useLanguage } from '@/components/context/LanguageContext';
import Image from 'next/image';

interface AboutUsResortExperienceDataProps {
  heading_en: string;
  heading_ar: string;
  text_en: string;
  text_ar: string;
  images: { src: string; alt: string }[];
}

const AboutUsResortExperienceMain: React.FC<{
  data: AboutUsResortExperienceDataProps;
}> = ({ data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const imagesToDisplay = isRTL ? [...data.images].reverse() : data.images;

  return (
    <Flex flexDir="column" gap={8} textAlign={isRTL ? 'right' : 'left'} my={{ base: "0px", lg: "22px" }}>
      <Flex flexDir="column" gap={2}>
        <Heading
          fontSize={{ base: '22px', lg: '26px' }}
          color="yellow.600"
          textTransform="uppercase"
          fontWeight="500"
          fontFamily={'TrajanPro-Bold'}
        >
          {isRTL ? data.heading_ar : data.heading_en}
        </Heading>
        <Text
          color="gray.600"
          fontSize={{ base: '19px', lg: '20px' }}
          fontFamily={'Open-Sans-Light'}
          maxWidth={'100%'}
        >
          {isRTL ? data.text_ar : data.text_en}
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} w="100%" spacing={8}>
        {imagesToDisplay.map((image, index) => (
          <Box key={index} position="relative" width="100%" height="400px">
            <Image
              src={image.src}
              alt={`Resort Experience Image ${image.alt}`}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default AboutUsResortExperienceMain;
