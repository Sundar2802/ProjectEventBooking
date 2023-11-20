import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './Navbar';
import Login from './Login';
import RegistrationForm from './Register';
    
    const route = createBrowserRouter([
      
            
            
                {path: '/', element: <Navbar/>},
                {path: '/Login', element:<Login/> },
                {path: '/Register', element:<RegistrationForm/>}
                
           
       
        
        
    ]);


export default route;