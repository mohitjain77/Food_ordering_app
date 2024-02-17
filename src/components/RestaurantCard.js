import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/userContext";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h5>
        {user.name}-{user.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
