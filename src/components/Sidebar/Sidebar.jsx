import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";

const Sidebar = () => {
  return (
    <>
      <Box
        h={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={6}
        position={"sticky"}
        top={0}
        left={0}
        px={{ base: 4, md: 2 }}
      >
        <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
          <Link
            top={"/"}
            as={RouterLink}
            pl={4}
            display={{ base: "none", md: "block" }}
            cursor={"pointer"}
          >
            <InstagramLogo />
          </Link>
          <Link
            top={"/"}
            as={RouterLink}
            p={2}
            display={{ base: "block", md: "none" }}
            cursor={"pointer"}
            borderRadius={6}
            w={10}
            _hover={{
              bg:"whiteAlpha.200"
            }}
          >
            <InstagramMobileLogo />
          </Link>
        </Flex>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>

        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
