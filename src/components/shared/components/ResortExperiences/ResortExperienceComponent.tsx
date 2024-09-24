import { useLanguage } from '@/components/context/LanguageContext';
import {
  Card,
  CardBody,
  Button,
  Text,
  SimpleGrid,
  Box,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';

interface ResortExperienceCardProps {
  data: {
    main_heading_en: string;
    main_heading_ar: string;
    logo_url: string;
    cards: {
      text_en: string;
      text_ar: string;
      image_url: string;
      is_button: boolean;
      order: number;
    }[];
  };
}

const ResortExperienceComponent: React.FC<ResortExperienceCardProps> = ({ data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <>
      <Flex
        alignItems="center"
        gap={4}
        fontSize={{ base: '24px', md: '36px', lg: '50px' }}
        fontWeight={600}
        color="gray.600"
        py={8}
        textAlign={isRTL ? 'right' : 'left'}
        flexDirection={isRTL ? 'row-reverse' : 'row'}
        px={{ base: 4, md: 12, lg: 24 }}
      >
        <Text>{isRTL ? data.main_heading_ar : data.main_heading_en}</Text>
        <Box h={{ base: 12, md: 16, lg: 20 }} w={{ base: 12, md: 16, lg: 20 }} position="relative">
          {data && data.logo_url && (
            <Image
              src={data.logo_url}
              alt="Resort"
              layout="fill"
              objectFit="cover"
              style={{
                transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)',
              }}
            />
          )}
        </Box>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        w="100%"
        spacing={8}
        px={{ base: 4, md: 12, lg: 24 }}
      >
        {(isRTL ? data.cards.slice().reverse() : data.cards).map((item, index) => (
          <Card
            key={index}
            minW="100%"
            maxW="100%"
            height={{ base: 400, md: 500, lg: 800 }}
            position="relative"
            overflow="hidden"
            textAlign={isRTL ? 'right' : 'left'}
            flexDirection={isRTL ? 'row-reverse' : 'row'}
            borderRadius={0}
          >
            <Image
              src={item.image_url}
              alt={isRTL ? item.text_ar : item.text_en}
              layout="fill"
              objectFit="cover"
              style={{
                zIndex: 1,
              }}
            />
            <CardBody
              bg="rgba(0, 0, 0, 0.5)"
              color="white"
              position="relative"
              p={4}
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              height="100%"
              zIndex={2}
            >
              <Text
                fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                noOfLines={3}
              >
                {isRTL ? item.text_ar : item.text_en}
              </Text>
              {item.is_button && (
                <Button
                  mt="4"
                  bg="yellow.500"
                  color="white"
                  height={{ base: '40px', md: '48px' }}
                  width={{ base: '120px', md: '140px' }}
                  alignSelf="center"
                  _hover={{ bg: 'yellow.600' }}
                >
                  {isRTL ? 'اقرأ المزيد' : 'Read More'}
                </Button>
              )}
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ResortExperienceComponent;
