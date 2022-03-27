import { useContext } from "react";
import { AppContext } from "../App";

export const useCalculation = () => {
  const { cartItems } = useContext(AppContext);
  const sumСalculation = () => {
    const a = cartItems.map((item) => {
      const q = Number(item.price.replace(/\s/g, ""));
      return q;
    });
    const totalPrice = a.reduce((sum, item) => sum + item, 0);
    return totalPrice;
  };

  const percentageOfTheAmount = () => {
    const percentage = (sumСalculation() / 100) * 5;
    return percentage;
  };
  return { sumСalculation, percentageOfTheAmount };
};
