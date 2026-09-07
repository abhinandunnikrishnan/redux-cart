import React from 'react'

function Footer() {
  return (
    <div className='d-flex flex-row justify-content-around bg-primary text-light p-5'>
      <div>
        <h3>E cart</h3>
        <p>designed and build with all the love in the world by the <br />
        luminar team with help of our contributors</p>
        <p>code licensed Luminar</p>
        <p>currently v5.3.2</p>
      </div>
      <div>
        <h3>Links</h3>
        <p>Home</p>
        <p>Wishlist</p>
        <p>Cart</p>
      </div>
      <div>
        <h3>Guides</h3>
        <p>Bootstrap</p>
        <p>Redux</p>
        <p>React</p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <input type="text" placeholder='email here !!' />
      </div>
    </div>
  )
}

export default Footer