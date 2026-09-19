import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'

function View() {
  const{id}=useParams()
  const {allProducts}=useSelector(state=>state.productReducer)
  const[product,setProduct]=useState({})
  console.log(product);
  const dispatch=useDispatch()
  const userWishlist=useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)

  useEffect(()=>{
    setProduct(allProducts?.find(item=>item?.id==id))
  },[])

  const handleWishlist=()=>{
    const existingproduct=userWishlist?.find(item=>item.id==product?.id)
    if(existingproduct){
      Swal.fire({
      title: "Sorry",
      text: "Product Already in Wishlist",
      icon: "error",
      confirmButtonText:"ok"
    });
    }else{
      dispatch(addToWishlist(product))
      Swal.fire({
      title: "Success",
      text: "Product Added to Wishlist",
      icon: "success",
      confirmButtonText:"ok"
    });
    }
  }
  const handleCart=()=>{
    const existingproduct=userCart?.find(item=>item.id==product?.id)
    dispatch(addToCart(product))
    Swal.fire({
      title: "Success!!!",
      text: existingproduct?`product${existingproduct.title} quantity incremented`:"product aded to cart",
      icon: "success",
      confirmButtonText:"ok"
    });
  }
  return (
    <>
      <Header/>
      <div className="container my-5">
        <div className="row pt-5 align-items-center" style={{height:'100vh'}}>
          <div className='col-lg-6 text-center'>
            <img width={'400px'}  className='img-fluid' src={product?.thumbnail} alt='product image' />
            <div className='d-flex justify-content-evenly mt-5'>
              <button onClick={handleWishlist} className='btn btn-info rounded'>ADD TO WISHLIST</button>
              <button onClick={handleCart} className='btn btn-success rounded'> ADD TO CART</button>
            </div>
          </div>
          <div className='col-lg-6'>
            <h1>{product?.title}</h1>
            <h2 className='text-danger'>${product?.price}</h2>
            <h4>{product?.brand}</h4>
            <h4>{product?.category}:</h4>
            <h4>{product?.description}:</h4>
            <h5>Client Reviews:</h5>
            {
              product?.reviews?.map((item,index)=>(
                <div key={index} className='border rounded p-2 shadow my-1'>
              <p>
                <span className='fw-bolder'>{item?.reviewerName} :</span> {item?.comment}</p>
              <p>Rating : {item?.rating} <FontAwesomeIcon icon={faStar} className="text-warning"/></p>
            </div>
              ))
            }
            
          </div>
        </div>
      </div>
    </>
  )
}

export default View