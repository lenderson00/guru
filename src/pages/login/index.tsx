import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Box,
  Link,
  Stack,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, FacebookAuthProvider  } from "firebase/auth";
import { useRouter } from 'next/router'

import  Logo  from '@app/components/Logo'
import { auth } from '@app/firebase';
import { PasswordField } from '@app/components/Forms/PasswordField';
import { DividerWithText } from '@app/components/DividerWithText';

import { ChangeEvent, useState, useContext, useEffect } from 'react';
import { UserContext } from '@app/components/AuthContext';


export default function Login() {

  const { user } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  

  const changeInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
  }

  const changeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
  }

  const router = useRouter();

  const login = async () => {
    try {
      const result =  await signInWithEmailAndPassword (auth, email, password)
      toast.success('Wellcome to Genshin Guru!')
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
      toast.error('Error on authenticate!')
    }
  
  }
 
  useEffect(() => {
    console.log(user)
  
    if (user) {
      router.push('/dashboard')
    }

  }, [])
  return ( 
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Logo />
          
          <Heading fontSize={'2xl'}>Login 🤙  </Heading>
          <Text fontSize={'md'} fontWeight={'500'} >Lorem ipsum here too!</Text>


          <SimpleGrid mt="6" columns={1} spacing="3">
            <LoginWithFacebook />
            <LoginWithGoogle />
          </SimpleGrid>


          <DividerWithText mt="6">or continue with</DividerWithText>

          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={changeInputEmail}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <PasswordField onChange={changeInputPassword}/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Box>
              <Button colorScheme={'blue'} variant={'solid'} w={'100%'} onClick={login} >
                Sign in
              </Button>
              <Text mt={3}>Not registered yet? 
                <Link color={'blue.500'} fontWeight={'bold'}> Create an Account</Link>
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} display={{base: 'none', md:'none',  lg: 'flex'}} backgroundColor={'#8D37FF'}>
       
      </Flex>
    </Stack>
  );
}


const LoginWithGoogle: React.FC = () => {
    const provider = new GoogleAuthProvider()
    const router = useRouter();

    const login = async () => {
      try {
        await  signInWithPopup(auth, provider)
        toast.success('Wellcome to Genshin Guru!')
        router.push('/dashboard')
      } catch (err) {
        toast.error('Error on authenticate!')
      }
    
     
    }

    return (
      <Button color="currentColor" variant="outline" onClick={login} >
        <FaGoogle />   <Text p={'1rem'}> Login with Google</Text>
      </Button>
    )
}

const LoginWithFacebook: React.FC = () => {
  const provider = new FacebookAuthProvider()
  const router = useRouter();

  const login = async () => {
    try {
      await signInWithPopup(auth, provider)
      toast.success('Wellcome to Genshin Guru!')
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
      toast.error('Error on authenticate!')
    }
  }

  return (
    <Button color="currentColor" variant="outline" onClick={login} >
      <FaFacebook />   <Text p={'1rem'}> Login with Facebook</Text>
    </Button>
  )
}