import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import Swal from 'sweetalert2';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
      const userWishlist=useSelector(state=>state.wishlistReducer)
      const userCart=useSelector(state=>state.cartReducer)
      const dispatch =useDispatch()

      const handleCart=(product)=>{
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
      <div className='container my-5'>
        <h1 className='pt-5 text-primary'>User Wishlist</h1>
        {
          userWishlist?.length>0?
          <div className='row pt-5'>
           {/* duplicate column accordingly */}
        {
          userWishlist?.map(item=>(
            <div key={item?.id} className="col-md-3 mb-2">
          {/* card */}
          <Card className='rounded shadow'>
            <Card.Img style={{height:'250px'}} variant="top" src={item?.thumbnail} />
            <Card.Body className='text-center'>
              <Card.Title>{item?.title}</Card.Title>
              <div className="d-flex justify-content-evenly">
                <button onClick={()=>dispatch(removeFromWishlist(item?.id))} className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                <button className="btn text-success fs-4" onClick={()=>handleCart(item)}><FontAwesomeIcon icon={faCartShopping} /></button>
              </div>
            </Card.Body>
          </Card>
        </div>
          ))
        }
        </div>
        :
        <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
          <img className='w-25' src="https://www.gospeedy.co.in/images/empty.gif" alt="wwishlist" />
          <h1>Your wishlist is empty</h1>
          <Link to={'/'} className='btn btn-primary'>Add More</Link>
        </div>
        }
      </div>
    </>
  )
}

export default Wishlist