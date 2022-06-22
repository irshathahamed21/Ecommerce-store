import {Button, Flex, Icon, Text, Tooltip} from "@chakra-ui/react"

import {Link} from "react-router-dom"

export const NavButton = ({Link,name, pathName}) => {
    return <Button px= {"0px"} borderRadius={"50%"} border = {"none"} onClick = {onClick} ><Link to = {pathName}/>{name}</Button>
}


export const BigIcon = ({icon, label}) => {
    return <Tooltip label = {label} ><span ><Icon w= {"26px"} h = {"26px"}  as = {icon}/></span></Tooltip>
}

export const SlideIcon = () => {
    return <Icon
            onClick = {onClick}
            className = "expand"
            w={["30px", "40px", "50px"]}
            h= {["30px", "40px", "50px"]}
            color={"white"}
            _hover={{"bg":"white", "color":"black"}}
            padding={['5px', '7px', '10px']}
            borderRadius={'50%'}
            as={icon}
           >

    </Icon>
}

export const PriceText = ({ title, num, fs = '20px', fw }) => {
    return (
        <Flex fontWeight={fw} fontSize={fs} my={'15px'} justify={'space-between'}>
            <Text>{title}</Text>
            <Text>{num}</Text>
        </Flex>
    );
};


export const AddressText = ({ title, value, fs = '18px', fw }) => {
    return (
        <Flex gap={'20px'} fontWeight={fw} fontSize={fs} my={'15px'} >
            <Text>{title}</Text>
            <Text>{value}</Text>
        </Flex>
    );
};

