import { Box } from '@chakra-ui/react';
import ResortExperienceComponent from './ResortExperienceComponent';
import ResortExperienceFooterComponent from '@/components/shared/components/ResortExperienceFooterComponent';

const ResortExperience: React.FC = () => {
  const staticData = {
    main_heading_en: "TUAJA RESORTS EXPERIENCE",
    main_heading_ar: "اكتشف منتجعاتنا",
    logo_url: "Asset-4.svg",
    cards: [
      {
        text_en: `Over time, the dates fell from the rosary to the ground, from which thousands of palm trees grew, producing the most delicious dates.
Wa draw inchiration from Tuniale`,
        text_ar: ' الشغوفة بعجائب الطبيعة المدينة المنورة وجمعت نوى التمر لتصنع منها مسبحة. وقد تساقط التمر من هذه المسبحة، ومع مرور الوقت نمت آلاف أشجار النخيل من هذه البذور',
        image_url: "/card1.jpeg",
        is_button: true,
        order: 1,
      },
      {
        text_en: `Over time, the dates fell from the rosary to the ground, from which thousands of palm trees grew, producing the most delicious dates.
Wa draw inchiration from Tuniale`,
        text_ar: ' الشغوفة بعجائب الطبيعة المدينة المنورة وجمعت نوى التمر لتصنع منها مسبحة. وقد تساقط التمر من هذه المسبحة، ومع مرور الوقت نمت آلاف أشجار النخيل من هذه البذور',
        image_url: "/card2.jpeg",
        is_button: true,
        order: 2,
      },
      {
        text_en: `Over time, the dates fell from the rosary to the ground, from which thousands of palm trees grew, producing the most delicious dates.
Wa draw inchiration from Tuniale`,
        text_ar: ' الشغوفة بعجائب الطبيعة المدينة المنورة وجمعت نوى التمر لتصنع منها مسبحة. وقد تساقط التمر من هذه المسبحة، ومع مرور الوقت نمت آلاف أشجار النخيل من هذه البذور',
        image_url: "/card3.jpeg",
        is_button: true,
        order: 3,
      },
    ],
  };

  return (
    <Box width="100%" minHeight="100vh" sx={{ fontFamily: 'OpenSans-Italic-Variable' }}>
      <ResortExperienceComponent data={staticData} />
      <Box px={24}>
        <ResortExperienceFooterComponent />
      </Box>
    </Box>
  );
};

export default ResortExperience;
