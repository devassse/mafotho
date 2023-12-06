import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'
const FeedPost = ({img, username, avatar}) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box w={"full"} borderRadius={4}>
        <Image w={"full"} src={img} alt={username} borderRadius={4}/>
      </Box>
      <PostFooter username={username}/>
    </>
  )
}

export default FeedPost