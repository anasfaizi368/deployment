// import { useLanguage } from '@/components/context/LanguageContext';
// import {
//     Button,
//     Image,
//     Card,
//     CardBody,
//     Box,
//     Flex,
//     Text,
//     Heading,
//     IconButton,
//     FlexProps,
// } from '@chakra-ui/react';
// import { useState, useEffect } from 'react';
// import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

// export interface ImageTextComponentData {
//     title_en?: string;
//     title_ar?: string;
//     description_en: string;
//     description_ar: string;
//     isButton?: boolean;
//     isHeading?: boolean;
//     image_url: string;
// }
// interface ImageTextComponentProps extends FlexProps {
//     data: ImageTextComponentData[];
//     color?: any;
// }

// const ImageTextSliderComponent: React.FC<ImageTextComponentProps> = ({
//     data,
//     color,
//     ...rest
// }) => {
//     const [currentIndex, setCurrentIndex] = useState<number>(0);
//     const { language } = useLanguage();
//     const isRTL = language === 'ar';

//     const {
//         title_en,
//         title_ar,
//         description_en,
//         description_ar,
//         isButton,
//         isHeading,
//         image_url,
//     } = data[currentIndex];

//     const splitText = (text: string) => {
//         const words = text.split(' ');
//         const midpoint = Math.floor(words.length / 2);
//         const firstPart = words.slice(0, midpoint).join(' ');
//         const secondPart = words.slice(midpoint).join(' ');
//         return { firstPart, secondPart };
//     };

//     const heading = isRTL ? title_ar : title_en;
//     const text = isRTL ? description_ar : description_en;
//     const { firstPart, secondPart } = splitText(text);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//         }, 5000);

//         return () => clearInterval(intervalId);
//     }, [data.length]);

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? data.length - 1 : prevIndex - 1,
//         );
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     };

//     return (
//         <Flex
//             align="center"
//             justify="space-between"
//             textAlign="start"
//             {...rest}
//             columnGap={20}
//             marginBottom={10}
//             paddingX={60}
//         >
//             <Box position="relative" width={{ base: '100%', lg: '50%' }} overflow="hidden">
//                 {data.map((res, index) => (
//                     <Box
//                         key={res.image_url}
//                         display={currentIndex === index ? 'block' : 'none'}
//                         height={{ base: 350, lg: 390 }}
//                         width="100%"
//                     >
//                         <Image
//                             src={res.image_url}
//                             alt={`Slider Image ${index + 1}`}
//                             objectFit="fill"
//                             height="full"
//                             width="100%"
//                             transform={isRTL ? 'scaleX(-1)' : 'none'}
//                             transition="opacity 1s ease-in-out"
//                         />
//                     </Box>
//                 ))}
//                 <IconButton
//                     aria-label="Previous image"
//                     icon={<FaCaretLeft color={color} size={40} />}
//                     onClick={handlePrev}
//                     position="absolute"
//                     left="10px"
//                     top="50%"
//                     transform="translateY(-50%)"
//                     zIndex={10}
//                     bg="none"
//                     _hover={{ background: 'none', cursor: 'pointer' }}
//                 />
//                 <IconButton
//                     aria-label="Next image"
//                     icon={<FaCaretRight color={color} size={40} />}
//                     onClick={handleNext}
//                     position="absolute"
//                     right="10px"
//                     top="50%"
//                     transform="translateY(-50%)"
//                     zIndex={10}
//                     bg="none"
//                     _hover={{ background: 'none', cursor: 'pointer' }}
//                 />
//             </Box>

//             <Card
//                 width={{ base: '100%', lg: '60%' }}
//                 overflow="hidden"
//                 borderRadius="none"
//                 shadow="none"
//             >
//                 <CardBody
//                     display="flex"
//                     flexDirection="column"
//                     justifyContent="center"
//                     alignItems="start"
//                     height="full"
//                     width="100%"
//                 >
//                     {isHeading && (
//                         <Heading
//                             width="full"
//                             textAlign={isRTL ? 'end' : 'start'}
//                             fontFamily="TrajanPro-Bold"
//                             fontSize={{ base: '22px', lg: '28px' }}
//                             fontWeight={500}
//                             textTransform="uppercase"
//                             color={color ? color : 'yellow.600'}
//                         >
//                             {heading}
//                         </Heading>
//                     )}
//                     <Box color="gray.600" textAlign={isRTL ? 'end' : 'start'}>
//                         <Text
//                             width="full"
//                             fontFamily="Open-Sans-Light"
//                             fontSize={{ base: '20px', lg: '27px' }}
//                             paddingY={2}
//                             noOfLines={7}
//                         >
//                             {firstPart}
//                         </Text>
//                         <Text
//                             fontFamily="Open-Sans-Light"
//                             fontSize={{ base: '20px', lg: '27px' }}
//                             paddingY={2}
//                             noOfLines={7}
//                         >
//                             {secondPart}
//                         </Text>
//                     </Box>
//                     {isButton && (
//                         <Button
//                             mt="4"
//                             bg="gray.600"
//                             color="white"
//                             height="48px"
//                             width="140px"
//                             _hover={{ bg: 'yellow.600' }}
//                             fontFamily="Open-Sans-Light"
//                         >
//                             Read More
//                         </Button>
//                     )}
//                 </CardBody>
//             </Card>
//         </Flex>
//     );
// };

// export default ImageTextSliderComponent;
