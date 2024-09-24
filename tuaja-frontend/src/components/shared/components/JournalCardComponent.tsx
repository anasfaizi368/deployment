import { useState } from 'react';
import {
  Button,
  Heading,
  Text,
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '@/components/context/LanguageContext';

interface JournalData {
  published_date_en?: string;
  published_date_ar?: string;
  title_en?: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  image_url: string;
  isButton?: boolean;
}

interface JournalCardComponentProps {
  heading_en: string;
  heading_ar: string;
  bg?: string;
  color?: string;
  data: JournalData[];
  bgColor?: string;
  titleColor?: string;
  boxColor?: string;
  textColor?: string;
  nooflines?: number;
  color_btn: string;
}

const JournalCardComponent: React.FC<JournalCardComponentProps> = ({
  data = [],
  heading_en,
  heading_ar,
  bg,
  color,
  bgColor,
  titleColor,
  boxColor,
  textColor,
  nooflines,
  color_btn,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = useBreakpointValue({ base: 1, md: 3 });
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const handleNext = () => {
    if (data.length === 0) return;
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + (visibleCards || 1)) % data.length;
      return nextIndex;
    });
  };

  const handlePrev = () => {
    if (data.length === 0) return;
    setCurrentIndex((prevIndex) => {
      const prevIndexWithWrap = (prevIndex - (visibleCards || 1) + data.length) % data.length;
      return prevIndexWithWrap;
    });
  };

  const CardsSet =
    data.length > 0
      ? [...data, ...data].slice(currentIndex, currentIndex + (visibleCards || 1))
      : [];

  return (
    <Box
      backgroundImage={bg}
      backgroundSize="cover"
      backgroundPosition="center"
      height={{ base: '500px', md: bg ? 650 : 'auto' }}
      backgroundColor={bgColor}
      zIndex={1}
    >
      <Flex
        flexDir="column"
        marginX={isRTL ? { base: '2px', md: 150 } : { base: '50px', md: 100 }}
        marginBottom={50}
        textAlign={isRTL ? 'right' : 'left'}
        textTransform={'uppercase'}
      >
        <Heading
          size={{ base: 'xl', xl: color ? 'xl' : '3xl' }}
          color={color ? color : titleColor}
          textTransform="uppercase"
          sx={{ fontFamily: 'TrajanPro-Bold' }}
          textAlign={isRTL ? 'right' : color ? 'center' : 'start'}
          paddingTop={bg ? 6 : 6}
        >
          {isRTL ? heading_ar : heading_en}
        </Heading>
      </Flex>

      <Flex align="center" justify="center" gap={{ base: 2, md: 8 }}>
        <IconButton
          aria-label="Previous"
          icon={<FaCaretLeft size={50} />}
          onClick={handlePrev}
          isRound
          size={{ base: 'md', md: 'lg' }}
          mx={4}
          color={color ? color : 'black'}
          bg="none"
          _hover={{ background: 'none', cursor: 'pointer' }}
        />
        <Flex overflow="hidden" justify="center" paddingBottom={10}>
          {CardsSet.map((res, index) => {
            const noText =
              !res.published_date_en &&
              !res.published_date_ar &&
              !res.title_en &&
              !res.title_ar &&
              !res.description_en &&
              !res.description_ar &&
              res.isButton === false;

            return (
              <Box
                key={index}
                w={{ base: '100%', md: 'sm' }}
                mx={{ base: '0px', lg: '20px' }}
                boxShadow={bg ? '' : '0px 30px 20px -10px gray'}
                textAlign={isRTL ? 'right' : 'left'}
              >
                <Box bg={boxColor ? boxColor : '#cd9e61'} height="100%">
                  <Box position="relative" width="100%" height={{ base: '220px', md: bg ? '440px' : '320px' }}>
                    <Image
                      src={res.image_url}
                      alt={'ee'}
                      layout="fill"
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 390px"
                    />
                  </Box>
                  {!noText && (
                    <Box mt="1rem" paddingX={30}>
                      {res.published_date_en || res.published_date_ar ? (
                        <Text
                          fontSize={{ base: 'xs', xl: 'sm' }}
                          color="gray.600"
                          fontWeight={800}
                          paddingBottom={3}
                        >
                          {isRTL
                            ? res.published_date_ar
                            : res.published_date_en}
                        </Text>
                      ) : null}
                      {res.title_en || res.title_ar ? (
                        <Text
                          fontSize={{ base: 'xs', xl: 'md' }}
                          color="gray.600"
                          fontWeight={800}
                          paddingBottom={1}
                          noOfLines={nooflines}
                        >
                          {isRTL ? res.title_ar : res.title_en}
                        </Text>
                      ) : null}
                      {res.description_en || res.description_ar ? (
                        <Text
                          fontSize={{ base: 'xs', xl: 'sm' }}
                          color={textColor ? textColor : 'white'}
                        >
                          {isRTL
                            ? res.description_ar
                            : res.description_en}
                        </Text>
                      ) : null}
                    </Box>
                  )}
                  {res.isButton && (
                    <Button
                      px={8}
                      marginBottom={5}
                      mt="auto"
                      variant="ghost"
                      color={color_btn}
                      _hover={{
                        background: 'none',
                        textDecoration: 'underline',
                      }}
                    >
                      {isRTL ? 'اقرأ المزيد' : 'Read More'}
                    </Button>
                  )}
                </Box>
              </Box>
            );
          })}
        </Flex>
        <IconButton
          aria-label="Next"
          icon={<FaCaretRight size={50} />}
          onClick={handleNext}
          isRound
          size={{ base: 'md', md: 'lg' }}
          mx={4}
          bg="none"
          color={color ? color : 'black'}
          _hover={{ background: 'none', cursor: 'pointer' }}
        />
      </Flex>
    </Box>
  );
};

export default JournalCardComponent;
