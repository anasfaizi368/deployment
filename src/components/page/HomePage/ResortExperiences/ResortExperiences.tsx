// import { useLanguage } from '@/components/context/LanguageContext';
// import {
//   Card,
//   Image,
//   CardBody,
//   Button,
//   Text,
//   SimpleGrid,
//   Heading,
//   Box,
//   Flex,
// } from '@chakra-ui/react';

// interface ResortExperienceCardProps {
//   data: {
//     main_heading_en: string;
//     main_heading_ar: string;
//     logo_url: string;
//     cards: {
//       text_en: string;
//       text_ar: string;
//       image_url: string;
//       is_button: boolean;
//       order: number;
//     }[];
//   };
// }

// const ResortExperiences: React.FC<ResortExperienceCardProps> = ({ data }) => {
//   const { language } = useLanguage();
//   const isRTL = language === 'ar';

//   return (
//     <>
//       <Flex
//         alignItems="center"
//         gap={4}
//         fontSize={50}
//         fontWeight={600}
//         color="gray.600"
//         py={8}
//         overflow="hidden"
//         textAlign={isRTL ? 'right' : 'left'}
//         flexDirection={isRTL ? 'row-reverse' : 'row'}
//         px={24}
//       >
//         <Text>{isRTL ? data.main_heading_ar : data.main_heading_en}</Text>
//         <Box h={20} w={20}>
//           <Image
//             src={data && data.logo_url}
//             alt="Resort"
//             objectFit="cover"
//             transform={isRTL ? 'scaleX(-1)' : 'scaleX(1)'}
//           />
//         </Box>
//       </Flex>
//       <SimpleGrid
//         columns={{ base: 1, sm: 2, md: 3 }}
//         w="100%"
//         mx="auto"
//         spacing={8}
//         px={24}
//       >
//         {data.cards.map((item, index) => (
//           <Card
//             key={index}
//             minW={{ base: '100%', md: 'auto' }}
//             maxW={{ base: '100%', md: 'md' }}
//             w="100%"
//             position="relative"
//             overflow="hidden"
//             height={{ base: 500, md: 800 }}
//             borderRadius="none"
//             textAlign={isRTL ? 'right' : 'left'}
//             flexDirection={isRTL ? 'row-reverse' : 'row'}
//           >
//             <Image
//               src={item && item.image_url}
//               alt={isRTL ? item.text_ar : item.text_en}
//               objectFit="cover"
//               height="100%"
//               width="100%"
//               position="absolute"
//               transform={isRTL ? 'scaleX(-1)' : 'scaleX(1)'}
//               top="0"
//               left="0"
//               zIndex="1"
//             />
//             <CardBody
//               bg="rgba(0, 0, 0, 0.5)"
//               color="white"
//               position="relative"
//               p="4"
//               display="flex"
//               flexDirection="column"
//               justifyContent="flex-end"
//               height="100%"
//               zIndex={2}
//             >
//               <Text noOfLines={3}>
//                 {isRTL ? item.text_ar : item.text_en}
//               </Text>
//               {item.is_button && (
//                 <Button
//                   mt="4"
//                   bg="yellow.500"
//                   color="white"
//                   height="48px"
//                   width="140px"
//                   alignSelf="center"
//                   _hover={{ bg: 'yellow.600' }}
//                 >
//                   {isRTL ? 'اقرأ المزيد' : 'Read More'}
//                 </Button>
//               )}
//             </CardBody>
//           </Card>
//         ))}
//       </SimpleGrid>
//     </>
//   );
// };

// export default ResortExperiences;
