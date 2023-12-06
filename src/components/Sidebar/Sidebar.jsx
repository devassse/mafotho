import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create Post",
    },
    {
      icon: (
        <Avatar size={"sm"} name="João Devson Mucavel" src="/devasse.png" />
      ),
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];
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
            to={"/"}
            as={RouterLink}
            pl={4}
            display={{ base: "none", md: "block" }}
            cursor={"pointer"}
          >
            <InstagramLogo />
          </Link>
          <Link
            to={"/"}
            as={RouterLink}
            p={2}
            display={{ base: "block", md: "none" }}
            cursor={"pointer"}
            borderRadius={6}
            w={{ base: 10, md: "full" }}
            _hover={{
              bg: "whiteAlpha.200",
            }}
          >
            <InstagramMobileLogo />
          </Link>
          <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {sidebarItems.map((item, index) => (
              <Tooltip
                key={index}
                hasArrow
                label={item.text}
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
              >
                <Link
                  display={"flex"}
                  to={item.link || null}
                  as={RouterLink}
                  alignItems={"center"}
                  gap={4}
                  _hover={{ bg: "whiteAlpha.400" }}
                  borderRadius={6}
                  p={2}
                  w={{ base: 10, md: "full" }}
                  justifyContent={{ base: "center", md: "flex-start" }}
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                </Link>
              </Tooltip>
            ))}
          </Flex>
          <Tooltip
            hasArrow
            label={"Log out"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Link
              display={"flex"}
              to={"/auth"}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              mt={"auto"}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <BiLogOut size={25} />
              <Box display={{ base: "none", md: "block" }}>Log out</Box>
            </Link>
          </Tooltip>
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
