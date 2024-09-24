import ImageTextComponent from '@/components/shared/components/ImageTextComponent';
import { Box } from '@chakra-ui/react';

const AboutUsDetails: React.FC = () => {
  const Des_en = `
With a vision to create rich and unforgettable experiences that connect guests to the Kingdom's stunning natural landscapes, culture, and hospitality, Tuaja Luxury Resorts is an exquisite creation under the patronage of Dan Company, a visionary PIF enterprise. Tuaja's brand is built on the philosophy of availing a sustainable environment that encompasses time-honored narratives, nature's embrace, heritage's legacy, and enchanting tales within Saudi Arabia’s iconic cities.
Tuaja Luxury Resorts will intricately design a range of three exclusively different hospitality experiences to cater to guests' personal mystical getaway choices. With Tuaja, guests can enjoy the opulence of an agricultural experience at Tuaja Premium Farm Resort, tune into the serenity of an eco-friendly experience at Tuaja Eco Resort, and quench their thirst for adventure at Tuaja Adventure Resort.
`;

  const Des_ar = `
برؤية تهدف إلى خلق تجارب غنية ولا تُنسى تربط الضيوف بمناظر المملكة الطبيعية الخلابة، الثقافة والضيافة، تُعتبر منتجعات توجا الفاخرة إبداعًا رائعًا تحت رعاية شركة دان، وهي مشروع رائد لصندوق الاستثمارات العامة. يعتمد العلامة التجارية لتوجا على فلسفة توفير بيئة مستدامة تحتضن الروايات القديمة، وعناق الطبيعة، وتراث الإرث، والقصص الساحرة في المدن الأيقونية في المملكة العربية السعودية.
ستقوم منتجعات توجا الفاخرة بتصميم مجموعة من ثلاث تجارب ضيافة مختلفة وحصرية لتلبية اختيارات الضيوف الشخصية للحصول على تجربة هروب سحرية. مع توجا، يمكن للضيوف الاستمتاع بفخامة تجربة زراعية في منتجع المزرعة الفاخر، أو الانغماس في الهدوء بتجربة صديقة للبيئة في منتجع توجا البيئي، أو تلبية شغفهم بالمغامرة في منتجع مغامرات توجا.
`;

  const AboutUsDetailsData = [
    {
      title_en:
        'WELCOME TO LUXURY RESORTS. WHERE YOU CAN EXPERIENCE NATURE, HEARTFULLY',
      title_ar:
        'مرحبًا بكم في المنتجعات الفاخرة. حيث يمكنك تجربة الطبيعة بقلوب مفتوحة',
      description_en: Des_en,
      description_ar: Des_ar,
      isButton: false,
      isHeading: true,
      image_url: '/_CED3348-1.jpg',
    },
  ];

  return (
    <Box>
      <ImageTextComponent
        data={AboutUsDetailsData}
        marginBottom={20}
        paddingX={{ base: 10, lg: 40 }}
      />
    </Box>
  );
};

export default AboutUsDetails;
