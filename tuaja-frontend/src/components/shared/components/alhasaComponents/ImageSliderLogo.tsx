// import { useLanguage } from '@/components/context/LanguageContext';
// import { Box, Image, IconButton, Text } from '@chakra-ui/react';
// import { useState, useEffect } from 'react';
// import {
//   MdOutlineKeyboardArrowLeft,
//   MdOutlineKeyboardArrowRight,
// } from 'react-icons/md';

// interface BackgroundSliderLogo {
//   image_url: string;
//   text1_en: string;
//   text1_ar: string;
//   text2_en: string;
//   text2_ar: string;
//   logo_url: string;
// }

// interface BackgroundSliderLogoProps {
//   data: BackgroundSliderLogo[];
//   color?: string;
// }

// const ImageSliderLogo: React.FC<BackgroundSliderLogoProps> = ({ data = [], color }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const { language } = useLanguage();
//   const isRTL = language === 'ar';

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [data.length]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

//   return (
//     <Box position="relative" width="100%" height="90vh" overflow="hidden">
//       {data.map((res, index) => (
//         <Box
//           key={index}
//           display={currentIndex === index ? 'block' : 'none'}
//           position="relative"
//           width="100%"
//           height="100%"
//           transition="opacity 1s ease-in-out"
//         >
//           <Image
//             src={res.image_url}
//             alt={'ee'}
//             position="absolute"
//             top="0"
//             left="0"
//             width="100%"
//             height="100%"
//             objectFit="cover"
//             opacity={currentIndex === index ? 1 : 0}
//             transition="opacity 1s ease-in-out"
//             filter="brightness(50%)"
//           />
//           <Box
//             position="absolute"
//             top="50%"
//             left="50%"
//             transform="translate(-50%, -50%)"
//             zIndex={10}
//           >
//             <Image
//               src={res.logo_url}
//               alt={'ee'}
//               width={{ base: '150px', lg: '250px' }}
//               objectFit="contain"
//             />
//           </Box>
//           <Box
//             zIndex={10}
//             position="absolute"
//             left={isRTL ? 'auto' : '44%'}
//             right={isRTL ? '20%' : 'auto'}
//             top="64%"
//             transform="translateY(-50%)"
//             textAlign={isRTL ? { base: 'right', lg: 'right' } : { base: 'left', lg: 'left' }}
//             color="white"
//             fontSize={{ base: '12px', lg: '20px' }}
//             fontWeight={500}
//             textTransform="uppercase"
//             opacity={currentIndex === index ? 1 : 0}
//             transition="opacity 1s ease-in-out"
//           >
//             <Text sx={{ fontFamily: 'TrajanPro-Bold' }}>
//               {isRTL ? res.text1_ar : res.text1_en}
//             </Text>
//             <Text sx={{ fontFamily: 'TrajanPro-Bold' }}>
//               {isRTL ? res.text2_ar : res.text2_en}
//             </Text>
//           </Box>
//         </Box>
//       ))}
//       <IconButton
//         aria-label="Previous image"
//         icon={<MdOutlineKeyboardArrowLeft color="white" size={80} />}
//         onClick={handlePrev}
//         position="absolute"
//         left="20px"
//         top="50%"
//         transform="translateY(-50%)"
//         zIndex={10}
//         bg="none"
//         _hover={{ background: 'none', cursor: 'pointer' }}
//       />
//       <IconButton
//         aria-label="Next image"
//         icon={<MdOutlineKeyboardArrowRight color="white" size={80} />}
//         onClick={handleNext}
//         position="absolute"
//         right="20px"
//         top="50%"
//         transform="translateY(-50%)"
//         zIndex={10}
//         bg="none"
//         _hover={{ background: 'none', cursor: 'pointer' }}
//       />
//     </Box>
//   );
// };

// export default ImageSliderLogo;
