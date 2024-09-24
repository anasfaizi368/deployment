import React, { useState } from 'react';
import { Box, IconButton, AspectRatio } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

import CenterHeadingText from '@/components/shared/components/CenterHeadingText';

const VideoBackground = () => {
  const centerHeadingTextData = [
    {
      heading_en: 'Be our guest, for it would be splendid to be your',
      heading_ar: 'مرحبًا بكم في تجربة المنتجع',
    },
  ];
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Box marginTop={'6rem'}>
      <CenterHeadingText data={centerHeadingTextData} />

      <Box
        position="relative"
        width="100%"
        height={{ base: '400px', lg: '720px' }}
        marginTop={'1rem'}
        marginBottom={'4rem'}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundImage="url('/_CED1857.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.4)"
        />
        {!isPlaying ? (
          <IconButton
            aria-label="Play video"
            icon={<FaPlay />}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            size="lg"
            fontSize="3xl"
            color="white"
            variant="outline"
            width={'80px'}
            height={'80px'}
            borderColor="white"
            _hover={{ bg: 'whiteAlpha.200' }}
            onClick={handlePlay}
            borderRadius={'100%'}
            backgroundColor={'#373c40'}
          />
        ) : (
          <AspectRatio ratio={16 / 9} width="100%" height="100%">
            <iframe
              src="https://www.youtube.com/embed/AP9R3U5FYNw?si=Aqt1p7GQbrXk7T-Y?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        )}
      </Box>
    </Box>
  );
};

export default VideoBackground;
