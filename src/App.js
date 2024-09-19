import './App.css';
import {
  Form,
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
  useActionData,
  useFetcher,
  useLocation,
  useNavigation,
  useRouteLoaderData,
} from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import { useCookies } from 'react-cookie'
import { useEffect } from 'react';
function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  useEffect(()=>{
    console.log(cookies.user)
  })
  const router = createBrowserRouter([
    
        {
          path: "login",
          loader(){
            if (cookies.user !== undefined) {
              return redirect("/");
            }
            return null;
          },
          Component: Login,
        },
        {
          path: "/",
          index:true,
          loader(){
            if (cookies.user === undefined) {
              return redirect("/login");
            }
            return null;
          },
          Component: Dashboard,
        }, 
  ]);


  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
