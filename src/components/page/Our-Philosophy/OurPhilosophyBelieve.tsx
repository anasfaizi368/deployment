import { useLanguage } from '@/components/context/LanguageContext';
import ImageTextComponent from '@/components/shared/components/ImageTextComponent';

interface ImageTextComponentData {
  title_en?: string;
  title_ar?: string;
  description_en: string;
  description_ar: string;
  isButton?: boolean;
  isHeading?: boolean;
  image_url: string;
}
interface ImageTextComponentProps {
  data: ImageTextComponentData[];
}
const OurPhilosophyBelieve: React.FC<ImageTextComponentProps> = ({ data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  return <ImageTextComponent data={data} paddingX={{ base: 0, lg: 40 }} flexDirection={{ base: 'column', lg: isRTL ? "row" : 'row-reverse' }} />;
};

export default OurPhilosophyBelieve;
