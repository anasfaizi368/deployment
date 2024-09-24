import ImageHeaderComponent from '@/components/shared/components/ImageHeaderComponent';

interface ImageHeaderComponentData {
  bgImage: {
    src: string;
    alt: string;
  };
  logo?: {
    src: string;
    alt: string;
  };
  heading_en?: string;
  heading_ar?: string;
  text_en?: string;
  text_ar?: string;
  isButton?: boolean;
  buttonText_en?: string;
  buttonText_ar?: string;
}

interface ImageHeaderComponentProps {
  data: ImageHeaderComponentData[];
}
const OurPhilosophyHeader: React.FC<ImageHeaderComponentProps> = ({ data }) => {
  return <ImageHeaderComponent data={data} />;
};

export default OurPhilosophyHeader;
