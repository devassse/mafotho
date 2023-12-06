import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowing] = useState(false);
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar
            src={avatar}
            name={name}
            alt={name}
            size={"md"}
            border={"1px solid white"}
          />
          <VStack spacing={2} alignItems={"flex-start"}>
            <Text fontSize={12} fontWeight={"bold"}>
              {name}
            </Text>
            <Text fontSize={11} color={"gray.500"}>
              {followers} Followers
            </Text>
          </VStack>
        </Flex>
        <Button
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.400"}
          cursor={"pointer"}
          _hover={{color:"white"}}
          onClick={()=>{setIsFollowing(!isFollowed)}}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </Flex>
    </>
  );
};

export default SuggestedUser;
