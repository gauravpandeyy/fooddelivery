import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, index}) => {

    const handleClick = () => {
        setShowIndex(showItems ? null : index);
    }

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
             <div className="flex justify-between cursor-pointer"
             onClick={handleClick}>
              <span className="font-bold">{data.title} ({data.itemCards.length})</span>
              <span className="font-extrabold"> ⌄ </span>
             </div>
             {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;