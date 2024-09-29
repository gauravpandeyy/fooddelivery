import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return(
        <div>
            {items.map((item) => (
                <div key = {item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                    <div className="w-9/12">
                        <div className="text-left py-2">
                          <span className="font-medium">{item.card.info.name ? item.card.info.name : "Delicious dishes"}</span><br/>
                          <span> ₹{item.card.info.price ? item.card.info.price/100 : "455"}</span>
                        </div>
                        <p className="text-left text-xs">{item.card.info.description ? item.card.info.description : "Delicious dish at 40% offer! Be one of the first 100 to order to avail the discount!"}</p>
                    </div>
                    <div className="w-3/12 p-4 ab">
                     <div className="absolute">
                        <button className="text-green-600 font-bold mx-7 px-3 py-1 bg-white shadow-lg rounded-lg border border-gray-300"
                        onClick={() => handleAddItem(item)}>
                        ADD + </button>
                     </div>
                     {item.card.info.imageId ? <img className="w-full rounded-md" src={CDN_URL + item.card.info.imageId} alt="img"/> : <img className = "w-full rounded-md" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/29fc772cc06b07a4b018e4971d96c9a3" alt="" />}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;