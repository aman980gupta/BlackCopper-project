import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './screens/Home';
import Profile from './screens/Profile';
import About from './screens/About';
import ErrorPage from './screens/ErrorPage';
import RootLayout from './layouts/RootLayout';
import RootLayout2 from './layouts/RootLayout2';
import Sector from './pages/Sector';
import Topic  from './pages/Topic';
import Region from './pages/Region';
import Country from './pages/Country';
import Impact from './pages/Impact';
import Relevance from './pages/Relevance';
import Pestle from './pages/Pestle';
import Likelihood from './pages/Likelihood';
import Year from './pages/Year';
import Catagory from './pages/Catagory';
import { MenuIconProvider } from './contexts/menuIconContext';
import { SidebarProvider } from './contexts/sidebarContext';
import Layout from './layouts/Layout';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Topic />  },
        
        { path: "about", element: <About /> },
        { path: "catagory", element: <Catagory/> },
        { path: "/login", element: <Login/> },
        { path: "/register", element: <Register/> },
        {
          path: "root2",
          element: <RootLayout2 />,
          children: [
            { path: "", element: <Sector /> },
            { path: "sector", element: <Sector /> },
            { path: "topic", element: <Topic /> },
            { path: "region", element: <Region /> },
            { path: "country", element: <Country /> },
            { path: "impact", element: <Impact /> },
            { path: "relevance", element: <Relevance /> },
            { path: "pestle", element: <Pestle /> },
            { path: "likelihood", element: <Likelihood /> },
            { path: "likelihood", element: <Likelihood /> },
            { path: "end_year", element: <Year /> },
            { path: "start_year", element: <Year /> },
          ],
        },
        {
          path:"login",element :<Outlet/> ,
          children:[
            { path: "", element: <Login /> },
            { path: "profile", element: <Profile /> },
          ]
        },

      ],
    },
  ]);
  return <MenuIconProvider>
  <SidebarProvider>

    <RouterProvider router={appRoutes} />
  </SidebarProvider>

  
  </MenuIconProvider>;
}

export default App;
