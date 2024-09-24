import { useLanguage } from '@/components/context/LanguageContext';
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

export interface ImageTextComponentData {
  title_en?: string;
  title_ar?: string;
  description_en: string;
  description_ar: string;
  isButton?: boolean;
  isHeading?: boolean;
  image_url: string;
  color?: string;
}

interface ImageTextComponentProps extends FlexProps {
  data: ImageTextComponentData[];
}

const ImageTextComponent: React.FC<ImageTextComponentProps> = ({
  data,
  color,
  ...rest
}) => {
  const {
    title_en,
    title_ar,
    description_en,
    description_ar,
    isButton,
    isHeading,
    image_url,
  } = data[0];

  const splitText = (text: string) => {
    const words = text.split(' ');
    const midpoint = Math.floor(words.length / 2);
    const firstPart = words.slice(0, midpoint).join(' ');
    const secondPart = words.slice(midpoint).join(' ');
    return { firstPart, secondPart };
  };

  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const heading = isRTL ? title_ar : title_en;
  const text = isRTL ? description_ar : description_en;
  const { firstPart, secondPart } = splitText(text);

  return (
    <Flex
      flexDirection={{ base: 'column', lg: isRTL ? 'row-reverse' : 'row' }}
      align="center"
      justify="space-between"
      textAlign="start"
      {...rest}
      columnGap={20}
      marginTop={30}
    >
      <Flex
        height={{ base: 300, lg: 400 }}
        overflow="hidden"
        width={{ base: '100%', lg: 500 }}
        position="relative"
      >
        <Image
          src={image_url}
          alt="image 1"
          layout="fill"
          objectFit="cover"
          style={{ objectFit: 'cover' }}
        />
      </Flex>
      <Card
        width={{ base: '100%', lg: '50%' }}
        overflow="hidden"
        borderRadius="none"
        shadow="none"
      >
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          height="100%"
          width="100%"
        >
          {isHeading && (
            <Heading
              width="full"
              textAlign={isRTL ? 'end' : 'start'}
              fontFamily="TrajanPro-Bold"
              fontSize={{ base: '20px', lg: '24px' }}
              fontWeight={500}
              textTransform="uppercase"
              color={color ? color : 'yellow.600'}
            >
              {heading}
            </Heading>
          )}
          <Box color="gray.600" textAlign={isRTL ? 'end' : 'start'}>
            <Text
              width="full"
              fontFamily="Open-Sans-Light"
              fontSize={{ base: '17px', lg: '20px' }}
              paddingY={1}
              noOfLines={5}
            >
              {firstPart}
            </Text>
            <Text
              fontFamily="Open-Sans-Light"
              fontSize={{ base: '17px', lg: '20px' }}
              marginTop={2}
              paddingY={1}
              noOfLines={5}
            >
              {secondPart}
            </Text>
          </Box>
          {isButton && (
            <Button
              mt="4"
              bg="gray.600"
              color="white"
              height="48px"
              width="140px"
              _hover={{ bg: 'yellow.600' }}
              fontFamily="Open-Sans-Light"
            >
              Read More
            </Button>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
};

export default ImageTextComponent;
