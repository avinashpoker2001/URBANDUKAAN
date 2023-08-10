import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo= styled.h1`
    
`
const Desc= styled.p`
    margin: 20px 0px;
`
const Socialcontainer = styled.div`
 display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#fff8f8"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width:50%;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title= styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem=styled.li`
    width:50%;
    margin-bottom: 10px;
`
const Footer =()=>{
    return(
    <Container>
            <Left>
                <Logo>
                    STORE.
                </Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error optio voluptas explicabo modi cumque architecto odit, dolorem molestias suscipit, deleniti eius sunt quia maxime culpa ex cum illum, quidem assumenda.
                </Desc>
                <Socialcontainer>
                    <SocialIcon color="3B5999">
                        <Facebook></Facebook>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                    <Instagram></Instagram>
                    </SocialIcon>
                    <SocialIcon color="25D366">
                        <WhatsApp></WhatsApp>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter></Twitter>
                    </SocialIcon>
                </Socialcontainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                <ListItem> <Link to="/">Home</Link></ListItem>
                <ListItem> <Link to="/cart">Cart</Link></ListItem>
                <ListItem> <Link to="/products/Books">Books</Link></ListItem>
                <ListItem> <Link to="/products/Stationary">Stationary</Link></ListItem>
                <ListItem> <Link to="/products/PYQs">PYQs</Link></ListItem>
                    <ListItem>OrderTracking</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/> Hostel No-28 B.I.T. Sindri, Sindri</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> +91-9304251433</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/> contact@gourav.dev</ContactItem>
                <Payment src="#"/>
            </Right>
    </Container>
    )
}
export default Footer