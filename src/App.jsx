import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import MainLayout from './Layout/MainLayout'
import Jobspage from './Pages/Jobspage'
import Pagenotfound from './Pages/Pagenotfound'
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<Homepage/>} />
  <Route path='/jobs' element={<Jobspage/>}/>
  <Route path='*' element={<Pagenotfound/>}/>
  
  </Route>
    )
)
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App