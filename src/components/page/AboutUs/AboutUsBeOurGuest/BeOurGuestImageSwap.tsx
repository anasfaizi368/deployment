import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';


interface BackgroundSliderData {
  src: string;
  alt: string;
}
interface BackgroundSliderProps {
  data: BackgroundSliderData[];
}
const BeOurGuestImageSwap: React.FC<BackgroundSliderProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [data.length]);
  return (
    <Box
      position="relative"
      width="100%"
      height="80vh"
      overflow="hidden"
      my={10}
    >
      {/* {data.map((image, index) => (
        // <Image
        //   key={index}
        //   src={image.src}
        //   alt={`Background image ${image.alt}`}
        //   position="absolute"
        //   top="0"
        //   left="0"
        //   width="100%"
        //   height="100%"
        //   objectFit="cover"
        //   opacity={currentIndex === index ? 1 : 0}
        //   transition="opacity 1s ease-in-out"
        //   filter="brightness(50%)"
        // />
      ))} */}
    </Box>
  );
};

export default BeOurGuestImageSwap;
