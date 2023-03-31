import React from 'react'
import "../Components/about.css"
import pic from "../images/coffee.png"

export default function About() {
  return (
   <section id='about'>
    <div className='aboutdiv'>
    <div className='about-div'>
       <div className='top'>
       <h1> All About KIM cafe</h1>
        <i>"Come,sit alone or along ,which makes a perfect blend,be the start or end of the day.
        Sitting in a cafe watching people walk by can be an interesting way to spend time. Some people really enjoy it because it makes them feel as if they were a part of other people's life stories. Cafe quotes show us that the friendly atmosphere at cafes helps people be more sociable and lively, so cafes can be a great place for hanging out with your friends."</i>
       </div>
       <div className='top1'>
        {/* <img src={pic} alt=''/> */}
       <h1>SOURCES</h1>
        <i>"Found reliable wholesale partners and ordered the best coffee shop accessories and supplies for our budget"</i>
       </div>
       <div className='top2'>
       {/* <img src={pic2} alt=''/> */}
       <h1>Bean Varieties
</h1>
        <i>"If you’re wondering about the beans in your brew, you’ve come to the right place. We’ve put together arabic,robusta,and also decaf beans."</i>
       </div>
      
 
    </div>
   <div className='bottom'>
    {/* <img src={pic3} alt=""/> */}
    <div>
    <h1>Coffee for Rescue</h1>
    <i>Sitting in a cafe watching people walk by, makes us feel as if they were a part of other people's life stories.Cafes can be a great place for hanging out with your friends.Coffee can soothe your thoughts during hardship</i>
    </div>
    </div> 
   </div>
   </section>
  )
}
