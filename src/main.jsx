import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';


import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProviders>
   <HelmetProvider>
    <div className='max-w-screen-lg mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>   
    </AuthProviders> 
  </StrictMode>,
)
