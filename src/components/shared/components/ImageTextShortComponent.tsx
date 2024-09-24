import {
  Button,
  Card,
  CardBody,
  Box,
  Flex,
  Text,
  Heading,
  FlexProps,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ReactNode } from 'react';
import { useLanguage } from '@/components/context/LanguageContext';

export interface ImageTextShortComponentData {
  title_en?: string;
  title_ar?: string;
  description_en: ReactNode;
  description_ar: ReactNode;
  isButton?: boolean;
  isHeading?: boolean;
  imageData: {
    src: string;
    alt: string;
  };
}

interface ImageTextShortComponentProps extends FlexProps {
  data: ImageTextShortComponentData[];
}

const ImageTextShortComponent: React.FC<ImageTextShortComponentProps> = ({
  data,
  ...rest
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const {
    title_en,
    title_ar,
    description_en,
    description_ar,
    isButton,
    isHeading,
    imageData,
  } = data[0];
  const { src, alt } = imageData;

  const title = isRTL ? title_ar : title_en;
  const description = isRTL ? description_ar : description_en;

  return (
    <Flex
      align="center"
      justify="space-between"
      textAlign="center"
      {...rest}
      gap={{ base: '2px', lg: '20px' }}
    >
      <Flex
        width={{ base: '100%', lg: '50%' }}
        height={{ base: '40vh', lg: '70vh' }}
        overflow="hidden"
        justifyContent="center"
        position="relative"
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          style={{ objectFit: 'cover' }}
        />
      </Flex>
      <Card
        width={{ base: '100%', lg: '40%' }}
        height={{ base: 'auto', lg: '60vh' }}
        overflow="hidden"
        borderRadius="none"
        shadow="none"
      >
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent={'center'}
          alignItems={'center'}
          height="full"
          width={'full'}
        >
          <Box
            display="flex"
            flexDirection="column"
            width={'full'}
            alignItems={{ base: 'center', lg: isRTL ? 'end' : 'start' }}
            paddingX={{ base: 0, lg: 20 }}
          >
            {isHeading && (
              <Heading
                size={{ base: 'md', lg: 'xl' }}
                color="yellow.600"
                fontWeight={500}
                fontSize={{ base: '22px', lg: '40px' }}
                justifySelf="center"
                textAlign={{ base: 'center', lg: isRTL ? 'end' : 'start' }}
                fontFamily={'TrajanPro-Bold'}
              >
                {title}
              </Heading>
            )}
            <Text
              fontSize={{ base: '18px', lg: '22px' }}
              color="gray.600"
              textAlign={isRTL ? 'end' : 'start'}
              fontWeight={300}
              paddingY={2}
              noOfLines={5}
              fontFamily={'Open-Sans-Light'}
            >
              {description}
            </Text>
          </Box>
          {isButton && (
            <Button
              mt="4"
              bg="gray.600"
              color="white"
              height="48px"
              width={{ base: '120px', lg: '140px' }}
              _hover={{ bg: 'yellow.600' }}
              sx={{ fontFamily: 'OpenSans-Italic-Variable' }}
            >
              {isRTL ? 'اقرأ أكثر' : 'Read More'}
            </Button>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
};

export default ImageTextShortComponent;
