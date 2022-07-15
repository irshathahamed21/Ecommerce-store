import React, {useState,useEffect} from 'react'
import {Box, Flex,Grid, Text, Button, Image} from "@chakra-ui/react"
import {useParams } from "react-router-dom"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { getOneDataRequest } from '../../redux/oneProduct/actions'
import Loading from '../loading/Loading'
import Error from '../loading/Error'
import { BsCart, BsHeart } from 'react-icons/bs';
import { notify, numberWithCommas } from "../../utils/extrafunctions";

const ProductDetails = () => {
    const[val, setVal] = useState(0)
    const {id} = useParams()
    const dispatch = useDispatch()
    const {isError,product,isLoading} = useSelector((state) => state.oneProductReducer, shallowEqual)
    console.log(product)
    const { name, description,img, price, category,size,brand,collections, gender, rating} = product
    console.log(img[0])
    const handleAddToCart = () => {

    }

    const handleFavourite = () => {

    }

    
    useEffect(() => {
        dispatch(getOneDataRequest(id))
    },[id,dispatch])

  return isLoading ? ( <Loading/> ):
         isError ? (<Error/> ) :  (
    <Flex flexDirection = {["column", "row"]} maxW= {"1100px"} p = "10px" gap = "10px" m = {"80px auto 40px"}>
        <Box>
            <Box overflow={"hidden"} boxShadow= "lg">
            <Image src = {img[val]} />
            </Box>
            <Box display = {"flex"} flexDirection = {"row"} justifyContent= {"center"} gap = {"20px"} my = {"20px"}>
            <Button onClick = {() => {setVal(val-1)}} disabled={val === 0}>Prev</Button>
            <Button onClick = {() => setVal(val+1)} disabled = {val === img.length-1} >Next</Button>
            </Box>
        </Box>
        <Box  p = {"30px"}>
        <Text my={2} fontSize={18} color={'grey'}  >{description}</Text>
                <Text my={2} fontSize={['22px', '30px']}><b>{name}</b></Text>
                <Text my={4} fontSize={['30px', '40px']} color={'red'}>
                    <Text color={'grey'} as='del'>₹{numberWithCommas(price + Math.floor(0.2 * price))}.00</Text> &nbsp;
                    ₹{numberWithCommas(price)}.00
                </Text>
                <Text my={2} fontSize={20} color={'grey'}>Brand: {brand}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Collection: {collections}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Rating: {rating}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Sizes: {size.join(", ")}</Text>
                <Text my={2} fontSize={20} color={'grey'}>Gender: {gender === 'men' ? 'Men' : 'Women'}</Text>
                <Flex mr={['0px', '0px', '30px']} gap={'12px'} flexDirection={'column'}>
                    <Button onClick={handleAddToCart} variant={'solid'} leftIcon={<BsCart />} fontSize={'18px'} h={'50px'}>Add to Cart</Button>
                    <Button onClick={handleFavourite} leftIcon={<BsHeart />} fontSize={'18px'} h={'50px'}>Add to Favourite</Button>
                </Flex>
        </Box>
    </Flex>
  )
}

export default ProductDetails