import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddNew from './components/AddNew';
import Edit from './components/Edit';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/add_new_chocolate",
    element:<AddNew></AddNew>
  },
  {
    path: "/edit/:id",
    element:<Edit></Edit>,
    loader: ({params})=> fetch(`http://localhost:5000/chocolates/${params.id}`)
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)