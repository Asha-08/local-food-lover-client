import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './router/routes.jsx'
import AuthProvider from './Context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} fallbackElement={<div className="text-center mt-20 text-gray-500">Loading...</div>} />
   </AuthProvider>
  </StrictMode>,
)
