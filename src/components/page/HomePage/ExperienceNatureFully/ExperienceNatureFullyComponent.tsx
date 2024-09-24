import { useLanguage } from '@/components/context/LanguageContext';
import useFetch from '@/utils/api/useFetch';
import { Box, Button, Flex, Grid, GridItem, Skeleton, Stack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const ExperienceNatureFullyComponent: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const { data, isLoading, error } = useFetch<any>('/fetch-nature', 'GET');
  const [data1, setData] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Stack>
        <Skeleton height='80px' />
        <Skeleton height='80px' />
        <Skeleton height='80px' />
      </Stack>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const hasData = data1.length > 0 && data1[0]?.image_path?.length >= 7;
  return (
    hasData ?
      <Box
       my={50}
        h={1000}
        w="full"
        bgImage={hasData ? `url(${data1[0].background_img})` : ''}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        transform={isRTL ? 'scaleX(-1)' : 'none'}
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
            {hasData ? (isRTL ? data1[0].heading_ar : data1[0].heading_en) : ''}
          </Text>
          <Text>
            {hasData ? (isRTL ? data1[0].sub_heading_ar : data1[0].sub_heading_en) : ''}
          </Text>
        </Flex>
        <Flex flexDir="column" h={800}>
          <Box>
            <Grid
              h="300px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={8}
              mx={300}
              marginBottom={8}
              transform={isRTL ? 'scaleX(-1)' : 'none'}
            >
              {/* <GridItem colSpan={2} rowSpan={2} bg="tomato" overflow="hidden">
                <Image
                  src={hasData ? data1[0].image_path[0] : ''}
                  alt="Image 1"
                  objectFit='fill'
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem
                colSpan={2}
                rowSpan={2}
                marginTop={'-20px'}
                bg="orange"
                position="relative"
                top="-20px"
                overflow="hidden"
              >
                <Image
                  src={hasData ? data1[0].image_path[1] : ''}
                  alt="Image 2"
                  objectFit='fill'
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem
                colSpan={2}
                bg="yellow"
                position="relative"
                top="150px"
                overflow="hidden"
              >
                <Image
                  src={hasData ? data1[0].image_path[4] : ''}
                  alt="Image 3"
                  objectFit='fill'
                  w="100%"
                  h="100%"
                />
              </GridItem>
            </Grid>
            <Grid
              h="400px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={4}
              mx={300}
              transform={isRTL ? 'scaleX(-1)' : 'none'}
            >
              <GridItem colSpan={2} rowSpan={5} bg="green" overflow="hidden">
                <Image
                  src={hasData ? data1[0].image_path[3] : ''}
                  alt="Image 4"
                  objectFit='fill'
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem
                colSpan={4}
                rowSpan={1}
                marginBottom={-5}
                bg="blue"
                position="relative"
                top="-20px"
                overflow="hidden"
              >
                <Image
                  src={hasData ? data1[0].image_path[2] : ''}
                  alt="Image 5"
                  objectFit='fill'
                  w="100%"
                  h="100%"
                />
              </GridItem>

              <GridItem
                colSpan={2}
                rowSpan={2}
                bg="purple"
                marginBottom={-10}
                overflow="hidden"
              >
                <Image
                  src={hasData ? data1[0].image_path[5] : ''}
                  alt="Image 6"
                  objectFit='fill'
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem
                colSpan={2}
                rowSpan={2}
                bg="white"
                marginBottom={-10}
                overflow="hidden"
              >
                <Image
                  src={hasData ? data1[0].image_path[6] : ''}
                  alt="Image 7"
                  objectFit='fill'
                  w="100%"
                  h="100%"
                />
              </GridItem> */}
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
      </Box> : <Box>no data available</Box>
  );
};

export default ExperienceNatureFullyComponent;
