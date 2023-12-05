import { Box, Flex, calc } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const path = useLocation();
  let pathname = path.pathname

  return (
    <>
      <Flex>
        {/** SideBar*/}
        {pathname !== "/auth" ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <Sidebar />
          </Box>
        ) : null}
        {/** Sidebar */}
        {/** Main Content*/}
        <Box
          flex={1}
          w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        >
          {children}
        </Box>
        {/** Main Content*/}
      </Flex>
    </>
  );
};

export default PageLayout;
