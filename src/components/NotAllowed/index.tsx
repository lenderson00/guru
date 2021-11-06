import { Box, Heading, Text, Button,Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function NotAllowed() {
  return (
    <Box textAlign="center" py={10} px={6} height={'100vh'} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems="center">
    <Box display="inline-block">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg={'red.500'}
        rounded={'50px'}
        w={'55px'}
        h={'55px'}
        textAlign="center">
        <CloseIcon boxSize={'20px'} color={'white'} />
      </Flex>
    </Box>
    <Heading as="h2" size="xl" mt={6} mb={2}>
      This is the headline
    </Heading>
    <Text color={'gray.500'}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et<br /> dolore magna aliquyam erat, sed diam
      voluptua.
    </Text>

    <Button
        width='20%'
        mt={'2rem'}
        colorScheme="teal"
        bgGradient="linear(to-r, purple.400, purple.500, purple.600)"
        color="white"
        _hover={{
          opacity: '0.8'
        }}
        _active={{
          bgGradient:"linear(to-r, purple.400, purple.500, purple.600)",
          opacity: '0.9'
        }}
        variant="solid">
        Go to Home
      </Button>
  </Box>
  );
}