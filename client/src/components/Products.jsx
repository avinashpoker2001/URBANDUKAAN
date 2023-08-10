
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { useState } from 'react'

const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:spacebetween;
`

const Products = ({cat,filters,sort}) => {
  const [products,setProducts]= useState([]);
  const [filteredProducts,setFilteredProducts]= useState([]);

  useEffect(()=>{
    console.log(cat);
    const getProducts= async ()=>{
      try{
        const res = await axios.get( cat ? `http://localhost:5001/api/products?category=${cat}`: "http://localhost:5001/api/products");
        setProducts(res.data);
          console.log(res.data);
      }catch(e){
          console.log(e.message)
      }
    }
    getProducts()
  },[cat])

  useEffect(()=>{
    console.log(filters)
     setFilteredProducts(
      products.filter((item)=> 
          Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
          )) 
    )  
  },[products,cat,filters])

  useEffect(()=>{
    console.log(sort)
    if(sort==="newest"){
      setFilteredProducts(prev=>[...prev].sort((a,b)=>a.createdAt-b.createdAt))
      console.log(filteredProducts)
    }
    else if(sort==="asc"){
      setFilteredProducts(prev=>[...prev].sort((a,b)=>a.price-b.price))
      console.log("hit")
    }
    else{
      setFilteredProducts(prev=>[...prev].sort((a,b)=>b.price-a.price))
      console.log(filteredProducts)
    }
  },[sort])

  console.log(filteredProducts)


  return (
    <Container>
        { filteredProducts.map(item=>(
            <Product item ={item} key={item.id}></Product>
        ))}
    </Container>
  )
}

export default Products
