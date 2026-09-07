import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
  return (
    <>
      <Header/>
      <div className='container my-5'>
        <h1 className='pt-5 text-primary'>User Wishlist</h1>
        <div className='row pt-5'>
           {/* duplicate column accordingly */}
        <div className="col-md-3 mb-2">
          {/* card */}
          <Card className='rounded shadow'>
            <Card.Img style={{height:'250px'}} variant="top" src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>Card Title</Card.Title>
              <div className="d-flex justify-content-evenly">
                <button className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                <button className="btn text-success fs-4"><FontAwesomeIcon icon={faCartShopping} /></button>
              </div>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist