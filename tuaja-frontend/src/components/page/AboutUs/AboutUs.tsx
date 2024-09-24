'use client'
import { Box } from '@chakra-ui/react';
import AboutUsHeader from './AboutUsHeader';
import AboutUsDetails from './AboutUsDetails';
import AboutUsResortExperience from './AboutUsResortExperience/AboutUsResortExperience';
import AboutUsBeOurGuest from './AboutUsBeOurGuest/AboutUsBeOurGuest';
import AboutUsStoryTuaja from './AboutUsStoryTuaja';
import SubFooter from '../../shared/components/SubFooter';
import Footer from '../../shared/components/Footer';

const AboutUs = () => {
  const componentMap: Record<string, React.FC> = {
    AboutUsHeader,
    AboutUsDetails,
    AboutUsResortExperience,
    // AboutUsBeOurGuest,
    AboutUsStoryTuaja,
  };
  const data = [
    { "name": "AboutUsHeader", "isActive": true },
    {
      "name": "AboutUsDetails", "isActive": true
    },
    { "name": "AboutUsResortExperience", "isActive": true },
    { "name": "AboutUsBeOurGuest", "isActive": true },
    { "name": "AboutUsStoryTuaja", "isActive": true },
  ];
  return (
    <Box position="relative" width="100%" height="100vh">
      {data
        .filter(component => component.isActive)
        .map((component, index) => {
          const Component = componentMap[component.name];
          return Component ? <Component key={index} /> : null;
        })}
      <SubFooter />
      <Footer />
    </Box>
  );
};

export default AboutUs;
