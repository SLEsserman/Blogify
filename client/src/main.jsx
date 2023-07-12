import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import  {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <RouterProvider router={router}>
  </BrowserRouter>
)
