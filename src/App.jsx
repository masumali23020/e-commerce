import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./app.scss";
import Footer from './components/Footer/Footer';
import Navber from './components/Navber/Navber';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navber />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products/:id",
          element: <Products />
        },
         {
          path: "/product/:id",
          element: <Product />

        }
        
       
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router} />
      
     
    </div>
  )
}

export default App
