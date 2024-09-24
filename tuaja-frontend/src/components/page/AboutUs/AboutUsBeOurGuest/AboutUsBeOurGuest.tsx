'use client';
import { Box } from '@chakra-ui/layout';
import BeOurGuestImageSwap from './BeOurGuestImageSwap';
import CenterHeadingText from '@/components/shared/components/CenterHeadingText';


const AboutUsBeOurGuest: React.FC = () => {
  const BeOurGuestImageSwapData = [
    { src: '_CED2502-1.JPG', alt: 'image 1' },
    { src: '_CED2502-1.JPG', alt: 'image 2' },
  ];
  const centerHeadingTextData = [
    {
      heading_en: 'Be our guest, for it would be splendid to be your',
      heading_ar: 'مرحبًا بكم في تجربة المنتجع',
    },
  ];

  return (
    <Box my={10}>
      <CenterHeadingText data={centerHeadingTextData} />
      <BeOurGuestImageSwap data={BeOurGuestImageSwapData} />
    </Box>
  );
};

export default AboutUsBeOurGuest;
