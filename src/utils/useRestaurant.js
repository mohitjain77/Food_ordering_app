import { useEffect, useState } from "react";
import { FETCH_REST_INFO } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_REST_INFO + resId);
    const json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
    setResMenu(json.data.cards[2]);
    console.log(json.data.cards[2]);
    
  }

  return [restaurant, resMenu];
};

export default useRestaurant;
