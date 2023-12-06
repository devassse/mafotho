import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <>
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.400"} cursor={"pointer"}>
                See All
            </Text>
        </Flex>

        <SuggestedUser name="Coxi Otry" followers={2343} avatar='./profilepic.png'/>
        <SuggestedUser name="Florence Emit" followers={343} avatar='./profilepic.png'/>
        <SuggestedUser name="Mist Metric" followers={1243} avatar='./profilepic.png'/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            &copy; 2023 - built with &#129504; by {" "}
            <Link href='http://www.software.keomagroup.com' color={"blue.500"} fontSize={12} target='_blank'>Keoma Software</Link>
        </Box>
    </VStack>
    </>
  )
}

export default SuggestedUsers