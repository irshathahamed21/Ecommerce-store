import React from 'react'
import {Menu, MenuButton, MenuList,MenuItem, Button} from "@chakra-ui/react"
import {useDispatch} from "react-redux"
import { BsFillCaretDownFill } from "react-icons/bs";
import { setCategory } from '../../redux/allProducts/actions';
import { setItem } from '../../utils/sessionStorage';


const CategoryMenu = () => {
    const dispatch = useDispatch()

    const handleCategoryChange = ({target:{value}}) => {
        dispatch(setCategory(value))
        setItem("category", value)
    }



  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
    Category
  </MenuButton>
  <MenuList>
    <MenuItem onClick = {handleCategoryChange} value = {"allCategory"}>All Categories</MenuItem>
    <MenuItem onClick = {handleCategoryChange} value = {"cloths"}>Cloths</MenuItem>
    <MenuItem onClick = {handleCategoryChange} value = {"shoes"}>Shoes</MenuItem>
    
  </MenuList>
</Menu>
  )
}

export default CategoryMenu