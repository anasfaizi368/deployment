// import { useState } from 'react';
// import {
//     Button,
//     Heading,
//     Stack,
//     Image,
//     Text,
//     Box,
//     Flex,
//     IconButton,
// } from '@chakra-ui/react';
// import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

// interface dataCard {
//     date: string;
//     subHeading: string;
//     description: string;
//     cardCover: string;
// }

// interface JournalCardComponentProps {
//     data: dataCard[];
// }

// const JournalCardComponent: React.FC<JournalCardComponentProps> = ({
//     data = [],
// }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);


//     const visibleCards = 3;
//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + visibleCards) % data.length);
//     };
//     const handlePrev = () => {
//         setCurrentIndex(
//             (prevIndex) => (prevIndex - visibleCards + data.length) % data.length,
//         );
//     };

//     const CardsSet = data
//         .slice(currentIndex, currentIndex + visibleCards)
//         .concat(
//             data.slice(0, Math.max(0, currentIndex + visibleCards - data.length)),
//         );

//     return (
//         <Flex align="center" justify="center" gap={8}>
//             <IconButton
//                 aria-label="Previous"
//                 icon={<FaCaretLeft size={80} />}
//                 onClick={handlePrev}
//                 isRound
//                 size="lg"
//                 mx={4}
//                 bg="none"
//                 _hover={{ background: 'none', cursor: 'pointer' }}
//             />
//             <Flex overflow="hidden" justify="center">
//                 {CardsSet.map((res, index) => (
//                     <Box maxW="xs" key={index} mx={4} boxShadow="20px 20px 20px gray">
//                         <Box bg="yellow.500">
//                             <Image
//                                 src={res.cardCover}
//                                 alt={res.subHeading}
//                                 objectFit="cover"
//                             />
//                             <Stack mt="6" spacing="3" px={4}>
//                                 <Heading size="xs" color="gray.600" textTransform="uppercase">
//                                     {res.date}
//                                 </Heading>
//                                 <Heading size="sm" color="gray.600" textTransform="uppercase">
//                                     {res.subHeading}
//                                 </Heading>
//                                 <Text noOfLines={3} color="white">
//                                     {res.description}
//                                 </Text>
//                             </Stack>
//                             <Button variant="ghost" color="white">
//                                 Read More
//                             </Button>
//                         </Box>
//                     </Box>
//                 ))}
//             </Flex>
//             <IconButton
//                 aria-label="Next"
//                 icon={<FaCaretRight size={80} />}
//                 onClick={handleNext}
//                 isRound
//                 size="lg"
//                 mx={4}
//                 bg="none"
//                 _hover={{ background: 'none', cursor: 'pointer' }}
//             />
//         </Flex>
//     );
// };

// export default JournalCardComponent;
