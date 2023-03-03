import React from 'react';
import { Box, Button, Stack, Text, Link } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Socials() {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bolder" mb="6">
        Find Me on Social Networks
      </Text>
      <Box display="flex" flexDirection={"column"}>
        <Link href="https://instagram.com/muh.reezky" isExternal>
          <Button h colorScheme="purple" size="xl" px="7" py="3" m="auto" mb="4" width="full">
            <Text fontSize="3xl" display="flex" justifyContent="left" alignItems="left">
              <FaInstagram /> &nbsp; @muh.reezky
            </Text>
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/muhreezky" isExternal>
          <Button colorScheme="linkedin" size="xl" px="7" py="3" m="auto" mb="4" width="full">
            <Text fontSize="3xl" display="flex" justifyContent="left" alignItems="left">
              <FaLinkedin /> &nbsp; Muhammad Rizkiansyah
            </Text>
          </Button>
        </Link>
        <Link href="https://wa.me/6281380110502" isExternal>
          <Button colorScheme="whatsapp" size="xl" px="7" py="3" m="auto" mb="4" width="full">
            <Text fontSize="3xl" display="flex" justifyContent="left" alignItems="left">
              <FaWhatsapp /> &nbsp; +6281380110502
            </Text>
          </Button>
        </Link>
      </Box>
    </>
  )
}

export default Socials