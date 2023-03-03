import React from 'react';
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Socials() {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bolder" mb="6">
        Find Me on Social Networks
      </Text>
      <Box display="grid" gridTemplateRows="1fr 1fr 1fr" gap={12}>
        <Button colorScheme="purple" size="xl">
          <Text fontSize="3xl">
            <FaInstagram />
          </Text>
        </Button>
        <Button colorScheme="linkedin" size="xl">
          <Text fontSize="3xl">
            <FaLinkedin />
          </Text>
        </Button>
        <Button colorScheme="whatsapp" size="xl">
          <Text fontSize="3xl">
            <FaWhatsapp />
          </Text>
        </Button>
      </Box>
    </>
  )
}

export default Socials