import React from 'react';
import { useLanguage } from '@/components/context/LanguageContext';
import { Button, Card, CardBody, Box, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';

interface OurStoryProps {
    heading_en: string;
    heading_ar: string;
    text_en: string;
    text_ar: string;
    text1_en: string;
    text1_ar: string;
    buttonText?: string;
    imageSrc?: string;
    alt?: string;
    isButton: boolean;
    fontSize?: string;
}

const OurStoryComponent: React.FC<OurStoryProps> = ({ heading_en, heading_ar, text_en, text_ar, text1_en, text1_ar, buttonText, imageSrc, alt, isButton, fontSize }) => {
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const heading = isRTL ? heading_ar : heading_en;
    const text = isRTL ? text_ar : text_en;
    const text1 = isRTL ? text1_ar : text1_en;

    return (
        <Box marginTop={50}>
            <Card
                w="full"
                position="relative"
                overflow="hidden"
                height={{ base: "auto", md: 600 }}
                borderRadius="none"
                pb={2}
            >
                {imageSrc && alt && <Image
                    src={imageSrc}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    style={{
                        zIndex: 1,
                        transform: isRTL ? 'scaleX(-1)' : 'none',
                    }}
                />}
                <CardBody
                    color="white"
                    position="relative"
                    p="4"
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="flex-start"
                    height="100%"
                    zIndex={2}
                    width={'full'}
                    px={{ base: 10, md: 40 }}
                    alignItems={isRTL ? 'flex-end' : 'flex-start'}
                >
                    <Heading paddingTop={7} fontWeight={300} fontSize={{base:"30px" , lg:"70px"}} textTransform='uppercase' color="#c8985a" sx={{ fontFamily: 'TrajanPro-Bold' }}>
                        {heading}
                    </Heading>
                    <Box width={{ base: '100%', md: '42%' }} textAlign={isRTL ? 'end' : 'start'} fontSize={{ base: 'sm', md: 'md', lg: isRTL ? 'x-large' : '20px' }}>
                        <Text paddingY={7} noOfLines={3} sx={{ fontFamily: 'OpenSans-Italic-Variable' }}>
                            {text}
                        </Text>
                        <Text paddingY={7} noOfLines={4} sx={{ fontFamily: 'OpenSans-Italic-Variable' }}>
                            {text1}
                        </Text>
                    </Box>
                    {isButton && <Button
                        bg="#c8985a"
                        marginY={7}
                        color="white"
                        width={{base: "100px" ,lg:'140px'}}
                        _hover={{ bg: 'yellow.600' }}
                    >
                        {buttonText}
                    </Button>}
                </CardBody>
            </Card>
        </Box>
    );
};

export default OurStoryComponent;
