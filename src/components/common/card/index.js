import './card.css'
import React from 'react'; 


export default function Card(props) {
  let {image,heading,subheading,footer} = props;
    return (
      <div className="card">
      <div className={image?"card-image":''}>	
        <h2 className="card-heading">
          {heading}
          <small>{subheading}</small>
        </h2>
      </div>
      <div className='children'>
      {props.children}
      </div>
      {footer?
        <div className="card-info">
        <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
      </div>:''
      }
    </div>
    )
  }
  