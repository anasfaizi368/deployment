import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  Flex,
  Divider,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useLanguage } from '@/components/context/LanguageContext';

const SubFooter = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <>
      <Divider />
      <Flex
        bg="white"
        py={10}
        px={70}
        direction={{ base: 'column', lg: isRTL ? 'row-reverse' : 'row' }}
        textAlign={isRTL ? 'right' : 'left'}
      >
        <Flex
          flexDir="column"
          align={isRTL ? 'center' : 'left'}
          gap={5}
          justify="start"
          w={{ base: '100%', lg: '35%' }}
          order={{ base: 2, lg: isRTL ? 1 : 1 }}
        >
          <Box h={30} w={{ base: '180px', lg: '230px' }}>
            <Image
              src="/FooterLogo.png"
              alt="Footer Logo"
              width={230}
              height={30}
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Text fontSize="sm" color="gray.600" mt={2} w={{ base: '100%', lg: '60%' }}>
            {isRTL
              ? 'لوريم إيبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يلينج إيلت, سيد ديام نونماي نيب إيوسيمود تينسيدنت أوت لابور إت دولوري ماجنا أليكيوا.'
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}
          </Text>
        </Flex>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
          marginTop={{ base: '1rem', lg: '0px' }}
          gap={8}
          maxW="full"
          mx="auto"
          order={{ base: 1, lg: isRTL ? 2 : 2 }}
        >
          <GridItem>
            <Heading as="h4" size="md" mb={4} color="gray.700" fontWeight={500}>
              {isRTL ? 'العلامة التجارية' : 'The Brand'}
            </Heading>
            <Link href="#" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'قصتنا' : 'Our Story'}
            </Link>
            <Link href="/our-philosophy" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'فلسفتنا' : 'Our Philosophy'}
            </Link>
            <Link href="#" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'الاستدامة' : 'Sustainability'}
            </Link>
            <Link href="#" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'المجتمع' : 'Community'}
            </Link>
            <Link href="/about-us" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'معلومات عنا' : 'About Us'}
            </Link>
          </GridItem>
          <GridItem>
            <Heading as="h4" size="md" mb={4} color="gray.700" fontWeight={500}>
              {isRTL ? 'التجارب' : 'Experiences'}
            </Heading>
            <Link href="/premium-farm-resort" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'منتجع المزرعة الفاخرة' : 'Premium Farm Resort'}
            </Link>
            <Link href="/eco-resort" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'المنتجع البيئي' : 'Eco Resort'}
            </Link>
            <Link href="adventure-resort" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'منتجع المغامرات' : 'Adventure Resort'}
            </Link>
          </GridItem>
          <GridItem>
            <Heading as="h4" size="md" mb={4} color="gray.700" fontWeight={500}>
              {isRTL ? 'مركز الإعلام' : 'Media Center'}
            </Heading>
            <Link href="#" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'الصحافة' : 'Press'}
            </Link>
            <Link href="#" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'المجلة' : 'Journal'}
            </Link>
            <Link href="#" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'المعرض' : 'Gallery'}
            </Link>
            <Link href="#" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'الكتيب' : 'Brochure'}
            </Link>
            <Link href="#" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'الأسئلة المتكررة' : 'Frequently Asked Questions'}
            </Link>
          </GridItem>
          <GridItem>
            <Heading size="md" mb={4} color="gray.700" fontWeight={500}>
              {isRTL ? 'تواصل معنا' : 'Connect with Us'}
            </Heading>
            <Link href="contact-us" color="gray.600" display="block" mb={1} fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </Link>
            <Link href="#" display="block" mb={1} color="gray.600" fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>
              {isRTL ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to our newsletter'}
            </Link>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default SubFooter;
