import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
    
`
const FilterComponent= styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter= styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px",display:"flex", flexDirection:"column"})}
`
const Title = styled.h1`
    margin: 20px;
`
const FilterTest= styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"0px"})}

`
const Select = styled.select`
    padding: 10px;
    margin-left:20px;
    ${mobile({margin:"10px 0px"})}
`
const Option = styled.option`
    
`
const Pad = styled.div`
    padding-left: 20px;
`

const ProductList =()=>{
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters,setFilters]=useState({})
    const [sort,setSort] = useState("newest")

    const handleFilters=(e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        })
    }
    console.log(filters)
    
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterComponent>
                <Filter>
                    <FilterTest>Filter Products:</FilterTest> 
                        <Select name="categories" onChange={handleFilters}>
                            <Option disabled>Item</Option>
                            <Option>Books</Option>
                            <Option>Stationary</Option>
                            <Option>NoteBooks</Option>
                            <Option>Bags</Option>
                            <Option>Lunchboxes</Option>
                        </Select>
                        <Select name="color" onChange={handleFilters}>
                            <Option disabled>color</Option>
                            <Option>white</Option>
                            <Option>black</Option>
                            <Option>red</Option>
                            <Option>green</Option>
                            <Option>blue</Option>
                        </Select>
                </Filter>
                <Filter>
                <FilterTest>Sort Products:</FilterTest> 
                <Select name="sortBy" onChange={(e)=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterComponent>
                <Products cat={cat} filters={filters} sort={sort} />
                <Newsletter/>
                <Footer/>
        </Container>
    )
}
export default ProductList