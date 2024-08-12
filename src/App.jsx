import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Products from './components/Products'
import Shop from './components/Shop'
import Contact from './components/Contact'
import About from './components/About'
import Notfound from './components/Notfound'
import Login from './components/Login'
function App() {
  let routes = createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: '/products', element: <Products></Products> },
        { path: '/shop', element: <Shop></Shop> },
        { path: '/contact', element: <Contact></Contact> },
        { path: '/about', element: <About></About> },
        { path: '/login', element: <Login></Login> },
        { path: '*', element: <Notfound></Notfound> },
      ]
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
export default App