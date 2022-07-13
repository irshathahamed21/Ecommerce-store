import React from 'react'
import {Menu, MenuButton, MenuList,MenuItem} from "@chakra-ui/react"
import {useDispatch} from "react-redux"
import { BsFillCaretDownFill } from "react-icons/bs";
import { setGender } from '../../redux/allProducts/actions';

const SortMenu = () => {
    const dispatch = useDispatch()

    const handleSortChange = ({target:{value}}) => {
        dispatch(setSort(value))
    }
  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
    Gender
  </MenuButton>
  <MenuList>
    <MenuItem onClick = {handleSortChange} value = {"priceLH"}>Price: Low - High</MenuItem>
    <MenuItem onClick = {handleSortChange} value = {"priceHL"}>Price: High - Low</MenuItem>
    <MenuItem onClick = {handleSortChange} value = {"ratingLH"}>Rating: Low - High</MenuItem>
    <MenuItem onClick = {handleSortChange} value = {"ratingHL"}>Rating: High - Low</MenuItem>
    <MenuItem onClick = {handleSortChange} value = {"nameAZ"}>Name: A - Z</MenuItem>
    <MenuItem onClick = {handleSortChange} value = {"nameZA"}>Name: Z - A</MenuItem>
 </MenuList>
</Menu>
  )
}

export default SortMenu