import { useLanguage } from '@/components/context/LanguageContext';
import { Box, Flex, Grid, GridItem, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';

const ResortLayoutComponent: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const images = [
    '/_CED4266-1.jpg',
    '/_CED4436-1.jpg',
    '/_CED3586-1.jpg',
    '/_CED2437-1.jpg',
    '/_CED4448-1.jpg',
    '/_CED3501-2.jpg',
    '/_CED3148-1.jpg',
  ];

  return (
    <Box
      bgImage="url('/rosegold.svg')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      marginTop={0}
    >
      <Flex
        color="gray.600"
        flexDir="column"
        fontSize={{ base: 10, sm: 20, md: 30, xl: 50 }}
        fontWeight={600}
        ml={isRTL ? 0 : 200}
        mr={isRTL ? 200 : 0}
        textAlign={isRTL ? 'right' : 'left'}
        textTransform={'uppercase'}
        zIndex={99999}
      >
        <Text>
          {isRTL ? 'مزرعة متميزة' : 'TUAJA LUXURY RESORTS'}
        </Text>
        <Text>
          {isRTL ? 'منتجع فاخر' : 'AL AHSA'}
        </Text>
      </Flex>
      <Flex flexDir="column" h={{ base: 'auto', lg: 850 }}>
        <Box>
          <Grid
            h={{ base: 'auto', md: '300px' }}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={8}
            mx={{ base: 5, lg: 250 }}
            marginBottom={8}
          >
            <GridItem colSpan={{ base: 6, md: 2 }} rowSpan={2} overflow="hidden" position="relative">
              <Image
                src={images[0]}
                alt="Resort Image 1"
                layout="fill"
                objectFit="cover"
              />
            </GridItem>
            <GridItem
              colSpan={{ base: 6, md: 2 }}
              rowSpan={2}
              marginTop={{ base: 0, md: '-20px' }}
              position="relative"
              top={{ base: 0, md: '-20px' }}
              overflow="hidden"
            >
              <Image
                src={images[1]}
                alt="Resort Image 2"
                layout="fill"
                objectFit="cover"
              />
            </GridItem>
            <GridItem
              colSpan={{ base: 6, md: 2 }}
              position="relative"
              top={{ base: 0, md: '150px' }}
              overflow="hidden"
            >
              <Image
                src={images[2]}
                alt="Resort Image 3"
                layout="fill"
                objectFit="cover"
              />
            </GridItem>
          </Grid>
          <Grid
            h={{ base: 'auto', md: '400px' }}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            mx={{ base: 5, lg: 250 }}
          >
            <GridItem colSpan={{ base: 6, md: 2 }} rowSpan={5} overflow="hidden" position="relative">
              <Image
                src={images[3]}
                alt="Resort Image 4"
                layout="fill"
                objectFit="cover"
              />
            </GridItem>
            <GridItem
              colSpan={{ base: 6, md: 4 }}
              rowSpan={1}
              marginBottom={-5}
              position="relative"
              top={{ base: 0, md: '-20px' }}
              overflow="hidden"
            >
              <Image
                src={images[4]}
                alt="Resort Image 5"
                layout="fill"
                objectFit="cover"
              />
            </GridItem>
            <GridItem
              colSpan={{ base: 6, md: 2 }}
              rowSpan={2}
              marginBottom={-10}
              position="relative"
              overflow="hidden"
            >
              <Image
                src={images[5]}
                alt="Resort Image 6"
                layout="fill"
                objectFit="cover"
              />
            </GridItem>
            <GridItem
              colSpan={{ base: 6, md: 2 }}
              rowSpan={2}
              marginBottom={-10}
              position="relative"
              overflow="hidden"
            >
              <Image
                src={images[6]}
                alt="Resort Image 7"
                layout="fill"
                objectFit="cover"
              />
            </GridItem>
          </Grid>
        </Box>
        <Button
          mt={6}
          bg="gray.600"
          color="white"
          height="48px"
          width="140px"
          _hover={{ bg: 'yellow.600' }}
          alignSelf="center"
        >
          {isRTL ? 'اقرأ المزيد' : 'Read More'}
        </Button>
      </Flex>
    </Box>
  );
};

export default ResortLayoutComponent;
