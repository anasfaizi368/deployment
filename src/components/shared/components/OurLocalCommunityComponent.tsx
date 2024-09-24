import React, { useState } from 'react';
import { Button, Card, CardBody, Box, Flex, Text } from '@chakra-ui/react';
import { useLanguage } from '@/components/context/LanguageContext';
import Image from 'next/image';

const OurLocalCommunity: React.FC = () => {
    const dummyData = [
        {
            title_en: 'Our Local Community',
            title_ar: 'مجتمعنا باللغة العربية',
            description_en: `amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et.`,
            description_ar: 'هذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية.ذا وصف لمجتمعنا المحلي باللغة العربية. ',
            image_url: '/Girl.png',
            isbutton: true,
        },
    ];

    const [OurCommunityData] = useState(dummyData);
    const { language } = useLanguage();
    const isRTL = language === 'ar';

    const { title_en, title_ar, description_en, description_ar, image_url, isbutton } = OurCommunityData[0];
    const title = isRTL ? title_ar : title_en;
    const description = isRTL ? description_ar : description_en;

    return (
        <Flex
            align="center"
            justify="space-between"
            flexDir="column"
            mx={{ base: "0px", lg: "100px" }}
            gap={35}
            flexDirection={isRTL ? 'row-reverse' : {base:'column' ,lg:'row'}}
            my={{base:"0px" , lg:"0px"}}
            paddingBottom={{base:"0px" ,lg:"80px"}}

        >
            <Box
                overflow="hidden"
                position="relative"
                height={{ base: 500, md: 900 }}
                width={{ base: "100%", lg: "90%" }}
            >
                <Image
                    src={image_url}
                    alt="our local community"
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
            <Card
                w="full"
                overflow="hidden"
                height={{ base: 500, md: 700 }}
                borderRadius="none"
                shadow="none"
                textAlign={isRTL ? 'right' : 'start'}
            >
                <CardBody
                    color="white"
                    p="4"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    zIndex={2}

                >
                    <Text marginTop={{base:"10px" , lg:"250px"  }}fontSize={{base:"25px" , lg:"50px"}} textTransform="uppercase" fontWeight="600" color="#c8985a" mb={2} fontFamily="TrajanPro-Bold">
                        {title}
                    </Text>
                    <Text mb={0} fontSize={{base:"18px" , lg:"20px"}} color="gray.600" fontFamily='OpenSans-Italic-Variable'>
                        {description}
                    </Text>
                    {isbutton && (
                        <Button
                            mt="4"
                            bg="gray.600"
                            color="white"
                            height="48px"
                            width="140px"
                            _hover={{ bg: 'yellow.600' }}
                            alignSelf={isRTL ? 'end' : 'start'}
                        >
                            {isRTL ? 'اقرأ المزيد' : 'Read More'}
                        </Button>
                    )}
                </CardBody>
            </Card>
        </Flex>
    )
};

export default OurLocalCommunity;
