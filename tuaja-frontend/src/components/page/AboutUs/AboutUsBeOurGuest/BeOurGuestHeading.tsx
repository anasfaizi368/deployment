import CenterHeadingText from '@/components/shared/components/CenterHeadingText';

const centerHeadingTextData = [
  {
    heading_en: 'Be our guest, for it would be splendid to be your',
    heading_ar: 'مرحبًا بكم في تجربة المنتجع',
  },
];

const BeOurGuestHeading = () => {
  return <CenterHeadingText data={centerHeadingTextData} />

};

export default BeOurGuestHeading;
