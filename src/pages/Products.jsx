import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Products() {
  return (
    <>
    <Header/>
    <div className="m-5">
      <div className="row pt-5">
        {/* duplicate column accordingly */}
        <div className="col-md-3 mb-2">
          {/* card */}
          <Card className='rounded shadow'>
            <Card.Img style={{height:'250px'}} variant="top" src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>Card Title</Card.Title>
              <Link to={'/products/id'} className='btn btn-primary'>View More</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products