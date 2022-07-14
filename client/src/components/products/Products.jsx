import React, {useState, useEffect} from 'react'
import {Grid, Flex, Button, HStack, Heading, Text, Center, Spacer,useToast } from "@chakra-ui/react"
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import SortMenu from './SortMenu'
import { GridMenu } from './GridMenu'
import GenderMenu from './GenderMenu'
import CategoryMenu from './CategoryMenu'
import { setItem } from '../../utils/sessionStorage'
import Loading from "../loading/Loading"
import Error from "../loading/Error"
import EmptyList from "../loading/EmptyLIst"
import { getAllDataRequest, resetFilter, setPage } from '../../redux/allProducts/actions'
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";
import ProductBox from './ProductBox'



const Products = () => {
  const[reset, setReset] = useState(false)
  const[limit, setLimit] = useState(null)
  const[totalProducts, setTotalProducts] = useState(0)
  const[screen, setScreen] = useState(true)
  const dispatch = useDispatch()
  const toast = useToast()
  const {isLoading, products, isError, isGender, category, isSort, grid, size, page } = useSelector((state) => state.allProductsReducer, shallowEqual)

  const handlePageChange = (payload) => {
    dispatch(setPage(payload));
    setItem("page", page + payload);
  }

  const handleResetFilter = () => {
    dispatch(resetFilter())
    setReset(true)
  }

  

  useEffect(() => {
    dispatch(getAllDataRequest(page, setLimit, size, isGender, category, isSort, setTotalProducts, grid, reset, setReset, toast))
  },[page, isGender, category, reset, isSort, setLimit, grid, toast])
  


  return isLoading ? (<Loading/>): 
  isError ? (<Error/> ):(
  <>
    <Flex flexDirection={["column", "row"]} gap= {"20px"} justifyContent ={"space-between"} maxW= {1200}  m={'90px auto 20px'} px={'20px'} >
        <Center>
          <Heading fontSize = {["24px", "34px"]} >{
            isGender==="men" ? "Men": 
            isGender ==="women" ? "Women":
            isGender ==="kids" ? "Kids":
            "All"
          } </Heading>
          <Text fontSize={['18px', '24px']}>({totalProducts})</Text>
          <Spacer />
          <Button onClick={handleResetFilter} display={['inline-block', 'none']}>Reset</Button>
        </Center>
        <Center gap = {"10px"}>
          <Button onClick = {() => setScreen(!screen)}
           leftIcon={screen ? <RiFullscreenFill /> : <RiFullscreenExitLine />}
           display={['none', 'none', 'none', 'inline-block']}>
            View
          </Button>
          <GridMenu />
          <CategoryMenu />
          <GenderMenu />
          <SortMenu />
          <Button onClick = {handleResetFilter} display = {["none", "inline-block"]}>Reset</Button>
        </Center>
    </Flex>
    
    
    {products.length === 0 ? <EmptyList/> : <Grid className="expand" templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', `repeat(${grid}, 1fr)`]} gap={'20px'} p={'20px'} maxW={screen ? 1200 : '98%'} m={'40px auto'}>
        {products.map((e) => (
            <ProductBox  key = {e._id} data = {e}/>
        ))}
        
        </Grid>
        }
        <Flex justify = {"center"}>
          <HStack>
            <Button onClick = {() => {handlePageChange(-1)}} disabled = {page===1}>Prev</Button>
            <Text>{page}</Text>
            <Button onClick = {() => handlePageChange(1)} disable = {page===limit}>Next</Button>
          </HStack>

        </Flex>
  </>
  )
    
    
  
}

export default Products