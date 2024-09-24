import { Box } from '@chakra-ui/layout';
import OurPhilosophyHeader from './OurPhilosophyHeader';
import OurPhilosophyBelieve from './OurPhilosophyBelieve';
import OurPhilosophyPurpose from './OurPhilosophyPurpose';
import OurPhilosophyPromise from './OurPhilosophyPromise';
import SubFooter from '@/components/shared/components/SubFooter';
import Footer from '@/components/shared/components/Footer';
import OurPhilosophyValue from './OurPhilosophyValue';

const OurPhilosophy = () => {
  const AboutUsHeaderImage = [
    {
      bgImage: {
        src: '/_CED2753.jpg',
        alt: 'Our Philosophy',
      },
      heading_en: 'Our Philosophy',
      heading_ar: 'فلسفتنا',
    },
  ];
  const des_en = `We believe in the importance of remaining connected to ourselves, nature, and heritage, all mixed with a touch of luxury, a dash of
modernism, and fun. Hence, we have nurtured Tud & Luxury Resorts to host explorers with an appetite for discovery and self-expression in a unique agricultural setting in the center of the
kingdom.
Honoring the true marvel of Saudi Arabia's diverse flora and fauna,
we made it the core of our philosophy. From the lush date palm groves that stretch to the horizon all the way to the glimmer of tranquil ponds, Tudaja is nestled in the heart of nature. It is where you
explore winding paths and hidden corners, the tantalizing smells of herbs, the vibrant colors of flowers and fruits, all accompanied by hospitality excellence and authenticity, in a refreshing travel vacation
like no other.`;

  const des_ar = `نؤمن بأهمية البقاء على اتصال بأنفسنا وبالطبيعة والتراث، ممزوجة بلمسة من الفخامة وجرعة من الحداثة والمرح. لهذا السبب، قمنا برعاية "تود" ومنتجعات الفخامة لاستضافة المستكشفين الذين لديهم شغف بالاكتشاف والتعبير عن الذات في بيئة زراعية فريدة في قلب المملكة.
احترامًا للتنوع النباتي والحيواني في المملكة العربية السعودية، جعلنا هذا هو جوهر فلسفتنا. من بساتين النخيل الخضراء التي تمتد إلى الأفق إلى بريق البرك الهادئة، "تودجا" محاطة بقلب الطبيعة. هنا يمكنك استكشاف المسارات المتعرجة والزوايا المخفية، والروائح المثيرة للأعشاب، والألوان الزاهية للزهور والفواكه، مصحوبة بتميز الضيافة والأصالة، في إجازة سفر منعشة لا مثيل لها.`;

  const OurPhilosophyBelieveData = [
    {
      title_en: '',
      title_ar: '',
      description_en: des_en,
      description_ar: des_ar,
      isButton: false,
      isHeading: false,
      image_url: '/a.jpg',

    },
  ];

  const OurPhilosophyPurposeData = [
    {
      title_en: 'Purpose',
      title_ar: 'الهدف',
      description_en: `We are here to introduce authentic Saudi hospitality through nature-inspired and heritage-rooted
      experiences, redefining luxury with creatively themed concepts.`,
      description_ar: `نحن هنا لتقديم الضيافة السعودية الأصيلة من خلال تجارب مستوحاة من الطبيعة ومرتبطة بالتراث،
      مع إعادة تعريف الفخامة من خلال مفاهيم إبداعية.`,
      isButton: false,
      isHeading: true,
      imageData: {
        src: '/_CED2502-1.jpg',
        alt: 'talking blue',
      },
    },
  ];

  const OurPhilosophyPromiseData = [
    {
      title_en: 'Promise',
      title_ar: 'الوعد',
      description_en: `We are here to introduce authentic Saudi hospitality through nature-inspired and heritage-rooted
      experiences, redefining luxury with creatively themed concepts.`,
      description_ar: `نحن هنا لتقديم الضيافة السعودية الأصيلة من خلال تجارب مستوحاة من الطبيعة ومرتبطة بالتراث،
      مع إعادة تعريف الفخامة من خلال مفاهيم إبداعية.`,
      isButton: false,
      isHeading: true,
      imageData: {
        src: '/_CED4027-1.jpg',
        alt: 'talking blue',
      },
    },
  ];

  return (
    <Box>
      <OurPhilosophyHeader data={AboutUsHeaderImage} />
      <OurPhilosophyBelieve data={OurPhilosophyBelieveData} />
      <OurPhilosophyPurpose data={OurPhilosophyPurposeData} />
      <OurPhilosophyPromise data={OurPhilosophyPromiseData} />
      <OurPhilosophyValue />
      <SubFooter />
      <Footer />
    </Box>
  );
};

export default OurPhilosophy;
