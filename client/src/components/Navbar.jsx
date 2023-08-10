import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Search,ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core'
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logout } from '../redux/userRedux';

const Container = styled.div`
height: 60px;
${mobile({height:"50px"})}
`
const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items:center;
justify-content: space-between;
${mobile({
  padding:"10px 0px"
})}
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language=styled.span`
font-size:14px;
cursor: pointer;
${mobile({display:"none"})}
`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})}
`
const SearchContainer = styled.div`
border:0.5px solid lightgrey;
margin-left:25px;
padding:5px;
display:flex;
align-items:center;
`
const Input=styled.input`
border:none;
${mobile({width:"50px"})}
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;
margin-left:25px;
${mobile({justifyContent:"center",flex:2})}
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
  // const [search,setSearch]= useEffect("stationary")
  const user = useSelector(state=>state.user.currentUser)
  const quantity = useSelector(state=>state.cart.quantity)
  const [inputValue,setInputValue]=useState()
  const handleChange=(e)=>{
    e.preventDefault()
    console.log(inputValue)
    var search = e.target.value.toLowerCase()
    setInputValue(search)
  }
  const dispatch = useDispatch()
  
  const handleLogout = ()=>{
    console.log("Logging out")
    dispatch(Logout())
  }
  console.log(user)
  
    return (
    <Container>
        <Wrapper>
            <Left><Language>EN</Language>
            <SearchContainer>
              <Input placeholder='Search Categories' onChange={handleChange}/>
             <Link to={`/products/${inputValue}`}><Search style={{color:"gray", fontSize:16}}/></Link> 
            </SearchContainer></Left>
            <Center><Logo>URBAN DUKAANj.</Logo></Center>
            <Right>
              {user ?<MenuItem>{user.username}</MenuItem> :<Link to="/register" style={{color:"#246156", textDecoration:"none"}} >
              <MenuItem>Register</MenuItem>
            </Link>  }
            {user ?<MenuItem onClick={handleLogout} style={{color:"#246156"}}>Logout</MenuItem> : <Link to="/login" style={{color:"#246156", textDecoration:"none"}}>
                <MenuItem>Sign IN</MenuItem>
              </Link>}
              {user?<Link to="/cart">
              <MenuItem>
              <Badge badgeContent={quantity}>
                    <ShoppingCartOutlined/>
              </Badge>
              </MenuItem>
              </Link>:<Link to="/login">
              <MenuItem>
                  <Badge badgeContent={quantity}>
                    <ShoppingCartOutlined/>
                  </Badge>
              </MenuItem>  
              </Link>}

            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar