import OurStoryComponent from '@/components/shared/components/OurStoryComponent';
import useFetch from '@/utils/api/useFetch';
import { Stack, Skeleton, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';


const OurStory: React.FC = () => {
  const { data, isLoading, error, refetch } = useFetch<any>('/fetch-section-store', 'GET');
  const [OurStoryData, setOurStoryData] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setOurStoryData(data.stories)
    }
    return () => clearInterval(data);
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
  if (OurStoryData.length === 0) {
    return <div>No data available</div>;
  }
  const { title_en, title_ar, description_en, description_ar, additional_text_en, additional_text_ar, image_url, } = OurStoryData[0]
  return (
    <OurStoryComponent
      heading_en={title_en}
      heading_ar={title_ar}
      text_en={description_en}
      text_ar={description_ar}
      buttonText="Read More"
      imageSrc={image_url}
      alt="Our Story Image"
      isButton={true}
      text1_en={additional_text_en}
      text1_ar={additional_text_ar}
      fontSize='70px'
    />
  );
};

export default OurStory;