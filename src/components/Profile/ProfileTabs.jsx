import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
// import {BsGrid3x3} from "react-icons/bs"

const ProfileTabs = () => {
  return (
    <>
      <Flex
        w={"full"}
        justifyContent={"center"}
        gap={{ base: 4, md: 10 }}
        textTransform={"uppercase"}
        fontWeight={"bold"}
      >
        <Flex
          borderTop={"1px solid white"}
          alignItems={"center"}
          p={3}
          gap={1}
          cursor={"pointer"}
        >
          <Box fontSize={16}>{/* <BsGrid3x3 /> */}</Box>
          <Text>Posts</Text>
        </Flex>

        <Flex
          alignItems={"center"}
          p={3}
          gap={1}
          cursor={"pointer"}
        >
          <Box fontSize={16}>{/* <BsGrid3x3 /> */}</Box>
          <Text>Saved</Text>
        </Flex>

        <Flex
          alignItems={"center"}
          p={3}
          gap={1}
          cursor={"pointer"}
        >
          <Box fontSize={16}>{/* <BsGrid3x3 /> */}</Box>
          <Text>Likes</Text>
        </Flex>
        
      </Flex>
    </>
  );
};

export default ProfileTabs;
