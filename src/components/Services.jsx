import { Box, Icon, Text } from "@chakra-ui/react";
import { FaCode, FaFileWord, FaKeyboard, FaFigma } from "react-icons/fa";

function Services() {
  return (
    <Box px="8">
      <Box bgColor={"blue.600"} p="3" mb="4">
        <Text fontSize="6xl" color="white">
          <Icon as={FaCode} />
          <Text fontSize="4xl">
            Website Development
          </Text>
        </Text>
      </Box>
      <Box bgColor={"blue.600"} p="3" mb="4">
        <Text fontSize="6xl" color="white">
          <Icon as={FaFileWord} />
          <Text fontSize="4xl">
            Task Completion Service
          </Text>
        </Text>
      </Box>
      <Box bgColor={"blue.600"} p="3" mb="4">
        <Text fontSize="6xl" color="white">
          <Icon as={FaKeyboard} />
          <Text fontSize="4xl">
            Content Writing
          </Text>
        </Text>
      </Box>
      <Box bgColor={"blue.600"} p="3" mb="4">
        <Text fontSize="6xl" color="white">
          <Icon as={FaFigma} />
          <Text fontSize="4xl">
            Figma Slicing
          </Text>
        </Text>
      </Box>
    </Box>
  )
}

export default Services