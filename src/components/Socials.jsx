import React from 'react';
import { Box, Button, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Socials() {
  return (
    <>
      <Text fontSize="3xl" color="black" mb="10">
        My Socials
      </Text>
      <Stack spacing={3}>
        <Link href="https://instagram.com/muh.reezky" isExternal>
          <Button colorScheme="red" size="xl" px="7" py="3" m="auto" mb="4" width="full">
            <Text fontSize="3xl" >
              <Icon as={FaInstagram} /> &nbsp; Instagram
            </Text>
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/muhreezky" isExternal>
          <Button colorScheme="linkedin" size="xl" px="7" py="3" m="auto" mb="4" width="full">
            <Text fontSize="3xl" >
              <Icon as={FaLinkedin} /> &nbsp; LinkedIn
            </Text>
          </Button>
        </Link>
        <Link href="https://wa.me/6281380110502" isExternal>
          <Button colorScheme="whatsapp" size="xl" px="7" py="3" m="auto" mb="4" width="full">
            <Text fontSize="3xl" >
              <Icon as={FaWhatsapp} /> &nbsp; Whatsapp
            </Text>
          </Button>
        </Link>
      </Stack>
    </>
  )
}

export default Socials