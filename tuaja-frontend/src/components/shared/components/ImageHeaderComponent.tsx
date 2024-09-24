import { useLanguage } from '@/components/context/LanguageContext';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface ImageHeaderComponentData {
  bgImage: {
    src: string;
    alt: string;
  };
  logo?: {
    src: string;
    alt: string;
  };
  heading_en?: string;
  heading_ar?: string;
  text_en?: string;
  text_ar?: string;
  isButton?: boolean;
  buttonText_en?: string;
  buttonText_ar?: string;
}

interface ImageHeaderComponentProps {
  data: ImageHeaderComponentData[];
  colors?: string;
  foSize?: boolean;
}

const ImageHeaderComponent: React.FC<ImageHeaderComponentProps> = ({
  data,
  colors,
  foSize,
}) => {
  const {
    bgImage,
    logo,
    heading_en,
    heading_ar,
    text_en,
    text_ar,
    isButton,
    buttonText_en,
    buttonText_ar,
  } = data[0];

  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <Box
      position="relative"
      marginTop={{ base: '1rem', lg: '0rem' }}
      width="100%"
      h={{ base: '50vh', lg: '80vh' }}
      overflow="hidden"
    >
      <Image
        src={bgImage.src}
        alt={bgImage.alt}
        layout="fill"
        objectFit="cover"
        priority
        style={{ filter: 'brightness(60%)' }}
      />
      <Flex
        zIndex={1}
        flexDir="column"
        color="white"
        justify="center"
        align="center"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        textAlign="center"
      >
        {logo?.src && (
          <Box w={{ base: '15%', md: '20%' }} mb={2}>
            <Image src={logo.src} alt={logo.alt} width={250} height={150} />
          </Box>
        )}
        <Heading
          sx={{ fontFamily: 'TrajanPro-Regular' }}
          textTransform="uppercase"
          fontWeight={200}
          mb={{ base: 2, md: 4 }}
          fontSize={foSize ? { base: 15, md: 40 } : { base: 15, md: 40 }}
          color={colors || 'white'}
        >
          {isRTL ? heading_ar : heading_en}
        </Heading>
        {text_en && text_ar && (
          <Text
            w="50%"
            mb={{ base: '10px', lg: '60px' }}
            fontSize={{ base: 10, md: 22 }}
            fontFamily="Open-Sans-Light"
          >
            {isRTL ? text_ar : text_en}
          </Text>
        )}
        {isButton && (
          <Button
            bg={colors}
            w={{ base: '80px', lg: '200px' }}
            h={{ base: '10px', lg: '50px' }}
            fontSize={{ base: 6, md: 12 }}
            color="white"
            fontFamily="TrajanPro-Bold"
          >
            {isRTL ? buttonText_ar : buttonText_en} VISIT AL AHSA RESORT
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default ImageHeaderComponent;
