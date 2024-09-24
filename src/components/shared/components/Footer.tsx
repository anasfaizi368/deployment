import { Box, Flex, Link, Text } from '@chakra-ui/react';
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaPinterest,
  FaSnapchatGhost,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => {
  const orange300 = '#e3b77f';
  return (
    <Box bg="#4a4948" color="gray.200" pt={4} px={2} padding={10}>
      <Flex justify="center" align="center" wrap="wrap">
        <Flex columnGap={{base:"15px" , lg:"45px"}}>
          <Link href="#" isExternal mx={0}>
            <FaLinkedin size={30} color={orange300} />
          </Link>
          <Link href="#" isExternal mx={0}>
            <FaInstagram size={30} color={orange300} />
          </Link>
          <Link href="#" isExternal mx={0}>
            <FaFacebook size={30} color={orange300} />
          </Link>
          <Link href="#" isExternal mx={0}>
            <FaTiktok size={30} color={orange300} />
          </Link>
          <Link href="#" isExternal mx={0}>
            <FaYoutube size={30} color={orange300} />
          </Link>
          <Link href="#" isExternal mx={0}>
            <FaSnapchatGhost size={30} color={orange300} />
          </Link>
          <Link href="#" isExternal mx={0}>
            <FaPinterest size={30} color={orange300} />
          </Link>
        </Flex>
      </Flex>
      <Flex justify="space-between" align="center" wrap="wrap">
        <Flex align="center" wrap="wrap">
          <Link mx={0}  marginTop="1rem" href="#" _hover={{ textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
          <Link mx={3}  marginTop="1rem" href="#" _hover={{ textDecoration: 'underline' }}>
            Terms of Use
          </Link>
          <Link mx={3}  marginTop="1rem" href="#" _hover={{ textDecoration: 'underline' }}>
            Cookie Policy
          </Link>
        </Flex>
        <Flex justify="space-between" mt={4} align="center" wrap="wrap">
          <Text fontSize="sm">© Tuaja Luxury Resorts</Text>
          <Text fontSize="sm">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
