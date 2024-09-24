import React from 'react'
import { Box,Text,Link,Flex, } from '@chakra-ui/react';
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaPinterest,
    FaSnapchatGhost,
    FaYoutube,
    FaTiktok,
    FaEnvelope,
  } from 'react-icons/fa';
const FollowUs = () => {
    const orange300 = '#e3b77f';
  return (
    <Box
height="40vh"
display="flex"
justifyContent="space-evenly"
alignItems={{base:"start" , lg:"center"}}
flexDirection={{base: "column" , lg:"row"}}
paddingLeft={{base:"2rem" , lg:"0rem"}}
  >
    <Flex  justify="center" align="start" wrap="wrap"flexDirection="column">
    <Link href="#" isExternal mx={0}>
            <FaEnvelope size={30} color={orange300} />
          </Link>
    <Text fontSize={20} fontWeight={600} >Email</Text>
    <Text fontSize={16} >abdckfirn@gmail.com</Text>
    <Text fontSize={16} >abdckfirn@gmail.com</Text>

    </Flex>
 

<Flex justify="center" align="start" wrap="wrap"flexDirection="column">
    <Text fontSize={20} fontWeight={600}>FOLLOW US</Text>
        <Flex columnGap={{base:"15px" , lg:"45px"}} marginTop="1rem">
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
  </Box>
  )
}

export default FollowUs
