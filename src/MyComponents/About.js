import React,{useState} from 'react'
import Navbar from './Navbar'
import Alert from './Alert'





export default function About({togglemodes, mode,showalert, alert }) {

  let myStyle = {
    color : mode ==="dark" ? "white":"black",
    backgroundColor : mode === "light" ? 'white':'rgb(62 138 201)'
   }

   let mymainstyle = {
    backgroundColor : mode === "light" ? '#efefef':'rgb(22 88 143)'
   }

 return (
  <div>
   <Navbar  mode={mode} togglemodes={togglemodes} />
   <Alert alert={alert} />
   <div className='container py-3 px-3 my-5' style={mymainstyle}>
  <h1 className='mx-3 py-2' style={{ color : mode ==="dark" ? "white":"black"}}>About Us</h1>
   <div className="accordion" id="accordionExample"  style={myStyle}>
    <div className="accordion-item"  style={myStyle}>
     <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="Collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={myStyle}>
     <strong>Analyze Your Text</strong>
      </button>
     </h2>
     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
     </div>
    </div>
    <div className="accordion-item" style={myStyle} >
     <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"  aria-controls="collapseTwo" style={myStyle}>
      <strong>Free to Use</strong>
      </button>
     </h2>
     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
     </div>
    </div>
    <div className="accordion-item" style={myStyle}>
     <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"  aria-controls="collapseThree" style={myStyle}>
      <strong>Browser Compatible</strong>
      </button>
     </h2>
     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
     </div>
    </div>
   </div>
  
  </div>
  </div>

 )
}
