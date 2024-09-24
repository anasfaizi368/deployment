// import { useLanguage } from '@/components/context/LanguageContext';
// import { Box, Button, Flex, Grid, GridItem, Image, Skeleton, Stack, Text } from '@chakra-ui/react';

// const ExperienceNatureFullyComponent: React.FC = () => {
//     const { language } = useLanguage();
//     const isRTL = language === 'ar';

//     const dummyData = {
//         heading_en: "Experience Nature Fully",
//         heading_ar: "تجربة الطبيعة بالكامل",
//         sub_heading_en: "Heartfully",
//         sub_heading_ar: "احتضن جمال الطبيعة",
//         background_img: '/rosegold.svg',
//         image_path: [
//             '/_CED4266-1.jpg',
//             '/_CED4436-1.jpg',
//             '/_CED3586-1.jpg',
//             '/_CED2437-1.jpg',
//             '/_CED4448-1.jpg',
//             '/_CED3501-2.jpg',
//             '/_CED3148-1.jpg'
//         ]
//     };
//     return (
//         <Box my={50}
//             h={1000}
//             w="full"
//             bgImage={dummyData.background_img}
//             bgSize="cover"
//             bgPosition="center"
//             bgRepeat="no-repeat"
//             transform={isRTL ? 'scaleX(-1)' : 'none'}
//         >
//             <Flex
//                 color="gray.600"
//                 flexDir="column"
//                 fontSize={{ base: 10, sm: 20, md: 30, xl: 50 }}
//                 fontWeight={600}
//                 ml={isRTL ? 0 : 200}
//                 mr={isRTL ? 200 : 0}
//                 textAlign={isRTL ? 'right' : 'left'}
//                 textTransform={'uppercase'}
//                 zIndex={99999}
//             >
//                 <Text>
//                     {isRTL ? dummyData.heading_ar : dummyData.heading_en}
//                 </Text>
//                 <Text>
//                     {isRTL ? dummyData.sub_heading_ar : dummyData.sub_heading_en}
//                 </Text>
//             </Flex>
//             <Flex flexDir="column" h={800}>
//                 <Box>
//                     <Grid
//                         h="300px"
//                         templateRows="repeat(2, 1fr)"
//                         templateColumns="repeat(6, 1fr)"
//                         gap={8}
//                         mx={300}
//                         marginBottom={8}
//                         transform={isRTL ? 'scaleX(-1)' : 'none'}
//                     >
//                         <GridItem colSpan={2} rowSpan={2} bg="tomato" overflow="hidden">
//                             <Image
//                                 src={dummyData.image_path[0]}
//                                 alt="Image 1"
//                                 objectFit='fill'
//                                 w="100%"
//                                 h="100%"
//                             />
//                         </GridItem>
//                         <GridItem
//                             colSpan={2}
//                             rowSpan={2}
//                             marginTop={'-20px'}
//                             bg="orange"
//                             position="relative"
//                             top="-20px"
//                             overflow="hidden"
//                         >
//                             <Image
//                                 src={dummyData.image_path[1]}
//                                 alt="Image 2"
//                                 objectFit='fill'
//                                 w="100%"
//                                 h="100%"
//                             />
//                         </GridItem>
//                         <GridItem
//                             colSpan={2}
//                             bg="yellow"
//                             position="relative"
//                             top="150px"
//                             overflow="hidden"
//                         >
//                             <Image
//                                 src={dummyData.image_path[2]}
//                                 alt="Image 3"
//                                 objectFit='fill'
//                                 w="100%"
//                                 h="100%"
//                             />
//                         </GridItem>
//                     </Grid>
//                     <Grid
//                         h="400px"
//                         templateRows="repeat(2, 1fr)"
//                         templateColumns="repeat(6, 1fr)"
//                         gap={4}
//                         mx={300}
//                         transform={isRTL ? 'scaleX(-1)' : 'none'}
//                     >
//                         <GridItem colSpan={2} rowSpan={5} bg="green" overflow="hidden">
//                             <Image
//                                 src={dummyData.image_path[3]}
//                                 alt="Image 4"
//                                 objectFit='fill'
//                                 w="100%"
//                                 h="100%"
//                             />
//                         </GridItem>
//                         <GridItem
//                             colSpan={4}
//                             rowSpan={1}
//                             marginBottom={-5}
//                             bg="blue"
//                             position="relative"
//                             top="-20px"
//                             overflow="hidden"
//                         >
//                             <Image
//                                 src={dummyData.image_path[4]}
//                                 alt="Image 5"
//                                 objectFit='fill'
//                                 w="100%"
//                                 h="100%"
//                             />
//                         </GridItem>

//                         <GridItem
//                             colSpan={2}
//                             rowSpan={2}
//                             bg="purple"
//                             marginBottom={-10}
//                             overflow="hidden"
//                         >
//                             <Image
//                                 src={dummyData.image_path[5]}
//                                 alt="Image 6"
//                                 objectFit='fill'
//                                 w="100%"
//                                 h="100%"
//                             />
//                         </GridItem>
//                         <GridItem
//                             colSpan={2}
//                             rowSpan={2}
//                             bg="white"
//                             marginBottom={-10}
//                             overflow="hidden"
//                         >
//                             <Image
//                                 src={dummyData.image_path[6]}
//                                 alt="Image 7"
//                                 objectFit='fill'
//                                 w="100%"
//                                 h="100%"
//                             />
//                         </GridItem>
//                     </Grid>
//                 </Box>
//                 <Button
//                     mt={6}
//                     bg="gray.600"
//                     color="white"
//                     height="48px"
//                     width="140px"
//                     _hover={{ bg: 'yellow.600' }}
//                     alignSelf="center"
//                 >
//                     {isRTL ? 'اقرأ المزيد' : 'Read More'}
//                 </Button>
//             </Flex>
//         </Box>
//     );
// };

// export default ExperienceNatureFullyComponent;
