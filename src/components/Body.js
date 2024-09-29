import RestaurentCard,{withVegLabel} from "./RestaurentCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardVeg = withVegLabel(RestaurentCard);

  useEffect(() => {  
    fetchData();
  },[]);


  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const restaurants = findRestaurants(json?.data?.cards);
      if (restaurants) {
        setListOfRestaurents(restaurants);
        setFilteredRestaurent(restaurants);
      } else {
        setListOfRestaurents([]);
        setFilteredRestaurent([]);
      }
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      setListOfRestaurents([]);
      setFilteredRestaurent([]);
    }
  };

  const findRestaurants = (cards) => {
    for (let card of cards) {
      const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants) {
        return restaurants;
      }
    }
    return [];
  };

  if (onlineStatus === false) {
    return (<h1 className="text-center m-10">Looks like you're offline!! Please check your internet connection.</h1>);
  }

  const { loggedInUser,setUserName } = useContext(UserContext);

  // conditional rendering - rendering on basis of a condition
  return listOfRestaurents.length === 0 ? (<Shimmer/>) :  (
    <div className='body'>
      <div className='filter flex items-center'>
        <div className="search m-4 p-4">
          <input 
            type="text" 
            className="py-2 px-12  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 " 
            value = { searchText }
            onChange={(e)=> {
              setSearchText(e.target.value);
            }}
            />
          <button className="px-4 py-2 border border-gray-300 bg-green-200 m-4 rounded-lg"
          onClick={()=>{
            console.log(searchText);
            const filteredRestaurent = listOfRestaurents.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurent(filteredRestaurent);
          }}>Search</button>
        </div>

        <div className="search m-4 p-4">
        <button onClick={() => {
          const filteredList = listOfRestaurents.filter((res) => res.info.avgRating > 4.4);
          setFilteredRestaurent(filteredList);
        }}
          className="bg-green-200 filter-btn px-4 py-1.5 rounded-lg border border-gray-300  focus:ring-blue-500 focus:border-blue-500 hover:bg-green-300"> Top rated Restaurants </button>
        </div>

        <div className="flex items-center search m-4 p-4">
          <label className="mx-2 font-medium"> Username: </label>
        <input 
            type="text" 
            className="p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
            value = {loggedInUser}
            onChange={(e)=> setUserName(e.target.value)}
            /> 
        </div>

      </div>
      <div className='flex flex-wrap'>
        {filteredRestaurent.map((restaurant) => (
          <Link 
          key = {restaurant.info.id}
          to = {"/restaurants/" + restaurant.info.id}>
          {restaurant.info.veg ? (<RestaurantCardVeg resData={restaurant}/>) : (<RestaurentCard resData={restaurant} />)}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
