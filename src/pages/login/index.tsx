import { PasswordField } from '@app/components/Forms/PasswordField';
import { DividerWithText } from '@app/components/DividerWithText';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  SimpleGrid,
  Box,
  Text
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import  Logo  from '@app/components/Logo'

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      
        <Stack spacing={4} w={'full'} maxW={'md'}>
            <Logo />
          
          <Heading fontSize={'2xl'}>Login 🤙  </Heading>
          <Text fontSize={'md'} fontWeight={'500'} >Lorem ipsum here too!</Text>


          <SimpleGrid mt="6" columns={1} spacing="3">
            <Button color="currentColor" variant="outline">
              <FaFacebook />  <Text p={'1rem'}> Login with Facebook</Text>
            </Button>
            <Button color="currentColor" variant="outline">
              <FaGoogle />   <Text p={'1rem'}> Login with Google</Text>
            </Button>

          </SimpleGrid>


          <DividerWithText mt="6">or continue with</DividerWithText>

          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <PasswordField />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
            <Text>Not registered yet? 
            <Link color={'blue.700'} fontWeight={'bold'}> Create an Account</Link>
              </Text>


          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} display={{md: 'none',  lg: 'flex'}} backgroundColor={'#8D37FF'}>
       
      </Flex>
    </Stack>
  );
}