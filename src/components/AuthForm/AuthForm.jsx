import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    console.log("Inputs", inputs);
    //Validate Fields
    if(!inputs.email || !inputs.password){
        alert("Please fill all Fields")
        return
    }
    // Navigate to HOME PAGE
    navigate("/")
  };

  return (
    <>
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Mafotho Logo" />
          <Input
            type="email"
            placeholder="E-mail"
            fontSize={14}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input type="password" placeholder="Password" fontSize={14} value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }/>
          {!isLogin ? (
            <Input
              type="password"
              placeholder="Confirm Password"
              fontSize={14}
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log In" : "Sign up"}
          </Button>

          <Flex
            w={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image w={5} src="/google.png" alt={"Sign in with Google"} />
            <Text mx={2} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have any account?" : "Already have any account?"}
          </Box>
          <Box
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
