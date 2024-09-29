import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client"
import Body from './src/components/Body';
import Header from './src/components/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';
import { lazy, Suspense } from 'react';
import UserContext from './src/components/UserContext';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';
import Cart from './src/components/Cart';

const About = lazy( ()=> import("./src/components/About"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(()=> {
    const data = {
      name : "Gaurav Pandey"
    };
    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
    <div className='app'>
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Body/>,
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu/>
      },
      {
        path : "/about",
        element : <Suspense fallback = {<h1>Loading...</h1>}> <About/> </Suspense>,
      },
      {
        path : "/cart",
        element : <Cart/>,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter} />);
