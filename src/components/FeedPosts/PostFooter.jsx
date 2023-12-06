import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

const PostFooter = ({username}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mt={2}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} like{likes > 1 ? 's' : ''}
      </Text>
      <Text fontWeight={700} fontSize={"sm"}>
        {username}_ {" "}
        <Text as={"span"} fontWeight={400}>
          feeling good
        </Text>
      </Text>
      <Text fontSize={12} color={"gray"}>
        View all 1,000 Comments
      </Text>
      <Flex alignItems={"center"} justifyContent={"center"} gap={2} w={"full"} mb={10}>
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment"}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{color: "white"}}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
};

export default PostFooter;
