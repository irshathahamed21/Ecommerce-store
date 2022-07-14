import React from 'react'
import {Menu, MenuButton, MenuList,MenuItem, Button} from "@chakra-ui/react"
import {useDispatch} from "react-redux"
import { BsFillCaretDownFill } from "react-icons/bs";
import { setGender } from '../../redux/allProducts/actions';
import { setItem } from '../../utils/sessionStorage';

const GenderMenu = () => {
    const dispatch = useDispatch()

    const handleGenderChange = ({target:{value}}) => {
        dispatch(setGender(value))
        setItem("IsGender", value)
    }
  return (
    <Menu>
  <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
    Gender
  </MenuButton>
  <MenuList>
    <MenuItem onClick = {handleGenderChange} value = {"allProducts"}>All Products</MenuItem>
    <MenuItem onClick = {handleGenderChange} value = {"men"}>Men</MenuItem>
    <MenuItem onClick = {handleGenderChange} value = {"women"}>Women</MenuItem>
    <MenuItem onClick = {handleGenderChange} value = {"kids"}>Kids</MenuItem>
  </MenuList>
</Menu>
  )
}

export default GenderMenu