import { createBrowserRouter, Outlet } from "react-router-dom";
import Articles from "../pages/Articles";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import ContactList from "../pages/ContactList";
import DetailsPerson from "../pages/DetailsPerson";
import ErrorPage from '../pages/ErrorPage';
import Home from "../pages/Home";
import Layout from '../pages/Layout';
import ListePerson from "../pages/ListePerson";
const AppLayout=()=>(
  <>
  <Layout/>
  <Outlet/>
  </>
  );
export const MesRoute=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/contact',element:<Contact/>
          },
          {
              path:'/blog',element:<Blog/>,
          },
          {
              path:'/home',element:<Home/>
          },
          {
              path:'/', element:<Home/>
          },
          {
            path:'/liste',element:<ContactList/>
          },
          {
            path:'/article/:id',element:<Articles/>
          },
          {
            path:'/personne',
            loader:()=>fetch("http://localhost:9096/api/v2/personnes"),
            element:<ListePerson/>
          },
          {
            path:'/personne/:id',
            element:<DetailsPerson/>
          }
      ]
    } ]);
    