import { useLanguage } from '@/components/context/LanguageContext';
import ImageTextComponent from '@/components/shared/components/ImageTextComponent';
import ImageTextShortComponent from '@/components/shared/components/ImageTextShortComponent';
import { ReactNode } from 'react';

interface ImageTextComponentData {
  title_en?: string;
  title_ar?: string;
  description_en: ReactNode;
  description_ar: ReactNode;
  isButton?: boolean;
  isHeading?: boolean;
  imageData: {
    src: string;
    alt: string;
  };
}
interface ImageTextComponentProps {
  data: ImageTextComponentData[];
}
const OurPhilosophyPurpose: React.FC<ImageTextComponentProps> = ({ data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  return <ImageTextShortComponent data={data} flexDir={{ base: 'column', lg: isRTL ? 'row-reverse' : 'row' }} />;
};

export default OurPhilosophyPurpose;
