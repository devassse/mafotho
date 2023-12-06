import { Container } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  return (
    <>
    <Container maxW={"container.sm"} py={10} px={2}>
        <FeedPost img={"./devasse.png"} username={"devasse"} avatar={"./devasse.png"}/>
        <FeedPost img={"./img1.png"} username={"johndo"} avatar={"./img1.png"}/>
        <FeedPost img={"./img2.png"} username={"aruda"} avatar={"./img2.png"}/>
        <FeedPost img={"./img3.png"} username={"gother"} avatar={"./img3.png"}/>
    </Container>
    </>
  )
}

export default FeedPosts