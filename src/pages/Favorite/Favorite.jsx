import React, { useState } from "react";
import Sneakers3 from "../../assets/sneakers/3.jpg";
import HeartLiked from "../../assets/button/heart-liked.svg";
import HeartUnliked from "../../assets/button/heart-unliked.svg";
import ButtonAdd from "../../assets/button/button-add1.svg";
// import ButtonDone from "../../assets/button/button-done.svg";
import "./favorite.scss";

const Favorite = ({ favoriteItem, favoritedStatus, addToFavorite }) => {
  const [isFavorite] = useState(favoritedStatus);
  return (
    <>
      <div className="favorite__wrapper">
        <img
          onClick={() => addToFavorite(favoriteItem)}
          className="favorite__liked"
          src={isFavorite ? HeartLiked : HeartUnliked}
          alt="favorite_unliked"
          width={32}
          height={32}
        />
        <div className="favorite__img">
          <img width={133} height={112} src={Sneakers3} alt="sneak" />
        </div>

        <div className="favorite__text">
          <p>{favoriteItem.text}</p>
        </div>

        <div className="favorite__bottom">
          <div className="favorite__bottom-price">
            <span>Цена:</span>
            <p>{favoriteItem.price} руб</p>
          </div>

          <div className="favorite__bottom-add">
            <img
              // onClick={() => addCardToBasket(favoriteItem)}
              width={32}
              height={32}
              src={ButtonAdd}
              alt="button-add"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
