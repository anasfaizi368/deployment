import { useEffect, useState } from 'react';
import useFetch from '@/utils/api/useFetch';
import ImageSlider from '../../../shared/components/ImageSlider';
import { Box, Skeleton, Stack } from '@chakra-ui/react';

interface SliderItem {
  id: number;
  image_path?: string;
  image_url: string;
  alt: string;
  text1_en: string;
  text1_ar: string;
  text2_en: string;
  text2_ar: string;
  order?: number;
  created_at?: string;
  updated_at?: string;
}

interface ApiResponse {
  success: boolean;
  banner: SliderItem[];
}

const ImageHeader: React.FC = () => {
  const { data, isLoading, error } = useFetch<ApiResponse>('/fetch-banner', 'GET');
  const [sliderData, setSliderData] = useState<SliderItem[]>([]);

  useEffect(() => {
    if (data && data.success) {
      setSliderData(data.banner);
    } else {
      setSliderData([]);
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
  if (sliderData.length === 0) {
    return null;
  }
  console.log(data, 'ssss', sliderData)
  return data?.banner && data.banner.length > 1 ? <ImageSlider data={sliderData} /> : <Box>no data available</Box>;

};

export default ImageHeader;
