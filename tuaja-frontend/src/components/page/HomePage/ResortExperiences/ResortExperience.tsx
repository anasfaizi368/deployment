import { Box, Skeleton, Stack } from '@chakra-ui/react';
import useFetch from '@/utils/api/useFetch';
import { useEffect, useState } from 'react';
// import ResortExperiences from './ResortExperiences';
import ResortExperienceFooterComponent from '@/components/shared/components/ResortExperienceFooterComponent';

interface Card {
  id?: number;
  text_en: string;
  text_ar: string;
  image_url: string;
  is_button: boolean;
  order?: number;
}

interface ResortExperienceData {
  main_heading_en: string;
  main_heading_ar: string;
  logo_url: string;
  cards: Card[];
}

const ResortExperience: React.FC = () => {


  const { data, isLoading, error } = useFetch<any>('/fetch-Resorts-Experiences', 'GET');
  const [CardData, setCardData] = useState<any>([]);

  useEffect(() => {
    setCardData(data);
  }, [data]);

  if (isLoading) {
    return (
      <Stack>
        <Skeleton height="80px" />
        <Skeleton height="80px" />
        <Skeleton height="80px" />
      </Stack>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!CardData) {
    return null;
  }
  return (
    [data].length > 0 ? <Box width="100%" minHeight="100vh" sx={{ fontFamily: 'OpenSans-Italic-Variable' }}>
      {/* {CardData && <ResortExperiences data={CardData} />} */}
      <Box px={24}>
        <ResortExperienceFooterComponent />
      </Box>
    </Box> : <Box>no data available</Box>
  );
};

export default ResortExperience;
