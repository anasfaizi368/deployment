'use client';
import SliderWithHeading from '@/components/shared/components/SliderWithHeading';

const OurPhilosophyValue = () => {
  const SliderContent = [
    {
      src: '/_CED4222.jpg',
      alt: 'Image 1',
      rightText: {
        icon: '/eeewww.svg',
        heading_en: 'CHAMPIONING LUXURIOUS AUTHENTICITY',
        heading_ar: 'تبني الأصالة الفاخرة',
        text_en: `Our authenticity is inherent to who we are. We craft luxurious immersive experiences rooted in nature and inspired by local cultures.`,
        text_ar: `أصالتنا جزء لا يتجزأ من هويتنا. نحن نبتكر تجارب فاخرة غامرة متجذرة في الطبيعة وملهمة من الثقافات المحلية.`,
      },
      leftText: {
        icon: '/eer.svg',
        heading_en: 'ADOPTING INNOVATIVE PRACTICES',
        heading_ar: 'تبني الممارسات المبتكرة',
        text_en: `We seize opportunities and innovate constantly. We embrace creative ideas to deliver amplified customer experiences crowned with the beauty of our kingdom's nature.`,
        text_ar: `نحن نغتنم الفرص ونبتكر باستمرار. نحن نحتضن الأفكار الإبداعية لتقديم تجارب عملاء معززة تتوج بجمال طبيعة مملكتنا.`,
      },
      headingTop_en: 'Values',
      headingTop_ar: 'القيم',
    },
    {
      src: '/_CED4222.jpg',
      alt: 'Image 2',
      rightText: {
        icon: '/eeewww.svg',
      heading_en: 'CHAMPIONING LUXURIOUS AUTHENTICITY',
      heading_ar: 'تبني الأصالة الفاخرة',
      text_en: `Our authenticity is inherent to who we are. We craft luxurious immersive experiences rooted in nature and inspired by local cultures.`,
      text_ar: `أصالتنا جزء لا يتجزأ من هويتنا. نحن نبتكر تجارب فاخرة غامرة متجذرة في الطبيعة وملهمة من الثقافات المحلية.`,
    },
    leftText: {
      icon: '/eer.svg',
      heading_en: 'ADOPTING INNOVATIVE PRACTICES',
      heading_ar: 'تبني الممارسات المبتكرة',
      text_en: `We seize opportunities and innovate constantly. We embrace creative ideas to deliver amplified customer experiences crowned with the beauty of our kingdom's nature.`,
      text_ar: `نحن نغتنم الفرص ونبتكر باستمرار. نحن نحتضن الأفكار الإبداعية لتقديم تجارب عملاء معززة تتوج بجمال طبيعة مملكتنا.`,
    },
      headingTop_en: 'Values',
      headingTop_ar: 'القيم',
    },
  ];


  return <SliderWithHeading SliderContent={SliderContent} />;
};

export default OurPhilosophyValue;
