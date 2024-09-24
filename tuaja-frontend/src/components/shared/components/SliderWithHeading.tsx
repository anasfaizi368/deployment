import { Box, IconButton, Text, Heading, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useLanguage } from '@/components/context/LanguageContext';
import Image from 'next/image';

interface SliderContentProps {
  src: string;
  alt: string;
  rightText: {
    icon: string;
    heading_en: string;
    heading_ar: string;
    text_en: string;
    text_ar: string;
  };
  leftText: {
    icon: string;
    heading_en: string;
    heading_ar: string;
    text_en: string;
    text_ar: string;
  };
  headingTop_en: string;
  headingTop_ar: string;
}

interface ImageSliderProps {
  SliderContent: SliderContentProps[];
}

const SliderWithHeading: React.FC<ImageSliderProps> = ({
  SliderContent = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderContent.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [SliderContent.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SliderContent.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderContent.length);
  };

  return (
    <Box position="relative" width="100%" height="90vh" overflow="hidden">
      {SliderContent.map((slide, index) => {
        return (
          <Box
            key={index}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            opacity={currentIndex === index ? 1 : 0}
            transition="opacity 1s ease-in-out"
            zIndex={currentIndex === index ? 1 : 0}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              style={{ filter: 'brightness(50%)' }}
            />
            <Box
              position="absolute"
              top="5%"
              left="50%"
              transform="translateX(-50%)"
              color="white"
              textAlign="center"
              zIndex={2}
            >
              <Text
                fontSize={{ base: '24px', md: '32px', lg: '40px' }}
                fontWeight={500}
                textTransform="uppercase"
                p={2}
                borderRadius="md"
                fontFamily={'Open-Sans-Light'}
              >
                {isRTL ? slide.headingTop_ar : slide.headingTop_en}
              </Text>
            </Box>
            <Flex
              position="absolute"
              top="50%"
              left="10%"
              right="10%"
              transform="translateY(-50%)"
              color="white"
              justifyContent="space-between"
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
              fontWeight={500}
              zIndex={2}
              flexDir={isRTL ? 'row-reverse' : 'row'}
            >
              <Box w={{ base: '45%', md: '40%' }} p={4} borderRadius="md" >
                <Image
                  src={slide.leftText.icon}
                  alt={`left-icon-${index}`}
                  width={50}
                  height={50}

                />
                <Heading
                  size="lg"
                  textTransform="uppercase"
                  mb={2}
                  fontSize={{ base: '18px', md: '22px', lg: '26px' }}
                  fontFamily={'TrajanPro-Bold'}
                  mt={4}
                >
                  {isRTL ? slide.leftText.heading_ar : slide.leftText.heading_en}
                </Heading>
                <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} noOfLines={5} fontFamily={'Open-Sans-Light'}>
                  {isRTL ? slide.leftText.text_ar : slide.leftText.text_en}
                </Text>
              </Box>
              <Box w={{ base: '45%', md: '40%' }} p={4} borderRadius="md">
                <Image
                  src={slide.rightText.icon}
                  alt={`right-icon-${index}`}
                  width={50}
                  height={50}

                />
                <Heading
                  size="lg"
                  textTransform="uppercase"
                  mb={2}
                  fontSize={{ base: '18px', md: '22px', lg: '26px' }}
                  fontFamily={'TrajanPro-Bold'}
                  mt={4}
                >
                  {isRTL ? slide.rightText.heading_ar : slide.rightText.heading_en}
                </Heading>
                <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} noOfLines={5} fontFamily={'Open-Sans-Light'}>
                  {isRTL ? slide.rightText.text_ar : slide.rightText.text_en}
                </Text>
              </Box>
            </Flex>
          </Box>
        );
      })}

      <IconButton
        aria-label="Previous image"
        icon={<AiFillCaretLeft color="white" size={60} />}
        onClick={handlePrev}
        position="absolute"
        left={{ base: "-5px", lg: "20px" }}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="none"
        _hover={{ background: 'none', cursor: 'pointer' }}
      />
      <IconButton
        aria-label="Next image"
        icon={<AiFillCaretRight color="white" size={60} />}
        onClick={handleNext}
        position="absolute"
        right={{ base: "-5px", lg: "20px" }}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        bg="none"
        _hover={{ background: 'none', cursor: 'pointer' }}
      />
    </Box>
  );
};

export default SliderWithHeading;
