import { useLanguage } from '@/components/context/LanguageContext';
import { Box, Flex, FlexProps, Heading, Text } from '@chakra-ui/react';

interface CenterHeadingTextData {
  heading_en: string;
  heading_ar: string;
  description_en?: string;
  description_ar?: string;
}

interface CenterHeadingTextProps extends FlexProps {
  data: CenterHeadingTextData[];
}

const CenterHeadingText: React.FC<CenterHeadingTextProps> = ({ data, ...rest }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const { heading_en, heading_ar, description_en, description_ar } = data[0];
  const heading = isRTL ? heading_ar : heading_en;
  const description = isRTL ? description_ar : description_en;

  let firstPart = '';
  let secondPart = '';
  if (typeof description === 'string') {
    const splitIndex = 28;
    firstPart = description.slice(0, splitIndex);
    secondPart = description.slice(splitIndex);
  }

  return (
    <Flex
      flexDir="column"
      align={{ base: 'start', lg: 'center' }}

      px={{ base: "5%", lg: "15%" }}

      textAlign={isRTL ? { base: 'right', lg: 'center' } : { base: 'left', lg: 'center' }}
    >
      <Heading
        size={{ base: "md", lg: "lg" }}
        fontWeight={700}
        textTransform="capitalize"
        color='yellow.600'
        {...rest}
        fontFamily="TrajanPro-Bold"

      >
        {heading}
      </Heading>
      <Box fontSize={{ base: "18px", lg: "21px" }} color="gray.600">
        <Text paddingY={2} noOfLines={1}>
          {firstPart}
        </Text>
        <Text paddingTop={4} noOfLines={7}>
          {secondPart}
        </Text>
      </Box>
    </Flex>
  );
};

export default CenterHeadingText;
