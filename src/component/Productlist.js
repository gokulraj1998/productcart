import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from './Product'
function Productlist() {
    const [restaurants,setRestaurants] =useState([])
    async function fetchData()
    {
        await fetch('/rs.json')
        .then((res)=>res.json())
        .then((data)=>setRestaurants(data.restaurants))
        }
        
    useEffect(()=>{fetchData()},[])
    
  return (
    <Row>
    {restaurants.map((restaurant)=>(<Col sm={12} md={8} lg={6} xl={3}>
  <Product item={restaurant}/></Col>))}</Row>
  )
}

export default Productlist