import { Box } from '@chakra-ui/layout';
import ResortExperienceFooterComponent from '@/components/shared/components/ResortExperienceFooterComponent';
import AboutUsResortExperienceMain from './AboutUsResortExperienceMain';

const AboutUsResortExperience: React.FC = () => {
  const AboutUsResortExperienceData = {
    heading_en: 'Resort Experiences',
    heading_ar: 'تجارب المنتجعات',
    text_en: `With an abundance of farmland, where cultural heritage intertwines with a spellbinding escape, Tuaja Luxury Resorts aims to introduce brand-new one-of-a-kind hospitality experiences in Saudi Arabia crowned with luxury that pampers their senses.`,
    text_ar: `مع وفرة من الأراضي الزراعية، حيث يتداخل التراث الثقافي مع هروب ساحر، تهدف منتجعات توجا الفاخرة إلى تقديم تجارب ضيافة جديدة وفريدة من نوعها في المملكة العربية السعودية تتوج بالفخامة التي تدلل حواسهم.`,
    images: [
      {
        src: '/about-1.png',
        alt: 'image 1',
      },
      {
        src: '/about-2.png',
        alt: 'image 2',
      },
      {
        src: '/about-3.png',
        alt: 'image 3',
      },
    ],
  };

  return (
    <Box paddingX={{ base: 10, lg: 40 }}>
      <AboutUsResortExperienceMain data={AboutUsResortExperienceData} />
      <ResortExperienceFooterComponent />
    </Box>
  );
};

export default AboutUsResortExperience;
