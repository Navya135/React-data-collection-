import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();
  
  return (
    
    <div style={{backgroundImage: "linear-gradient(79deg, #7439db, #C66FBC 48%, #F7944D)",textAlign: 'center',
    minHeight: '100vh',
    
    alignItems: 'center',  justifyContent: 'center',
    color: 'white'}}>
    <h2 style={{paddingTop:"200px",fontFamily: "Roboto",color:"white",fontWeight:500}}>Thank you!</h2>
    <p style={{paddingTop:"40px",fontFamily: "Roboto",color:"white",fontWeight:500}}>Your Submission has been received.</p>
    <button style={{width:"10%",marginTop:"50px",fontFamily: "Roboto",color:"white",fontWeight:500}} onClick={()=> navigate("/")}>Logout</button>
    </div>

  );
};

export default ThankYou;