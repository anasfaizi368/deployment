import { Box, Stack, Skeleton } from '@chakra-ui/react';
import JournalCardComponent from '../../../shared/components/JournalCardComponent';
import useFetch from '@/utils/api/useFetch';
import { useState, useEffect } from 'react';

const Journal = () => {
  const { data, isLoading, error } = useFetch<any>('/fetch-Journal', 'GET');
  const [cardData, setCardData] = useState<any>({ stories: [], main_heading_en: '', main_heading_ar: '' });

  useEffect(() => {
    if (data) {
      setCardData(data);
    }
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

  return (
    <Box marginBottom={16}>
      {/* <JournalCardComponent
        data={cardData.journals || []}
        heading_en={cardData.main_heading_en || ''}
        heading_ar={cardData.main_heading_ar || ''}
      /> */}
    </Box>
  );
};

export default Journal;
