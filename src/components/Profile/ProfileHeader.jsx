import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
  return (
    <>
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
      >
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignSelf={"center"}
          mx={"auto"}
        >
          <Avatar src="./devasse.png" alt={"devasse"} />
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            gap={6}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={{ base: "xs", md: "sm" }}>@devasse</Text>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800"}}
              size={{base:"sm", md:"xs"}}
            >
              Edit Profile
            </Button>
          </Flex>
          <Flex alignItems={"center"} gap={{base:6,sm:4}} fontSize={12}>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>4</Text>
              Posts
            </Text>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>42</Text>
              Followers
            </Text>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>3</Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>@devasse</Text>
          </Flex>
            <Text fontSize={"sm"}>A Software Developer who is trying to surprise the World!!</Text>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileHeader;
