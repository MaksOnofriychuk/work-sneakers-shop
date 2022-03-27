import React, { useContext, useState } from "react";
import Sneakers3 from "../../assets/sneakers/3.jpg";
import ButtonAdd from "../../assets/button/button-add1.svg";
import HeartUnliked from "../../assets/button/heart-unliked.svg";
import HeartLiked from "../../assets/button/heart-liked.svg";
import ButtonDone from "../../assets/button/button-done.svg";
import "../Card/card.scss";
import { AppContext } from "../../App";

const Card = ({ card, getObjCard, addToFavorite, addedFavorite }) => {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(addedFavorite);

  const addCardToBasket = (obj) => {
    getObjCard(obj);
  };

  const addFavorite = (obj) => {
    setIsFavorite(!isFavorite);
    addToFavorite(obj);
  };

  return (
    <>
      <div className="card__wrapper">
        {addToFavorite ? (
          <img
            onClick={() => addFavorite(card)}
            className="card__liked"
            src={!isFavorite ? HeartUnliked : HeartLiked}
            alt="heart_unliked"
            width={32}
            height={32}
          />
        ) : null}

        <div className="card__img">
          <img width={133} height={112} src={Sneakers3} alt="sneak" />
        </div>

        <div className="card__text">
          <p>{card.text}</p>
        </div>

        <div className="card__bottom">
          <div className="card__bottom-price">
            <span>Цена:</span>
            <p>{card.price} руб</p>
          </div>

          <div className="card__bottom-add">
            {getObjCard ? (
              <img
                onClick={() => addCardToBasket(card)}
                width={32}
                height={32}
                src={isItemAdded(card.id) ? ButtonDone : ButtonAdd}
                alt="button-add"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
