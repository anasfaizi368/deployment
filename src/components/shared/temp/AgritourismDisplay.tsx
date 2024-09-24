// import React from 'react';
// import {
//   Box,
//   Grid,
//   GridItem,
//   Heading,
//   Text,
//   Image,
//   VStack,
//   useBreakpointValue,
// } from '@chakra-ui/react';

// interface ImageInfo {
//   src: string;
//   alt: string;
// }

// interface AgritourismDisplayProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   images: ImageInfo[];
// }

// const tempData: AgritourismDisplayProps = {
//   title: 'LUXURIOUS AGRITOURISM IN',
//   subtitle: 'THE LUSH GREENERY OF AL AHSA OASIS',
//   description:
//     "Tuaja at Al Ahsa is a sanctuary where ancient heritage meets modern luxury. Nestled in the world's largest palm oasis, a UNESCO World Heritage Site, the resort awakens your senses with a blend of sands, greenery, and springs. Combining authentic Al Ahsa hospitality with nature-inspired and heritage-rooted experiences, Tuaja redefines luxury through its architecture, interiors, and immersive offerings.",
//   images: [
//     {
//       src: 'https://placehold.co/600x400/png',
//       alt: 'Traditional architecture',
//     },
//     { src: 'https://placehold.co/600x400/png', alt: 'Interior design' },
//     { src: 'https://placehold.co/600x400/png', alt: 'Palm trees' },
//     { src: 'https://placehold.co/600x400/png', alt: 'Resort overview' },
//     { src: 'https://placehold.co/600x400/png', alt: 'Night view' },
//     { src: 'https://placehold.co/600x400/png', alt: 'Garden path' },
//   ],
// };

// const AgritourismDisplay: React.FC<AgritourismDisplayProps> = ({
//   title,
//   subtitle,
//   description,
//   images,
// }) => {
//   const columnTemplate = useBreakpointValue({
//     base: '1fr',
//     md: 'repeat(2, 1fr)',
//     lg: '1fr 1fr 2fr',
//   });

//   const imageHeight = useBreakpointValue({
//     base: '200px',
//     md: '250px',
//     lg: '280px',
//   });
//   const tallImageHeight = useBreakpointValue({
//     base: '300px',
//     md: '400px',
//     lg: '580px',
//   });

//   return (
//     <Box
//       backgroundImage="url('/background-img.png')"
//       backgroundSize="cover"
//       backgroundPosition="center"
//       backgroundRepeat="no-repeat"
//       py={[10, 15, 20]}
//       color="white"
//       position="relative"
//       mb={20}
//     >
//       <VStack
//         spacing={4}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         px={[4, 6, 10]}
//         mb={6}
//         mx="auto"
//         maxWidth="1400px"
//       >
//         <Heading
//           as="h2"
//           size={['md', 'lg']}
//           className="chakra-heading"
//           textAlign="center"
//           fontWeight="bold"
//           color={'#85c469'}
//         >
//           {title} <br /> {subtitle}
//         </Heading>

//         <Text
//           textAlign="center"
//           fontSize={['md', 'lg']}
//           fontWeight="200"
//           maxWidth="1200px"
//           mx="auto"
//           mb={6}
//         >
//           {description}
//         </Text>

//         <Grid
//           templateColumns={columnTemplate}
//           gap={4}
//           w="100%"
//           alignItems="center"
//           maxWidth="1200px"
//         >
//           <GridItem>
//             <VStack spacing={4}>
//               <Image
//                 src={images[0].src}
//                 alt={images[0].alt}
//                 objectFit="cover"
//                 w="100%"
//                 h={imageHeight}
//               />
//               <Image
//                 src={images[1].src}
//                 alt={images[1].alt}
//                 objectFit="cover"
//                 w="100%"
//                 h={imageHeight}
//               />
//             </VStack>
//           </GridItem>

//           <GridItem>
//             <Image
//               src={images[2].src}
//               alt={images[2].alt}
//               objectFit="cover"
//               w="100%"
//               h={tallImageHeight}
//             />
//           </GridItem>

//           <GridItem colSpan={[1, 1, 1]}>
//             <VStack spacing={4}>
//               <Image
//                 src={images[3].src}
//                 alt={images[3].alt}
//                 objectFit="cover"
//                 w="100%"
//                 h={imageHeight}
//               />
//               <Grid templateColumns="repeat(2, 1fr)" gap={2}>
//                 <Image
//                   src={images[4].src}
//                   alt={images[4].alt}
//                   objectFit="cover"
//                   h={imageHeight}
//                 />
//                 <Image
//                   src={images[5].src}
//                   alt={images[5].alt}
//                   objectFit="cover"
//                   h={imageHeight}
//                 />
//               </Grid>
//             </VStack>
//           </GridItem>
//         </Grid>
//       </VStack>
//     </Box>
//   );
// };

// const AgritourismDisplayWithTempData: React.FC = () => (
//   <AgritourismDisplay {...tempData} />
// );

// export default AgritourismDisplayWithTempData;
