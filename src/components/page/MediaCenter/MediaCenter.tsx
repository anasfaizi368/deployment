'use client';
import Footer from '@/components/shared/components/Footer';
import ImageHeaderComponent from '@/components/shared/components/ImageHeaderComponent';
import JournalCardComponent from '@/components/shared/components/JournalCardComponent';
import SubFooter from '@/components/shared/components/SubFooter';

const MediaCenter = () => {
  const staticJournalData = {
    heading_en: 'Press Center',
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
    ],
  };
  const staticHeaderData = [
    {
      bgImage: {
        src: '/media_center_bg.jpg',
        alt: 'cc',
      },
      heading_en: 'Media Center',
      heading_ar: 'معلومات عنا',
    },
  ];
  return (
    <>
      <ImageHeaderComponent data={staticHeaderData} />
      <JournalCardComponent
        heading_en={staticJournalData.heading_en}
        heading_ar={staticJournalData.heading_ar}
        data={staticJournalData.data}
        bgColor="white"
        titleColor="#d69e2e"
        boxColor="white"
        textColor="#d69e2e"
        nooflines={1}
        color_btn='gray'


      />
         <JournalCardComponent
        heading_en={staticJournalData.heading_en}
        heading_ar={staticJournalData.heading_ar}
        data={staticJournalData.data}
        bgColor="#CD9E61"
        titleColor="white"
        boxColor="white"
        textColor="#d69e2e"
        color_btn='gray'
        nooflines={1}


      />

      <SubFooter />
      <Footer />
    </>
  );
};

export default MediaCenter;
