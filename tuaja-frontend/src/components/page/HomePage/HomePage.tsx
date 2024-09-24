'use client';
import { Box, Divider, Skeleton, Stack } from '@chakra-ui/react';
import ResortExperience from './ResortExperiences/ResortExperience';
import OurStory from './OurStory';
import OurLocalCommunity from './OurLocalCommunity';
import Journal from './Journal/Journal';
import SubFooter from '../../shared/components/SubFooter';
import Footer from '../../shared/components/Footer';
import ImageHeader from './ImageHeader/ImageHeader';
import ExperienceNatureFullyComponent from './ExperienceNatureFully/ExperienceNatureFullyComponent';
import useFetch from '@/utils/api/useFetch';

interface Section {
  id: number;
  section_name: string;
  status: number;
  created_at: string;
  updated_at: string;
}
interface ApiResponse {
  sections: Section[];
}

const HomePage = () => {
  const componentMap: Record<string, React.FC> = {
    ImageHeader,
    ResortExperience,
    OurStory,
    OurLocalCommunity,
    ExperienceNatureFullyComponent,
    Journal,
  };

  const { data, isLoading, error } = useFetch<ApiResponse>('/pages_section_get/1', 'GET');

  if (isLoading) {
    return (
      <Stack>
        <Skeleton height="80px" />
        <Skeleton height="80px" />
        <Skeleton height="80px" />
      </Stack>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const mappedData =
    data?.sections?.map((section) => ({
      name: section.section_name,
      isActive: section.status === 1,
    })) || [];
  if (mappedData.length === 0) {
    return <div>No data available</div>;
  }
  console.log(data)
  return (
    <Box position="relative" width="100%" height="100vh">
      {mappedData
        .filter((component) => component.isActive)
        .map((component, index) => {
          const Component = componentMap[component.name];
          return Component ? <Component key={index} /> : null;
        })}

      <Divider color="yellow.600" />
      <SubFooter />
      <Footer />
    </Box>
  );
};

export default HomePage;
