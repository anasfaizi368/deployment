import { Box, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

const TuajaResortLayout = () => {
  return (
    <Box
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <Box>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        >
          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_1.jpg"
                alt="Resort Image 1"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_2.jpg"
                alt="Resort Image 2"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_3.jpg"
                alt="Resort Image 3"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_4.jpg"
                alt="Resort Image 4"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
        >
          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_5.jpg"
                alt="Resort Image 5"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_6.jpg"
                alt="Resort Image 6"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_7.jpg"
                alt="Resort Image 7"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_8.jpg"
                alt="Resort Image 8"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_9.jpg"
                alt="Resort Image 9"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          <GridItem>
            <Box position="relative" width="100%" height={['150px', '200px', '250px']}>
              <Image
                src="/img_10.jpg"
                alt="Resort Image 10"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default TuajaResortLayout;
