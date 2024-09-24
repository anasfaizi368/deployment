// import React from 'react';
// import { Box, Grid, GridItem, Image, IconButton } from '@chakra-ui/react';
// import { FaPlay } from 'react-icons/fa';

// const images = [
//   { src: 'https://placehold.co/600x400/png', alt: 'Person on dock' },
//   { src: 'https://placehold.co/600x400/png', alt: 'Child with basket' },
//   { src: 'https://placehold.co/600x400/png', alt: 'Group on sand dune' },
//   { src: 'https://placehold.co/600x400/png', alt: 'Person in blue robe' },
//   { src: 'https://placehold.co/600x400/png', alt: 'Runner on rocks' },
//   { src: 'https://placehold.co/600x400/png', alt: 'Person by palm tree' },
//   { src: 'https://placehold.co/600x400/png', alt: 'Massage scene' },
//   { src: 'https://placehold.co/600x400/png', alt: 'Person with cupped hands' },
//   { src: 'https://placehold.co/600x400/png', alt: 'Group walking' },
//   { src: 'https://placehold.co/600x400/png', alt: 'Child with flower' },
// ];

// const ImageGrid = () => {
//   return (
//     <Box width="100%" mx="auto" p={1} mb={10}>
//       <Grid templateColumns="2fr 1fr 2fr 2fr" templateRows="repeat(2, 1fr)">
//         <GridItem colSpan={1} rowSpan={1}>
//           <Image
//             src={images[0].src}
//             alt={images[0].alt}
//             objectFit="cover"
//             h="100%"
//             w="100%"
//             border={'1px solid red'}
//           />
//         </GridItem>
//         <GridItem colSpan={1} rowSpan={1}>
//           <Image
//             src={images[1].src}
//             alt={images[1].alt}
//             objectFit="cover"
//             h="100%"
//             w="100%"
//             border={'1px solid red'}
//           />
//         </GridItem>
//         <GridItem colSpan={1} rowSpan={1}>
//           <Image
//             src={images[2].src}
//             alt={images[2].alt}
//             objectFit="cover"
//             h="100%"
//             w="100%"
//             border={'1px solid red'}
//           />
//         </GridItem>
//         <GridItem colSpan={1} rowSpan={1}>
//           <Image
//             src={images[3].src}
//             alt={images[3].alt}
//             objectFit="cover"
//             h="100%"
//             w="100%"
//             border={'1px solid red'}
//           />
//         </GridItem>

//         <GridItem colSpan={1} rowSpan={1}>
//           <Image
//             src={images[4].src}
//             alt={images[4].alt}
//             objectFit="cover"
//             h="100%"
//             w="100%"
//             border={'1px solid red'}
//           />
//         </GridItem>
//         <GridItem colSpan={1} rowSpan={1}>
//           <Image
//             src={images[5].src}
//             alt={images[5].alt}
//             objectFit="cover"
//             h="100%"
//             border={'1px solid red'}
//             w="100%"
//           />
//         </GridItem>
//         <GridItem colSpan={1} rowSpan={1}>
//           <Grid templateColumns="1.5fr 1fr" h="100%">
//             <GridItem>
//               <Image
//                 src={images[6].src}
//                 alt={images[6].alt}
//                 objectFit="cover"
//                 h="100%"
//                 w="100%"
//                 border={'1px solid red'}
//               />
//             </GridItem>
//             <GridItem position="relative">
//               <Image
//                 src={images[7].src}
//                 alt={images[7].alt}
//                 objectFit="cover"
//                 h="100%"
//                 w="100%"
//                 border={'1px solid red'}
//               />
//               <IconButton
//                 aria-label="Play video"
//                 icon={<FaPlay />}
//                 size="sm"
//                 position="absolute"
//                 top="50%"
//                 left="50%"
//                 transform="translate(-50%, -50%)"
//                 borderRadius="full"
//                 bg="whiteAlpha.700"
//                 color="black"
//                 _hover={{ bg: 'whiteAlpha.900' }}
//               />
//             </GridItem>
//           </Grid>
//         </GridItem>
//         <GridItem colSpan={1} rowSpan={1}>
//           <Grid templateColumns="repeat(2, 1fr)" h="100%">
//             <GridItem>
//               <Image
//                 src={images[8].src}
//                 alt={images[8].alt}
//                 objectFit="cover"
//                 h="100%"
//                 w="100%"
//                 border={'1px solid red'}
//               />
//             </GridItem>
//             <GridItem>
//               <Image
//                 src={images[9].src}
//                 alt={images[9].alt}
//                 objectFit="cover"
//                 h="100%"
//                 border={'1px solid red'}
//                 w="100%"
//               />
//             </GridItem>
//           </Grid>
//         </GridItem>
//       </Grid>
//     </Box>
//   );
// };

// export default ImageGrid;
