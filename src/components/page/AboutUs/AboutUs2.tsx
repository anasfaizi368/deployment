import ImageHeaderComponent from '@/components/shared/components/ImageHeaderComponent';
import AboutUsDetails from './AboutUsDetails';
import AboutUsResortExperience from './AboutUsResortExperience/AboutUsResortExperience';
import AboutUsStoryTuaja from './AboutUsStoryTuaja';
import Footer from '@/components/shared/components/Footer';
import SubFooter from '@/components/shared/components/SubFooter';
import VideoBackground from './temp/VideoBg';
import Image from 'next/image';

const AboutUs2 = () => {
  const staticHeaderData = [
    {
      bgImage: {
        src: '/Dates-1.jpg',
        alt: 'cc',
      },
      heading_en: 'About Us',
      heading_ar: 'معلومات عنا',
    },
  ];
  return (
    <>
      <ImageHeaderComponent data={staticHeaderData} />
      <AboutUsDetails />
      <AboutUsResortExperience />
      <VideoBackground />
      <AboutUsStoryTuaja />
      <Image
        src="/Pattern-02.png"
        alt="Pattern Image"
        layout="responsive"
        width={20}
        height={20}
      />
      <SubFooter />
      <Footer />

    </>
  );
};

export default AboutUs2;
