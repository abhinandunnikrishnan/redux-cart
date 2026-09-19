import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, emptyCart, incrementCart, removeCart } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'

function Cart() {
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const [cartTotal,setCartTotal]=useState(0)
  const navigate =useNavigate()
  
  useEffect(()=>{
    setCartTotal(userCart?.reduce((a,b)=>a+b.totalPrice,0))
  },[userCart])

  const hanldeDecrementQuantity=(product)=>{
    if(product.quantity>1){
      dispatch(decrementCart(product.id))
    }else{
      dispatch(removeCart(product.id))
    }
  }

  const handleCheckOut=()=>{
    dispatch(emptyCart())
    Swal.fire({
          title: "Order Placed Succesfully!!!",
          text: "Thank You For The Purchase",
          icon: "success",
          confirmButtonText:"Shop More"
        });
        navigate('/')
  }

  return (
    <>
      <Header/>
      {
        userCart?.length>0?
        <div className="container my-5">
        <h1 className='text-primary my-5'>Cart Summary</h1>
        <div className='row mb-5'>
          <div className='col-md-8 border rounded p-5'>
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  userCart?.map((item,index)=>(
                    <tr key={item?.id}>
                  <td >{index+1}</td>
                  <td >{item?.title}</td>
                  <td><img width={'70px'} height={'50px'} className='img-fluid' src={item?.thumbnail} alt='product image' /></td>
                  <td>
                    <div className='d-flex'>
                      <button onClick={()=>hanldeDecrementQuantity(item)} className='btn fs-1'>-</button>
                      <input style={{width:'50px'}} type="text"className='form-control'value={item?.quantity} readOnly />
                      <button onClick={()=>dispatch(incrementCart(item?.id))} className='btn fs-1'>+</button>
                    </div>
                  </td>
                  <td>{item?.totalPrice}</td>
                  <td>
                    <button onClick={()=>dispatch(removeCart(item?.id))} className='btn text-danger fs-4'>X</button>
                  </td>
                </tr>
                  ))
                }
              </tbody>
            </table>
            <div className='float-end mt-3'>
                <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>Empty Cart</button>
                <Link to={'/'} className='btn btn-info ms-5'>Shop More</Link>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="rounded p-5 shadow border">
              <h3>Total <span>{userCart?.length}</span> Items</h3>
              <h3>Total Amount : <span className="text-danger">${cartTotal}</span></h3>
              <hr />
              <div className="d-grid">
                <button onClick={handleCheckOut} className='btn btn-success'>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
        <img className='w-25' src="https://www.gospeedy.co.in/images/empty.gif" alt="wwishlist" />
        <h1>Your Cart is empty</h1>
        <Link to={'/'} className='btn btn-primary'>Add More</Link>
      </div>
      
      }

      

    </>
  )
}

export default Cart