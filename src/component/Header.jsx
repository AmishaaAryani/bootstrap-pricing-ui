import React from 'react'

const Header = () => {
  return (
    <>


      <nav className="navbar justify-content-between">
        <a className="navbar-brand">Company name</a>
        <form className="form-inline">
          <ul className='navList'>
            <li>Features </li>
            <li>Enterprise </li>
            <li>Support</li>
            <li> Pricing</li>
          </ul>

          <button className="btn btn-outline-primary my-2 my-sm-0 " type="submit">Sign Up</button>
        </form>
      </nav>


      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className='price'>
              <h1>Pricing</h1>
              <p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>

            </div>
          </div>
        </div>
        {/* <div className='row'>
          <div className='col-md-4'>
            <div className="card text-center">
              <div className="card-header">
                <h4>
                  Free
                </h4>
              </div>
              <div className="card-body">
                <h5 className="card-title"><strong>$0</strong>  <span>/ mo</span></h5>
                <p className="card-text">10 users included<br />
                  2 GB of storage<br />
                  Email support<br />
                  Help center access</p>
                <a href="#" className="btn btn-outline-primary">Sign Up for Free</a>
              </div>

            </div>
          </div>
          <div className='col-md-4'>
            <div className="card text-center">
              <div className="card-header">
                <h4>
                  Pro
                </h4>
              </div>
              <div className="card-body">
                <h5 className="card-title"> <strong>$15</strong> <span>/ mo</span></h5>
                <p className="card-text">20 users included <br />
                  10 GB of storage,<br />
                  Priority email support <br />
                  Help center access</p>
                <a href="#" className="btn btn-primary">Get started</a>
              </div>

            </div>
          </div>

          <div className='col-md-4'>

            <div className="card text-center">
              <div className="card-header">
                <h4>   Enterprise</h4>

              </div>
              <div className="card-body"> */}
                {/* <h5 className="card-title"><strong>$29</strong> <span>/ mo</span></h5>
                <p className="card-text">30 users included <br />
                  15 GB of storage <br />
                  Phone and email support <br />
                  Help center access</p>
                <a href="#" className="btn btn-primary">Contact us</a>
              </div>

            </div>
          </div>

        </div> */}
       
      </div>

    </>





  )
}

export default Header
