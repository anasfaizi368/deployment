import { Box, AspectRatio } from '@chakra-ui/react';

const VideoBackground1 = () => {
    return (
        <Box position="relative">
            <Box
                position="relative"
                width="100%"
                height={{ base: '50vh', lg: '65vh' }}
                marginTop={0}
                marginBottom={{base: '1rem' ,lg:"4rem"}}
                overflow="hidden"
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
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >
                    <source src="/wwqq.mp4" type="video/mp4" />
                </video>
            </Box>
        </Box>
    );
};

export default VideoBackground1;
