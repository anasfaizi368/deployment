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
  color?: string;
}

const ImageTextShortComponent: React.FC<ImageTextShortComponentProps> = ({
  data,
  color,
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
      align="start"
      textAlign="left"
      {...rest}
      gap={{ base: '10px', lg: '30px' }}
      marginX={{ base: "0px", lg: "150px" }}
      marginBottom={4}
    >
      <Flex
        overflow="hidden"
        justifyContent="start"
        width={{ base: '100%', lg: '35%' }}
        height={{ base: 'auto', lg: '50%' }}
      >
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={500}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </Flex>
      <Card
        width={{ base: '100%', lg: "100%" }}
        height={{ base: 'auto', lg: 'auto' }}
        borderRadius="none"
        shadow="none"
        px={0}
      >
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          height="full"
          width="100%"
          px={0}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            alignItems={{ base: 'start', lg: isRTL ? 'end' : 'start' }}
          >
            {isHeading && (
              <Heading
                size={{ base: 'md', lg: 'xl' }}
                color={color}
                fontWeight={500}
                fontSize={{ base: '22px', lg: '26px' }}
                justifySelf="center"
                textAlign={{ base: 'start', lg: isRTL ? 'end' : 'start' }}
                fontFamily="TrajanPro-Bold"
              >
                {title}
              </Heading>
            )}
            <Text
              fontSize={{ base: '16px', lg: '20px' }}
              color="gray.600"
              textAlign={isRTL ? 'end' : 'start'}
              fontWeight={300}
              paddingY={1}
              noOfLines={5}
              fontFamily="Open-Sans-Light"
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
