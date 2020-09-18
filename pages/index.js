import Layout from '../components/Layout'
import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import Count from '../components/Count'


function Home () {

  const [code, setCode] = useState("")
  const heading= "";

  return (
    <Layout>
    <div className="index">
  
      <div className = "body_container">
        <h1> Gift your Card </h1>
        
        <h2> Over $1 Billion a year is given to giant corporations in unused giftcard remainders.</h2>
        <h3> Donate your card to charity, or shop with us, and we will track the difference you make. </h3>
      </div>
      <div className="hello">
      <Count/>
      </div>
    </div>
      
    
    <style jsx>{`
      .body_container {
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .hello
      {
        padding-left: 33%;
        padding-top: 2%;

      }
    `}</style>
    </Layout>
    
  );
}
  

export default Home
