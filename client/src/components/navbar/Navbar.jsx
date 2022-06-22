import React from 'react'
import {Flex, Center, Heading, Spacer,Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { BigIcon, NavButton } from '../theme/Theme'
import { BsSun, BsMoonStars, BsCart, BsHeart } from 'react-icons/bs';
import { FiLogIn, FiHome } from 'react-icons/fi';
import { CgDisplayGrid } from "react-icons/cg";


const Navbar = () => {

  const handleGenderChange = () => {

  }

  return (
    <Flex top={"0px"} h ={20} pr ={"10px"} w= {"100%"} shadow={"sm"} pos={"fixed"} zIndex = {2} bg = {"#1a202c"}>
        <Center>
          <Link to = "/">
            <Heading color = {"#0863be"} ml={5} display= {["none","none","block"]} fontSize={"40px"} fontWeight={900}  >
                Super Store
            </Heading>
          </Link>

        </Center>
        <Spacer/>

      
        <Center>
          <NavButton name = {<BigIcon label={"Home"} icon = {FiHome} />} path = {"/"} />
          <NavButton onClick={handleGenderChange} name={<BigIcon label={'All Products'} icon={CgDisplayGrid} />} path={'/products'} />
          <NavButton name={<BigIcon label={'Favourite'} icon={BsHeart} />} path={'/favourite'} />
          <NavButton name={<BigIcon label={'Cart'} icon={BsCart} />} path={'/cart'} />
          <Button px = {"0px"} borderRadius = {"50%"} border= {"none"} mr= {"7px"} >
          <BigIcon label={'Dark Mode'} icon={BsMoonStars} />
          </Button>
          <NavButton name={<BigIcon label={'Login'} icon={FiLogIn} />} path = {"/login"} /> 
        </Center>
    </Flex>
  )
}

export default Navbar