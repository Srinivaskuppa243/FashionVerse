import React from 'react'
import { Data } from '../data/products'
import { useLocation, useNavigate } from 'react-router-dom'

const Products = () => {
  const location=useLocation()
  const navigate=useNavigate()
  //console.log(location)
  const queryparams=new URLSearchParams(location.search) //this helps to destructure the data
  console.log(queryparams)
  //extract the parameters
  const category=queryparams.get("category")
  const sort=queryparams.get("sort")

  //filtering the products
  const filteredProducts = Data.filter((product)=>category? product.category===category:true)
  console.log(filteredProducts)

  //sorting the products

  if(sort=="asc"){
    filteredProducts.sort((a,b)=>a.price-b.price)
  }else if(sort=="desc"){
    filteredProducts.sort((a,b)=>b.price-a.price)
  }

  function HandleFilter(key,value){
    if(value){
      queryparams.set(key,value)
    }else{  
      queryparams.delete(key)
    }
    navigate(`?${queryparams.toString()}`)
  }
  return (
    <div className='container'>
     <h1 className='text-white text-center'>FashionVerse Great Summer Sale</h1>
     {/* catrgory filter section start  */}
     <div className='d-flex justify-content-between align-items-start gap-3'>
      <div className='category'>
        <p className='text-white'>Filter by Category</p>
        {/* Buttons start */}
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button"  onClick={()=>HandleFilter("category","men's clothing")}  className="btn btn-outline-dark">Men clothing</button>
          <button type="button"  onClick={()=>HandleFilter("category","women's clothing")} className="btn btn-outline-dark">Women clothing</button>
          <button type="button"  onClick={()=>HandleFilter("category","jewelery")} className="btn btn-outline-dark">Jewelry</button>
          <button type="button"  onClick={()=>HandleFilter("category","electronics")} className="btn btn-outline-dark">Electronics</button>
          <button type="button"  onClick={()=>HandleFilter("category","")} className="btn btn-outline-dark">All Products</button> 
        </div>
        {/* Buttons end */}
      </div>
     {/* category filter section end */}
      
     {/* Sorting buttons start */}
      <div className='sort-products '>
        <p className='text-white'> Filter by price</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" onClick={()=>HandleFilter("sort","asc")} className="btn btn-outline-dark">Low</button>
          <button type="button" onClick={()=>HandleFilter("sort","desc")} className="btn btn-outline-dark">High</button>
        </div>
      </div>
    </div>
     {/*Sorting buuttons end  */}
     <br />
     {/* Products start */}
      <div className='row gy-3'>
        {
          filteredProducts.length>0?filteredProducts.map((ele)=>( 
            <div className='col-sm-12 col-md-4 col-lg-4'>
             <div className='card shadow p-3'>
              <img src={ele.image} alt="" height={"200px"} />
              <h3 className='card-title'>{ele.title}</h3>
              <p className='card-text'>{ele.price}</p>
             </div>
            </div>  
          )):"No products found"
        }
      </div>
     {/* Products end */}

    </div>
  )
}

export default Products
