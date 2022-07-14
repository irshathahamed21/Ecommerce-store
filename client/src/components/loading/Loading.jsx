import React from 'react'
import {Container ,Image} from "@chakra-ui/react"


const Loading = () => {
  return (
    <Container my={['150px', '0px']} maxW={'470px'}>
        <Image src="images/loading.gif" />
    </Container>
  )
}

export default Loading