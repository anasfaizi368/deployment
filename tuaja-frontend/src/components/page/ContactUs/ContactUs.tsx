'use client';

import FollowUs from '@/components/shared/components/FollowUs/FollowUs';
import Footer from '@/components/shared/components/Footer';
import Form from '@/components/shared/components/Form';
import ImageHeaderComponent from '@/components/shared/components/ImageHeaderComponent';
import ImageSectionWithText from '@/components/shared/components/ImageSectionWithText';
import SimplaImages from '@/components/shared/components/SimpleImages/SimplaImages';
import SubFooter from '@/components/shared/components/SubFooter';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
const ContactUs = () => {
  const staticHeaderData = [
    {
      bgImage: {
        src: '/contact.jpg',
        alt: 'cc',
      },
      heading_en: 'Contact Us',
      heading_ar: 'معلومات عنا',
    },
  ];
  return (
    <>
      <ImageHeaderComponent data={staticHeaderData} />
      <Form />
      <ImageSectionWithText />
      <SimplaImages />
      <FollowUs />
      <Box position="relative" width="100%" height="200px" marginY={4}>
        <Image
          src="/Pattern-02.png"
          alt="ss"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <SubFooter />
      <Footer />
    </>
  );
};

export default ContactUs;
