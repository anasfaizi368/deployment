import { useLanguage } from '@/components/context/LanguageContext';
import {
  Button,
  Card,
  CardBody,
  Box,
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';
import Image from 'next/image'

const AboutUsStoryTuaja: React.FC = () => {
  const data = [
    {
      title_en: 'The Story of Tuaja',
      title_ar: 'قصتنا',
      description_en: `Let us introduce you to a long-forgotten tale about Tuaja, an old woman who was passionate about the veiled wonders that nature encapsulated, from observing things as little as date seeds all the way to mindful, spiritual exploration. One day, she was visiting Al Madinah and found little date seeds. Keeping their sentiment in mind, she threaded them into a roasry. Over time, the dates fell from the rosary to the ground, from which thousands of palm trees grew, producing the most delicious dates.
We draw inspiration from Tuaja's story to create new experiences on the land of the kingdom, inviting our people and the world to share a unique experience that embodies the generous spirit of the kingdom's nature. `,
      description_ar: `ذات مرة زارت المرأة العجوز الشغوفة بعجائب الطبيعة المدينة المنورة وجمعت نوى التمر لتصنع منها مسبحة. وقد تساقط التمر من هذه المسبحة، ومع مرور الوقت نمت آلاف أشجار النخيل من هذه البذور لتنتج أشهى التمور. نستلهم قصة تواجا لخلق تجارب جديدة على أرض المملكة، تجسد طبيعة وطننا المعطاء`,
      description1_en:
        'The old woman who was passionate about the wonders of nature once visited Al Madinah and collected date seeds to make a rosary.The dates fell from this rosary, and over time, thousands of palm trees grew from these seeds, producing the most delicious dates.We draw inspiration from Tuaja’s story to create new experiences on the land of the Kingdom, embodying the generous nature of our homeland',
      description1_ar: `ذات مرة زارت المرأة العجوز الشغوفة بعجائب الطبيعة المدينة المنورة وجمعت نوى التمر لتصنع منها مسبحة. وقد تساقط التمر من هذه المسبحة، ومع مرور الوقت نمت آلاف أشجار النخيل من هذه البذور لتنتج أشهى التمور. نستلهم قصة تواجا لخلق تجارب جديدة على أرض المملكة، تجسد طبيعة وطننا المعطاء`,
      isButton: false,
      isHeading: true,
      image_url: '/111.png',
    },
  ];
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const heading = isRTL ? data[0].title_ar : data[0].title_en;
  const text1 = isRTL ? data[0].description_ar : data[0].description_en;
  const text2 = isRTL ? data[0].description1_ar : data[0].description1_en;
  const highlightedText = text1.substring(0, 76);
  const remainingText = text1.substring(200);
  return (
    <Flex
      align="start"
      justify="space-between"
      flexDirection={{ base: 'column', lg: isRTL ? 'row' : 'row-reverse' }}
      textAlign="start"
      columnGap={40}
      marginBottom={10}
      paddingX={{ base: 10, lg: 100 }}
    >
      <Flex
        width={{ base: '100%', lg: '600px' }}
        height={{ base: '350px', lg: '600px' }}
        overflow="hidden"
        position="relative"
      >
        <Image
          src={data[0].image_url}
          alt="image 1"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Flex>
      <Card
        width={{ base: '100%', lg: '65%' }}
        overflow="hidden"
        borderRadius="none"
        shadow="none"
      >
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent={'end'}
          height="full"
          width={'full'}
        >
          <Heading
            textAlign={isRTL ? 'end' : 'start'}
            sx={{
              fontFamily: 'TrajanPro-Bold',
              textTransform: 'uppercase',
              color: '#c8985a',
            }}
            fontSize="30px"
            fontWeight={500}
            color="yellow.600"
          >
            {heading}
          </Heading>

          <Box
            color={'gray.600'}
            maxWidth={'100%'}
            textAlign={isRTL ? 'end' : 'start'}
          >
            <Text
              sx={{ fontFamily: 'Open-Sans-Light' }}
              fontSize={{ base: '22px', md: "21px" }}
              paddingY={2}
              noOfLines={7}
              fontFamily={'Open-Sans-Light'}
            >
              <Text as="span" fontWeight="bold" color="gray.700" >
                {highlightedText}
              </Text>
              {remainingText}
            </Text>
            <Text
              sx={{ fontFamily: 'Open-Sans-Light' }}
              fontSize={{ base: '22px', md: "21px" }}
              paddingY={2}
              noOfLines={7}
              fontFamily={'Open-Sans-Light'}
            >
              {text2}
            </Text>
          </Box>

          {/* <Button
            mt="4"
            bg="gray.600"
            color="white"
            height="48px"
            width="140px"
            _hover={{ bg: 'yellow.600' }}
          >
            Read More
          </Button> */}
        </CardBody>
      </Card>
    </Flex>
  );
};

export default AboutUsStoryTuaja;
