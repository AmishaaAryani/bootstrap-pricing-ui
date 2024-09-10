import React from 'react'

const Card = (props) => {
  return (
    <>
           <div className='col-md-4'>

<div className="card text-center">
  <div className="card-header">
  <h4>{props.Header}</h4>
 
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text"> {props.text}

   </p>
    <a href="#" className={props.btn_class}>{props.btn}</a>
  </div>

</div>
</div>

    </>
  )
}


export default Card
