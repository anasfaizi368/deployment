import { useLanguage } from '@/components/context/LanguageContext';
import {
  Box,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { BsGlobe } from 'react-icons/bs';
import { IoReorderThreeOutline } from 'react-icons/io5';
import Image from 'next/image';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const isRTL = language === 'ar';
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      as="header"
      position="fixed"
      width="100%"
      zIndex={9999}
      px={4}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: scroll ? 'black' : 'transparent',
        opacity: scroll ? '0.8' : '1',
        zIndex: -1,
      }}
    >
      <Flex align="center" px={8} py={4} gap={10} flexDirection={isRTL ? 'row-reverse' : 'row'}>
        <Flex align="center" justify="space-between" width="100%">
          <Box order={isRTL ? 2 : 1}>
            <Link href='/'>
              <Box w={{ base: '100px', sm: '100px', md: '100px', lg: '300px' }}>
                <Image
                  src='/NavLogo.png'
                  alt='nav logo'
                  layout='responsive'
                  width={300}
                  height={100}
                />
              </Box>
            </Link>
          </Box>
          <HStack
            as="nav"
            gap={8}
            display={{ base: 'none', md: 'flex' }}
            color="white"
            flexDirection={isRTL ? 'row-reverse' : 'row'}
            fontSize={{ base: 'sm', md: 'l', xl: 'xl' }}
            order={isRTL ? 1 : 2}
          >
            <Menu>
              <MenuButton
                as={Link}
                fontWeight="bold"
                fontFamily="TrajanPro-Bold"
                _hover={{ textDecoration: 'none', color: 'gray.200' }}
                _focus={{ color: 'yellow.500' }}
                _active={{ color: 'yellow.500' }}
                fontSize={{ base: 'sm', md: 'l', xl: 'xl' }}
              >
                {isRTL ? 'العلامة التجارية' : 'The Brand'}
              </MenuButton>
              <MenuList
                color="yellow.500"
                bg="#70675f"
                border="unset"
                fontSize={{ base: 'sm', lg: 'lg' }}
              >
                <Link href="/about-us">
                  <MenuItem bg="#70675f" fontFamily="TrajanPro-Bold">
                    {isRTL ? 'معلومات عنا' : 'About Us'}
                  </MenuItem>
                </Link>
                <Link href="/our-philosophy">
                  <MenuItem bg="#70675f" fontFamily="TrajanPro-Bold">
                    {isRTL ? 'فلسفتنا' : 'Our Philosophy'}
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Link}
                fontWeight="bold"
                fontFamily="TrajanPro-Bold"
                _hover={{ textDecoration: 'none', color: 'gray.200' }}
                fontSize={{ base: 'sm', md: 'l', xl: 'xl' }}
              >
                {isRTL ? 'المنتجعات' : 'Resorts'}
              </MenuButton>
              <MenuList
                color="yellow.500"
                bg="#70675f"
                border="unset"
                fontSize={{ base: 'sm', lg: 'lg' }}
                fontFamily="TrajanPro-Bold"
              >
                <Link href='/premium-farm-resort'>
                  <MenuItem bg="#70675f">
                    {isRTL ? 'منتجع فاخر' : 'Premium Farm Resort'}
                  </MenuItem>
                </Link>
                <Link href='/eco-resort'>
                  <MenuItem bg="#70675f">
                    {isRTL ? 'منتجع صديق للبيئة' : 'Eco Resort'}
                  </MenuItem>
                </Link>
                <Link href='/adventure-resort'>
                  <MenuItem bg="#70675f">
                    {isRTL ? 'منتجع مغامرات' : 'Adventure Resort'}
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Link
              href="/media-center"
              fontWeight="bold"
              _hover={{ textDecoration: 'none', color: 'gray.200' }}
              fontFamily="TrajanPro-Bold"
            >
              {isRTL ? 'مركز الإعلام' : 'Media Center'}
            </Link>

            <Link
              href="/contact-us"
              fontWeight="bold"
              _hover={{ textDecoration: 'none', color: 'gray.200' }}
              fontFamily="TrajanPro-Bold"
            >
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </Link>
            <>
              <Box color="white">
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Language"
                    icon={<Icon as={BsGlobe} w={6} h={6} />}
                    variant="outline"
                    border="unset"
                    color="white"
                    _hover={{ bg: 'transparent' }}
                    _focus={{ boxShadow: 'none' }}
                    _active={{ bg: 'transparent' }}
                    _focusVisible={{ outline: 'none' }}
                  />
                  <MenuList
                    color="yellow.500"
                    bg="#70675f"
                    border="unset"
                    fontSize="lg"
                  >
                    <MenuItem
                      bg="#70675f"
                      _hover={{ textDecoration: 'underline' }}
                      fontFamily="TrajanPro-Bold"
                      onClick={() => toggleLanguage('en')}
                    >
                      English
                    </MenuItem>
                    <MenuItem
                      bg="#70675f"
                      _hover={{ textDecoration: 'underline' }}
                      fontFamily="TrajanPro-Bold"
                      onClick={() => toggleLanguage('ar')}
                    >
                      Arabic
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </>
          </HStack>
          <IconButton
            icon={<IoReorderThreeOutline />}
            color="white"
            onClick={toggleDrawer}
            display={{ base: 'block', md: 'none' }} aria-label={''}
            variant="outline"
            border="unset"
            _hover={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
            _active={{ bg: 'transparent' }}
            _focusVisible={{ outline: 'none' }}
          />
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={toggleDrawer}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              {isRTL ? 'القائمة' : 'Menu'}
            </DrawerHeader>
            <DrawerBody >
              <Flex direction="column" gap={4}>
                <>
                  <Box color="white">
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Language"
                        icon={<Icon as={BsGlobe} w={6} h={6} />}
                        variant="outline"
                        border="unset"
                        color="black"
                        _hover={{ bg: 'transparent' }}
                        _focus={{ boxShadow: 'none' }}
                        _active={{ bg: 'transparent' }}
                        _focusVisible={{ outline: 'none' }}
                      />
                      <MenuList
                        color="yellow.500"
                        bg="#70675f"
                        border="unset"
                        fontSize="lg"
                      >
                        <MenuItem
                          bg="#70675f"
                          _hover={{ textDecoration: 'underline' }}
                          fontFamily="TrajanPro-Bold"
                          onClick={() => toggleLanguage('en')}
                        >
                          English
                        </MenuItem>
                        <MenuItem
                          bg="#70675f"
                          _hover={{ textDecoration: 'underline' }}
                          fontFamily="TrajanPro-Bold"
                          onClick={() => toggleLanguage('ar')}
                        >
                          Arabic
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                </>
                <Link
                  href="/about-us"
                  fontWeight="bold"
                  color="yellow.500"
                  fontFamily="TrajanPro-Bold"
                >
                  {isRTL ? 'معلومات عنا' : 'About Us'}
                </Link>
                <Link
                  href="/our-philosophy"
                  fontWeight="bold"
                  color="yellow.500"
                  fontFamily="TrajanPro-Bold"
                >
                  {isRTL ? 'فلسفتنا' : 'Our Philosophy'}
                </Link>
                <Link
                  href="/premium-farm-resort"
                  fontWeight="bold"
                  color="yellow.500"
                  fontFamily="TrajanPro-Bold"
                >
                  {isRTL ? 'منتجع فاخر' : 'Premium Farm Resort'}
                </Link>
                <Link
                  href="/eco-resort"
                  fontWeight="bold"
                  color="yellow.500"
                  fontFamily="TrajanPro-Bold"
                >
                  {isRTL ? 'منتجع صديق للبيئة' : 'Eco Resort'}
                </Link>
                <Link
                  href="/adventure-resort"
                  fontWeight="bold"
                  color="yellow.500"
                  fontFamily="TrajanPro-Bold"
                >
                  {isRTL ? 'منتجع مغامرات' : 'Adventure Resort'}
                </Link>
                <Link
                  href="/media-center"
                  fontWeight="bold"
                  color="yellow.500"
                  fontFamily="TrajanPro-Bold"
                >
                  {isRTL ? 'مركز الإعلام' : 'Media Center'}
                </Link>
                <Link
                  href="/contact-us"
                  fontWeight="bold"
                  color="yellow.500"
                  fontFamily="TrajanPro-Bold"
                >
                  {isRTL ? 'اتصل بنا' : 'Contact Us'}
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;
