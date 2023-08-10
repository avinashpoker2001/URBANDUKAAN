import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { register } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ), 
        url("https://res.cloudinary.com/dhxpfw6in/image/upload/v1674467543/joanna-kosinska-1_CMoFsPfso-unsplash_xjqphm.jpg") center;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
` 

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width:"75%"})};
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px;
`


const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;

`
const Error = styled.span`
    color:red;
`



const Register = ()=>{
    const [user,setUser]= useState({});
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        setUser(prev=>{
            return{...prev,[e.target.name]:e.target.value}
        })
    }

    const handleClick=(e)=>{
        e.preventDefault();
        console.log(user);
        register(user,dispatch)
    }

    const {isFetching,error}=useSelector((state)=>state.user)

    return(
        <Container>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="Name" name='name' onChange={handleChange}></Input>
                    <Input placeholder="Last Name" name='lastName' onChange={handleChange}></Input>
                    <Input placeholder="email" name='email' onChange={handleChange}></Input>
                    <Input placeholder="username" name='username' onChange={handleChange}></Input>
                    <Input placeholder="address" name='address' onChange={handleChange}></Input>
                    <Input placeholder="Password" name='password' type="password" onChange={handleChange}></Input>
                    <Input placeholder="Confirm Password"></Input>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button onClick={handleClick}>CREATE</Button>
                    {error&&<Error>That username or Email is already registered</Error>}
                </Form>
            </Wrapper>

        </Container>
    )
}

export default Register