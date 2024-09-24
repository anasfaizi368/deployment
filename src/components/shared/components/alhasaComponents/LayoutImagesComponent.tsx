// import { Box, Heading, Image, Grid, GridItem, Text } from '@chakra-ui/react';
// import { useLanguage } from '@/components/context/LanguageContext';

// interface ImageGridProps {
//     images: { src: string; alt: string }[];
//     heading_en: string;
//     heading_ar: string;
//     text_en: string;
//     text_ar: string;
//     color?: string;
//     bg_Image?: string;
// }

// const LayoutImagesComponent: React.FC<ImageGridProps> = ({
//     images,
//     heading_en,
//     heading_ar,
//     text_en,
//     text_ar,
//     color = "#6a593d",
//     bg_Image
// }) => {
//     const { language } = useLanguage();
//     const isRTL = language === 'ar';
//     const heading = isRTL ? heading_ar : heading_en;
//     const text = isRTL ? text_ar : text_en;

//     return (
//         <Box
//             bgImage={bg_Image}
//             backgroundSize="cover"
//             backgroundRepeat="no-repeat"
//             backgroundPosition="center"
//         >
//             <Box px={[4, 8, 16, 40]} py={[10, 20]} mb={20}>
//                 <Box textAlign="center" mb={[4, 6, 8]}>
//                     <Heading
//                         as="h2"
//                         fontSize={['1.8rem', '2rem', '2.2rem']}
//                         fontWeight="bold"
//                         color={color}
//                         fontFamily="TrajanPro-Bold"
//                         mb={[2, 4]}
//                         textAlign="center"
//                     >
//                         {heading}
//                     </Heading>
//                     <Text
//                         fontSize={['1.2rem', '1.4rem']}
//                         color={'white'}
//                         mb={[2, 4]}
//                         fontFamily="Open-Sans-Light"
//                     >
//                         {text}
//                     </Text>
//                 </Box>
//                 <Grid
//                     templateColumns={['1fr', '1fr', 'repeat(3, 1fr)']}
//                     gap={[2, 4]}
//                 >
//                     <GridItem colSpan={[1, 1, 1]}>
//                         <Image
//                             src={images[0].src}
//                             alt={images[0].alt}
//                             objectFit="cover"
//                             w="100%"
//                             h={['200px', '250px', '380px']}
//                             mb={[2, 4]}
//                         />
//                         <Image
//                             src={images[1].src}
//                             alt={images[1].alt}
//                             objectFit="cover"
//                             w="100%"
//                             h={['200px', '250px', '380px']}
//                         />
//                     </GridItem>
//                     <GridItem colSpan={1}>
//                         <Image
//                             src={images[2].src}
//                             alt={images[2].alt}
//                             objectFit="cover"
//                             w="100%"
//                             h={['400px', '500px', '780px']}
//                         />
//                     </GridItem>
//                     <GridItem colSpan={[1, 1, 1]}>
//                         <Grid templateColumns="repeat(2, 1fr)" gap={[2, 4]}>
//                             <GridItem colSpan={2}>
//                                 <Image
//                                     src={images[3].src}
//                                     alt={images[3].alt}
//                                     objectFit="cover"
//                                     w="100%"
//                                     h={['200px', '250px', '380px']}
//                                 />
//                             </GridItem>
//                             <Image
//                                 src={images[4].src}
//                                 alt={images[4].alt}
//                                 objectFit="cover"
//                                 w="100%"
//                                 h={['200px', '250px', '380px']}
//                             />
//                             <Image
//                                 src={images[5].src}
//                                 alt={images[5].alt}
//                                 objectFit="cover"
//                                 w="100%"
//                                 h={['200px', '250px', '380px']}
//                             />
//                         </Grid>
//                     </GridItem>

//                 </Grid>
//             </Box>
//         </Box>
//     );
// };

// export default LayoutImagesComponent;
