import React from 'react'
import "./HomePage.css"
export default function HomePage() {
  const  navPage = [ "Home", "Shop" , "About" , "Contact"];
  return (
    <>
    <div className='homePage'>

    <nav className='homePage__nav'> 
      <h1 className='logo'> room</h1>
      <ul className='homePage__nav-ul'>
        {
          navPage.map((elem, index) => (
            <>
            <li className='body-light homePage__nav-li'> {elem}</li>
            </>
          ))
        }
      </ul>
    </nav>
    <div className='homePage__top'>
    <div className='homePage__top-image_left'/>
    <div className='homePage__top-description'>
      <div className='homePage__top-description-body'>
<h1 className='big-title'>Discover innovative ways to decorate </h1>
<p className='body-light'> We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
<p className='body-light'> Shop now</p>
      </div>
    </div>
    </div>
    <div className='homePage__bottom'>
      <div  className='homePage__bottom-image_left'/>
      <div className='homePage__bottom-description'> 
          <div className='homePage__bottom-description-body'>
            <h2 className='title'>Aout our furniture</h2>
            <p className='body-light'>

          About our furniture Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </div>
      </div>
<div className='homePage__bottom-image_right'/>
    </div>
        </div>
    </>
  )
}
