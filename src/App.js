
import './App.css';
import React from 'react'
import Header from './component/Header';
import Footer from './component/Footer';
import Card from './component/Card';

const App = () => {
  return (
    <>
    <Header/>
    <div className='container'>
    <div className='row'>

   
    <Card Header='Free'
          title={[<strong>$0 </strong> ,<span>/ mo</span>]}
          text={['10 users included',<br/>,
                '2 GB of storage',<br/>,
                'Email support',<br/>,
                'Help center access']}
          btn='Sign up for free'
          btn_class='btn btn-outline-primary'
    />
    <Card
          Header='Pro'
          title={[<strong>$15 </strong>,<span>/ mo</span>]}
          text={['20 users included',<br/> ,
                '10 GB of storage',<br/>,
                'Priority email support',<br/>,
                'Help center access']}
          btn='Get started'
          btn_class='btn btn-primary'
    />
    <Card
          Header=' Enterprise'
          title={[<strong>$29 </strong>,<span>/ mo</span>]}
          text={['30 users included',<br/>,
                '15 GB of storage',<br/>,
                'Phone and email support',<br/>,
                'Help center access']}
          btn='Contact us'
          btn_class='btn btn-primary'
    />
     </div>
     </div>
    
    <Footer/>
      
    </>
  )
}

export default App

