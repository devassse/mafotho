import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

const HomePage = () => {
  return (
    <>
      <Container mx={"container.lg"}>
        <Flex gap={10}>
          <Box flex={2} py={10}>
            <FeedPosts />
          </Box>
          <Box
            flex={3}
            mr={20}
            display={{ base: "none", lg: "block" }}
            maxW={"300px"}
            border={"1px solid red"}
          >
            Sugested
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default HomePage;
