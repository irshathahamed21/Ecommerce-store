
import React, {useState} from 'react'
import {VStack, Container, Heading, Input ,Button, Text, useToast} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { loginRequest } from '../../redux/auth/actions';



const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()
    const[login, setLogin] = useState({email:"", password:""})

    const handleChange = ({target:{name,value}}) => {
        setLogin({...login, [name]:value})
    }

    const handleSubmit = () => {
        dispatch(loginRequest(login, toast, navigate) )
    }

  return (
    <Container border = {"1px solid #edf2f7"} mt={['60px', '20px']} borderRadius={'2%'} p={['10px', '20px', '30px']} maxW={'400px'}>
        <VStack gap = {"10px"} maxW= {"480px"} >
        <Heading>Login</Heading>
        <Input name = "email" type = "email" placeholder = "Email" onChange = {handleChange} value = {login.email} />
        <Input name = "password" type = "password" placeholder = "Password" onChange = {handleChange} value = {login.password} />
        <Button width = {"100%"} onClick = {handleSubmit}>Login</Button>
        <Link to={'/signup'}><Text pt={'20px'} color={'gray.400'}>New user ? Signup</Text></Link>
        </VStack>
    </Container>         


  )
}

export default Login