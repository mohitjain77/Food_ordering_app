import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const filterData = (searchName, restaurants) => {
  return restaurants.filter((restaurants) =>
    restaurants.data.name.includes(searchName)
  );
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filleredRestaurants, setFilleredRestaurants] = useState([]);
  const [searchName, setSearchName] = useState("");
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    getRestaurant();
  }, [searchName]);

  async function getRestaurant() {
    const data = await fetch(restaurantList);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilleredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }


  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (searchName === "") {
              setAllRestaurants(restaurantList);
            }
            const data = filterData(searchName, allRestaurants);
            setFilleredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name : e.target.value
            });
          }}
        />
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value
            });
          }}
        />
      </div>
      {filleredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filleredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
              <RestaurantCard {...restaurant.data}  /></Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
