import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const SuccessButton=styled.button`
    font-size: x-large;
    border:none;
    background-color: teal;
    color:white;
    padding:10px 15px;
    border-radius: 10px;
`
const Span = styled.span`
    font-size: 24px;
    margin-bottom: 20px;
`

const Success=()=>{
    const location = useLocation()
    console.log(location)
    return(
        <Container>
            <Span>Payment was successfull</Span>
            <SuccessButton>SUCCESS</SuccessButton>
        </Container>
        
    )
}
export default Success