import React from 'react'
import {Container, Button, Input, Heading, VStack,Select, Text} from "@chakra-ui/react"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {Link, useNavigate} from "react-router-dom"


const Signup = () => {
    const[signup, setSignup] = useState({ name:"", mobile:"", email:"", gender:"", password:"",})

    const handleChange = ({target:{name, value}}) => {
        setSignup({...signup, [name]:value })
    }


  return (
    <Container border = {"1px solid #edf2f7"} mt={['60px', '20px']} borderRadius={'2%'} p={['10px', '20px', '30px']} maxW={'400px'}>
        <VStack gap = {"10px"}>
            <Heading> Signup</Heading>
            <Input name = "name" value = {signup.name} onChange = {handleChange} type = "text" placeholder = "Name"  />
            <Input name = "mobile" value = {signup.mobile} onChange = {handleChange} type = "text" placeholder = "Mobile"  />
            <Input name = "email" value = {signup.email} onChange = {handleChange} type = "email" placeholder = "Email"  />
            <Select placeholder='Gender' onChange = {signup.gender} name = "gender" value = {signup.gender} color = {"gray.500"}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Select>            
            <Input name = "password" value = {signup.password} onClick = {handleChange} type = "password" placeholder = "Password"  />
            <Button width = {"100%"} >Create Account</Button>
            <Link to={'/login'}><Text pt={'20px'} color={'gray.400'}>Already a user? Login</Text></Link>
       </VStack>
    </Container>
  )
}

export default Signup