import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
  return (
    <>
        <Box border={"1px solid grey"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src='/logo.png' h={24} cursor={"pointer"} alt='Mafotho Logo'/>
                <Input type='email' placeholder='E-mail' fontSize={14}/>
                <Input type='password' placeholder='Password' fontSize={14}/>
                {!isLogin ? (
                    <Input type='password' placeholder='Confirm Password' fontSize={14}/>
                ) : null}

                <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}>
                    {isLogin ? "Log In" : "Sign up"}
                </Button>

                <Flex w={"full"} alignItems={"center"} justifyContent={"center"} my={4} gap={1}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                </Flex>

                <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image w={5} src='/google.png' align={"Sign in with Google"}/>
                    <Text mx={2} color={"blue.500"}>Log in with Google</Text>
                </Flex>
            </VStack>
        </Box>
    </>
  )
}

export default AuthForm