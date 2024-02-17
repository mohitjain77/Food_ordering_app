import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/UseRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const restaurant = useRestaurant(resId)[0];
  const resMenu = useRestaurant(resId)[1];

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <h1> Restaurant id: {restaurant.id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>
      <div>
        <button>Add Item</button>
      </div>
      <div>
        <h1>Menu</h1>
        {/* <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
