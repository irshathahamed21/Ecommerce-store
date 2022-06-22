import React, {useState, useEffect} from 'react'
import {Box, Flex, Center} from "@chakra-ui/react"
import { SlideIcon } from "../theme/Theme";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { SlideText } from './Section';

const SlideShow = () => {

    const[index, setIndex] = useState(0)

    const arr = [
        "slideImages/slide0.png",
        "slideImages/slide1.png",
        "slideImages/slide2.png",
        "slideImages/slide3.png",
    ]

    const section = [
        "MEN SECTION",
        "WOMEN SECTION",
        "KIDS SECTION",
        "ALL PRODUCTS"
    ]
    
    const handleLeftArrow = () => {
        setIndex((prev) => prev === 0 ? arr.length-1 : prev - 1 )
    }

    const handleRightArrow = () => {
        setIndex((prev) => prev === arr.length-1 ? 0 : prev + 1 )
    }



    

  return (

    <Box w ={"100%"} backgroundImage = {arr[index]} backgroundRepeat={"no-repeat"}  backgroundSize={'cover'} h={['300px', '400px', '500px', '700px', '900px']} >
        <Center px = {"15px"} h={['300px', '400px', '500px', '700px', '900px']} >
            <Flex w= {"100%"} justifyContent= {"space-between"} >
                <Center>
                <SlideIcon icon={AiFillCaretLeft} onClick={handleLeftArrow} value={-1} />
                </Center>
                <SlideText path = {"/"} title = {section[index]}/>
                <Center>
                <SlideIcon icon={AiFillCaretRight} onClick={handleRightArrow} value={1} />
                </Center>
            </Flex>
        </Center>
    </Box>
    
  )
}

export default SlideShow