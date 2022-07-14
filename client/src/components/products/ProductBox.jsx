import React from 'react'
import {Box,Flex,Image,Text} from "@chakra-ui/react"
import { numberWithCommas, shortString } from "../../utils/extrafunctions";
import {Link} from "react-router-dom";


const ProductBox = ({data}) => {
  const {_id, img, name, description, price, rating} = data

  return (
    <>
    <Link to = "/">
        <Flex flexDirection={"column"} boxShadow= "sm" >
          <Box>
            <Image src = {img[0]}/>
          </Box>
          <Box>
            <Text fontWeight={600} fontSize={18} m={"10px 10px 2px"}>{shortString(name,15)}</Text>
            <Text fontSize={14} color={'grey'} m={"2px 10px 2px"}>{description}</Text>
            <Text m={"2px 10px 2px"} fontSize={['20px']} color={'red'}>
            <Text color={'grey'} as='del'>₹{numberWithCommas(price + Math.floor(0.2 * price))}</Text> &nbsp;
            ₹{numberWithCommas(price)}
            </Text>
            <Text fontSize={14} color={'grey'} m={"2px 10px 2px"}>20% OFF</Text>
            <Text fontSize={14} color={'grey'} m={"1px 10px 2px"}>Rating: {rating}</Text>
          </Box>
        </Flex>
    </Link>

    </>
  )
}

export default ProductBox