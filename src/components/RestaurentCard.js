import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;

    const { 
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRating, 
        costForTwo 
    } = resData?.info;

    return (
      <div className='res-card m-4 p-4 w-[250px] h-[380px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col justify-between'>
        <img
          className='res-logo rounded-lg w-full h-[190px] object-cover'
          src={CDN_URL + cloudinaryImageId}
          alt='res-logo'
          onError={(e) => e.target.src = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6116a2736e177c4a872d11a9d077584a'}
        />
        <div className="flex flex-col flex-grow">
          <h3 className="font-bold py-1.5 text-lg">{name || 'Food Palace'}</h3>
          <h4 className="line-clamp-2 font-thin">{cuisines.join(", ") || 'Exotic dishes, Cold drinks'}</h4>
        </div>
        <div className="flex flex-col m-1">
          <h4 className="font-light">{avgRating || '3.4'} rating</h4>
          <h4 className="font-medium">{costForTwo || 'Rs.450 for two'}</h4>
        </div>
      </div>
    );
};

export const withVegLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute m-1 px-2 py-1.5 bg-green-300 text-black rounded-lg"> Veg 🟢 </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
