import JournalCardComponent from '@/components/shared/components/JournalCardComponent';
import OurLocalCommunityComponent from '@/components/shared/components/OurLocalCommunityComponent';
import OurStoryComponent from '@/components/shared/components/OurStoryComponent';
import ResortExperiences from '@/components/shared/components/ResortExperiences/ResortExperiences';
import SubFooter from '@/components/shared/components/SubFooter';
import Footer from '@/components/shared/components/Footer';
import { Box } from '@chakra-ui/react';
import TuajaResortLayout from '@/components/shared/temp/TuajaResortLayout';
import ImageSlider from '@/components/shared/components/ImageSlider';

const HomePage2 = () => {
  const des_en = `We believe in the importance of remaining connected to ourselves, nature, and heritage, all mixed with a touch of luxury, a dash of
modernism, and fun. Hence, we have nurtured Tud & Luxury Resorts to host explorers with an appetite for discovery and self-expression in a unique agricultural setting in the center of the
kingdom.`;
  const des_en2 = `
  tranquil ponds, Tudaja is nestled in the heart of nature. It is where you
explore winding paths and hidden corners, the tantalizing smells of herbs, the vibrant colors of flowers and fruits, all accompanied by hospitality excellence and authenticity, in a refreshing travel vacation
like no other.`;

  const des_ar = `نؤمن بأهمية البقاء على اتصال بأنفسنا وبالطبيعة والتراث، ممزوجة بلمسة من الفخامة وجرعة من الحداثة والمرح. لهذا السبب، قمنا برعاية "تود" ومنتجعات الفخامة لاستضافة المستكشفين الذين لديهم شغف بالاكتشاف والتعبير عن الذات في بيئة زرالزاهية للزهور والفواكه، مصحوبة بتميز الضيافة والأصالة، في إجازة سفر منعشة لا مثيل لها.`;
  const des2_ar = `نؤمن بأهمية البقاء على اتصال بأنفسنا وبالطبيعة والتراث، ممزوجة بلمسة من الفخامة وجرعة من الحداثة والمرح. لهذا السبب، قمنا برعاية "تود" ومنتجعات الفخامة لاستضافة المستكشفين الذين لديهم  في قلب المملكجازة سفر منعشة لا مثيل لها.`;

  const dummyOurStoryData = {
    title_en: 'Our Story',
    title_ar: 'قصتنا',
    description_en: des_en,
    description_ar: des_ar,
    additional_text_en: des_en2,
    additional_text_ar: des2_ar,
    image_url: '/Dates-1.jpg',
  };

  const staticJournalData = {
    heading_en: 'Journals',
    heading_ar: 'أحدث المجلات',
    data: [
      {
        published_date_en: 'July 10, 2024',
        published_date_ar: '١٠ يوليو ٢٠٢٤',
        title_en: 'Kingdom’s nature treasures unleashed',
        title_ar: 'إطلاق العنان لكنوز الطبيعة في المملكة',
        description_en:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
        description_ar:
          'استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.',
        image_url: '/Launch.jpg',
        isButton: true,
      },
      {
        published_date_en: 'August 5, 2024',
        published_date_ar: '٥ أغسطس ٢٠٢٤',
        title_en:
          'The role of local community in creating authentic travel experiences',
        title_ar: 'دور المجتمع المحلي في خلق تجارب سفر أصيلة',
        description_en:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
        description_ar:
          'استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.',
        image_url: '/wwww.jpeg',
        isButton: true,
      },
      {
        published_date_en: 'September 1, 2024',
        published_date_ar: '١ سبتمبر ٢٠٢٤',
        title_en:
          'The Harvest Season Extravaganza: Celebrating Saudi Natures Bounty',
        title_ar: 'روعة موسم الحصاد: الاحتفال بسخاء الطبيعة السعودية',
        description_en:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
        description_ar:
          'استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.',
        image_url: '/wwww.jpeg',
        isButton: true,
      },
      {
        published_date_en: 'november 1, 2024',
        published_date_ar: '١ سبتمبر ٢٠٢٤',
        title_en:
          'The Harvest Season Extravaganza: Celebrating Saudi Natures Bounty',
        title_ar: 'روعة موسم الحصاد: الاحتفال بسخاء الطبيعة السعودية',
        description_en:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
        description_ar:
          'استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.',
        image_url: '/wwww.jpeg',
        isButton: true,
      },
    ],
  };
  const sliderData = [
    {
      isVideo: true,
      video_url: '/wwqq.mp4',
      alt: 'Video',
      text1_en: '',
      text1_ar: '',
      text2_en: '',
      text2_ar: '',
    },
    {
      image_url: '/Banner.jpg',
      alt: 'cscdc',
      text1_en: 'Experience ',
      text1_ar: 'خبرة',
      text2_en: 'Nature Heartfully',
      text2_ar: 'خبرة',
    },

  ];


    return (
        <>
        <ImageSlider data={sliderData} />
            <ResortExperiences />
            <OurStoryComponent
                heading_en={dummyOurStoryData.title_en}
                heading_ar={dummyOurStoryData.title_ar}
                text_en={dummyOurStoryData.description_en}
                text_ar={dummyOurStoryData.description_ar}
                buttonText="Read More"
                imageSrc={dummyOurStoryData.image_url}
                alt="Our Story Image"
                isButton={true}
                text1_en={dummyOurStoryData.additional_text_en}
                text1_ar={dummyOurStoryData.additional_text_ar}
          fontSize='70px' />
        <OurLocalCommunityComponent />
            <TuajaResortLayout/>
            <Box marginBottom={10}>
                <JournalCardComponent nooflines={1} titleColor="#cd9e61" heading_en={staticJournalData.heading_en} heading_ar={staticJournalData.heading_ar} data={staticJournalData.data} color_btn="white" />
            </Box>
        <SubFooter />

            <Footer />
        </>

    )
}

export default HomePage2
