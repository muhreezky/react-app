import { Box, Icon, Text } from "@chakra-ui/react";
import { FaCode, FaFileWord, FaKeyboard, FaFigma } from "react-icons/fa";

function Services() {
  return (
    <Box px="8">
      <Text fontSize="3xl" color="black" mb="10">
        My Services
      </Text>
      <Box bgColor={"blue.600"} p="3" mb="4">
        <Text fontSize="6xl" color="white">
          <Icon as={FaCode} />
          <Text fontSize="2xl">
            Website Development
          </Text>
        </Text>
      </Box>
      <Box bgColor={"blue.600"} p="3" mb="4">
        <Text fontSize="6xl" color="white">
          <Icon as={FaFileWord} />
          <Text fontSize="2xl">
            Task Completion Service
          </Text>
        </Text>
      </Box>
      <Box bgColor={"blue.600"} p="3" mb="4">
        <Text fontSize="6xl" color="white">
          <Icon as={FaKeyboard} />
          <Text fontSize="2xl">
            Content Writing
          </Text>
        </Text>
      </Box>
      <Box bgColor={"blue.600"} p="3" mb="4">
        <Text fontSize="6xl" color="white">
          <Icon as={FaFigma} />
          <Text fontSize="2xl">
            Figma Slicing
          </Text>
        </Text>
      </Box>
    </Box>
  )
}

export default Services