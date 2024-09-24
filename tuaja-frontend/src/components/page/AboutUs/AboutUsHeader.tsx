import ImageHeaderComponent from '@/components/shared/components/ImageHeaderComponent';
import useFetch from '@/utils/api/useFetch';
import { Stack, Skeleton } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

interface ImageData {
  bgImage: {
    src: string;
    alt: string;
  };
  logo?: {
    src: string;
    alt: string;
  };
  heading_en?: string;
  heading_ar?: string;
  text_en?: string;
  text_ar?: string;
  isButton?: boolean;
  buttonText_en?: string;
  buttonText_ar?: string;
}


const AboutUsHeader: React.FC = () => {
  const { data, isLoading, error } = useFetch<any>('/about-banner-fetch', 'GET');
  const [HeaderData, setHeaderData] = useState<any>([]);
  useEffect(() => {
    if (data && data.data) {
      setHeaderData(data.data)
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
  if (HeaderData.length === 0) {
    return <div>No data available</div>;
  }

  const transformedData = HeaderData.map((item: any) => ({
    bgImage: {
      src: item.image_url,
      alt: item.text1_en || 'image'
    },
    heading_en: item.text1_en,
    heading_ar: item.text1_ar
  }));
  return <ImageHeaderComponent data={transformedData} />;
};

export default AboutUsHeader;
