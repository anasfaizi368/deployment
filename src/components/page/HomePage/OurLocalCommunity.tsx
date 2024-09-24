import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, Box, Flex, Text, Skeleton, Stack } from '@chakra-ui/react';
import { useLanguage } from '@/components/context/LanguageContext';
import useFetch from '@/utils/api/useFetch';

const OurLocalCommunity: React.FC = () => {
  const { data, isLoading, error } = useFetch<any>('/fetch-community', 'GET');
  const [OurCommunityData, setOurCommunityData] = useState<any>([]);
  const { language } = useLanguage();
  useEffect(() => {
    if (data && data.Community) {
      setOurCommunityData(data.Community)
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
  if (OurCommunityData.length === 0) {
    return <div>No data available</div>;
  }

  const { title_en, title_ar, description_en, description_ar, image_url, isbutton } = OurCommunityData[0];
  const isRTL = language === 'ar';
  const title = isRTL ? title_ar : title_en;
  const description = isRTL ? description_ar : description_en;

  return (
    [data].length > 0 ? <Flex
      align="center"
      justify="space-between"
      mx={100}
      gap={35}
      flexDirection={isRTL ? 'row-reverse' : 'row'}
      my={20}
    >
      <Box
        width="full"
        overflow="hidden"
        transform={isRTL ? 'scaleX(-1)' : 'none'}
        height={{ base: 500, md: 800 }}
      >
        {/* <Image
          src={image_url}
          alt={'our local community'}
          objectFit="cover"
          height="full"
          width="90%"
        /> */}
      </Box>
      <Card
        w="full"
        overflow="hidden"
        height={{ base: 500, md: 700 }}
        borderRadius="none"
        shadow="none"
        textAlign={isRTL ? 'right' : 'start'}
      >
        <CardBody
          color="white"
          p="4"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          zIndex={2}
        >
          <Text fontSize="80px" textTransform='uppercase' fontWeight="500px" color="yellow.600" mb={2}>
            {title}
          </Text>
          <Text mb={4} fontSize="x-large" color="gray.600">
            {description}
          </Text>
          {isbutton && (
            <Button
              mt="4"
              bg="gray.600"
              color="white"
              height="48px"
              width="140px"
              _hover={{ bg: 'yellow.600' }}
            >
              {isRTL ? 'اقرأ المزيد' : 'Read More'}
            </Button>
          )}
        </CardBody>
      </Card>
    </Flex> : <Box>no data available</Box>
  );
};

export default OurLocalCommunity;
