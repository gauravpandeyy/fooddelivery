import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  // const [btn, setbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
    return (
      <div className='flex justify-between bg-green-100 shadow-xl sticky top-0 z-50'>
  <div className='flex items-center'>
    <Link to="/">
      <img
        className="w-24"
        src={LOGO_URL}
        alt='fooooooOOOd'
      />
    </Link>
  </div>

        <div className='flex items-center'>
          <ul className="flex m-4 p-4 cursor-pointer"> <li className="px-4"> Status : { onlineStatus ? " Online 🟢" : " Offline 🔴" }</li>
            <li className="px-4 hover:font-extrabold font-semibold">
              <Link to = "/">Home</Link>
              </li>
            <li className="px-4 hover:font-extrabold font-semibold">
            <Link to = "/about">About us </Link>
            </li>
              <li className="px-4 hover:font-extrabold font-semibold">
              <Link to = "/cart">Cart - {cartItems.length}</Link>
              </li>
            <li className="pl-4 text-2xl -mt-1">👨</li>
            <li className="pl-1 font-normal"> : {loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;