import React, { useContext } from "react";
import { AppContext } from "../App.js";
import Card from "../components/Card/Card.jsx";
import Loader from "../components/Loader/Loader.jsx";

const Home = ({
  setSearchCard,
  searchCard,
  findProduct,
  getObjCard,
  addToFavorite,
  loading,
}) => {
  const { favoriteCard, cardList } = useContext(AppContext);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="content">
      <div className="content__header">
        <h1 className="content__header-title">Все кроссовки</h1>
        <form>
          <input
            onChange={(e) => findProduct(e)}
            value={searchCard}
            className="content__header-search"
          />
          <span>Search...</span>
          {searchCard ? (
            <button onClick={() => setSearchCard("")}>X</button>
          ) : null}
        </form>
      </div>

      {loading ? (
        <div className="content__wrap">
          {arr.map((l, index) => (
            <div key={index} className="card__wrapper">
              <Loader />
            </div>
          ))}
        </div>
      ) : (
        <div className="content__wrap">
          {cardList.map((card) => {
            return (
              <Card
                card={card}
                key={card.id}
                getObjCard={getObjCard}
                addToFavorite={addToFavorite}
                addedFavorite={favoriteCard.some(
                  (favoriteItem) => favoriteItem.id === card.id
                )}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
