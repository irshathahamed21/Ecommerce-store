import React from 'react'
import { Container, Image} from "@chakra-ui/react"


const orderPlaced = () => {
  return (
    <Container my={['150px', '0px']} maxW={'470px'}>
        <Image src = "images/success.gif"/>
    </Container>
  )
}

export default orderPlaced