import { useLanguage } from '@/components/context/LanguageContext';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import Image from 'next/image';

interface BackgroundSliderData {
  id?: number;
  image_url?: string;
  alt?: string;
  text1_en: string;
  text1_ar: string;
  text2_en: string;
  text2_ar: string;
  isVideo?: boolean;
  video_url?: string;
  order?: number;
  created_at?: string;
  updated_at?: string;
}
interface BackgroundSliderProps {
  data: BackgroundSliderData[];
}

const ImageSlider: React.FC<BackgroundSliderProps> = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, data[currentIndex]?.isVideo ? 30000 : 5000);

    return () => clearInterval(intervalId);
  }, [data.length, currentIndex, data]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <Box position="relative" width="100%" height={{ base: '40vh', xl: '66vh' }} overflow="hidden">
      {data.map((res, index) => (
        <Box key={res.id} display={currentIndex === index ? 'block' : 'none'}
          opacity={currentIndex === index ? 1 : 0}
          transition="opacity 3s ease-in-out"
        >
          {res.isVideo ? (
            <video
              autoPlay
              muted
              loop
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source src={res.video_url} type="video/mp4" />
            </video>
          ) : (
              <Box position="absolute" top="0" left="0" width="100%" height="100%">
                {res.image_url &&
                  < Image
                    src={res.image_url}
                  alt={res.alt || 'Background image'}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                  style={{ filter: 'brightness(50%)' }}
              />
                }
              </Box>
          )}
          {!res.isVideo && (
            <Box
              zIndex={10}
              position="absolute"
              left={isRTL ? 'auto' : '10%'}
              right={isRTL ? '10%' : 'auto'}
              top="50%"
              transform="translateY(-50%)"
              textAlign={isRTL ? { base: 'left', lg: 'right' } : { base: 'center', lg: 'left' }}
              color="white"
              fontSize={{ base: '20px', lg: '50px' }}
              fontWeight={700}
              textTransform="uppercase"
            >
              <Text sx={{ fontFamily: 'TrajanPro-Bold' }}>
                {isRTL ? res.text1_ar : res.text1_en}
              </Text>
              <Text sx={{ fontFamily: 'TrajanPro-Bold' }}>
                {isRTL ? res.text2_ar : res.text2_en}
              </Text>
            </Box>
          )}
        </Box>
      ))}
      <IconButton
        aria-label="Previous image"
        icon={<MdOutlineKeyboardArrowLeft color="white" size={80} />}
        onClick={handlePrev}
        position="absolute"
        left="20px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="none"
        _hover={{ background: 'none', cursor: 'pointer' }}
      />
      <IconButton
        aria-label="Next image"
        icon={<MdOutlineKeyboardArrowRight color="white" size={80} />}
        onClick={handleNext}
        position="absolute"
        right="20px"
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="none"
        _hover={{ background: 'none', cursor: 'pointer' }}
      />
    </Box>
  );
};

export default ImageSlider;
