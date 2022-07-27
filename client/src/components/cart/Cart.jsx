import React, {useEffect} from 'react'
import {Button, Image, Text, Box, Flex,Grid,Heading, useToast,Center} from "@chakra-ui/react"
import OrderSummary from './OrderSummary'
import CartBox from './CartBox'
import { useDispatch, useSelector } from 'react-redux'
import { getCartDataRequest } from '../../redux/cartProducts/actions'
import Loading from "../loading/Loading"
import Error from "../loading/Error"
import EmptyLIst from '../loading/EmptyLIst'
import {Link} from "react-router-dom"

const Cart = () => {

    const dispatch = useDispatch()
    const toast = useToast()
    const token = useSelector((state) => state.authReducer.token)
    const {isLoading, isError, cart, amount, address} = useSelector((state) => state.cartReducer)

    
    useEffect(()=> {
        dispatch(getCartDataRequest(toast, token))
    },[dispatch, token, toast])


  return isLoading ? <Loading/> :
        isError ? <Error/> : (
   <>

    <Flex justifyContent={"space-between"} maxW={1200} m={'90px auto 20px'} px={'20px'}>
        <Center color={'#0863be'}>
        <Heading  fontSize={['28px', '35px']}>Cart &nbsp;</Heading>
        <Text  fontSize={['18px', '24px']} >({cart.length})</Text>
        </Center>
    </Flex>
   
    <Grid templateColumns={[]}>
            <Box>
            {cart.length === 0 ? <EmptyLIst/> : <Flex direction={"column"}>
               
                {cart.map((e,i) => (
                    <CartBox key = {i} data = {e} />
                ))} 
                 <Flex flexDirection={['column','row','row','row']} p={'20px'} justify={'end'} gap={'10px'}>
                    <Button><Link to={'/products'}>Add more Products</Link></Button>
                    <Button variant={'solid'}><Link to={'/checkout'}>Proceed to Checkout</Link></Button>
                </Flex>
            </Flex>}
            </Box>
            <OrderSummary data = {amount}/>
    </Grid>

   </>
  )
}

export default Cart