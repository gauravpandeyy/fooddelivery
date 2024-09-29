import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const restaurantInfo = resInfo?.cards?.find(card => card.card?.card?.info);
    const { name, cuisines, costForTwoMessage } = restaurantInfo?.card?.card?.info || {};

    const regularCards = resInfo?.cards?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR);

    const itemCards = regularCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

    const categories = regularCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    return (
        <div className="text-center">
            <h1 className="font-bold m-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>
            
            {/* categories accordian */}

            {categories.map((category, index) => (
                // controlled component
                <RestaurantCategory key={category?.card?.card.title} 
                data={category?.card?.card} 
                showItems={index === showIndex}
                setShowIndex={setShowIndex}
                index={index}
                />
            ))}
            
        </div>
    );
};

export default RestaurantMenu;
