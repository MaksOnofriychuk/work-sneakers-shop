import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header/header";
import Drawer from "./components/Drawer/Drawer";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite/Favorite";
import ArrovLeft from "./assets/img/arrov-left.svg";
import SadImg from "./assets/img/sadImg.png";
import { Link } from "react-router-dom";
import Admin from "./components/Admin/Admin";

export const AppContext = createContext({});

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cardData, setcardData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchCard, setSearchCard] = useState("");
  const [favoriteCard, setFavoriteCard] = useState([]);

  const openCart = () => {
    setCartOpened(true);
  };
  const closeCart = () => {
    setCartOpened(false);
  };

  useEffect(() => {
    async function fetchData() {
      const favoriteresponse = await axios.get(
        "https://623cacbd7efb5abea68567ed.mockapi.io/favorites"
      );

      const cartResponse = await axios.get(
        "https://623cacbd7efb5abea68567ed.mockapi.io/cart"
      );

      const itemsResponse = await axios.get(
        "https://623cacbd7efb5abea68567ed.mockapi.io/items"
      );

      setLoading(false);

      setCartItems(cartResponse.data);
      setFavoriteCard(favoriteresponse.data);
      setcardData(itemsResponse.data);
    }

    fetchData();
  }, []);

  const findProduct = ({ target }) => {
    setSearchCard(target.value);
  };

  const findsCard =
    cardData &&
    cardData.filter((card) => {
      return card.text.includes(searchCard);
    });

  const cardList = cardData && findsCard ? findsCard : cardData;

  const onRemoveCart = async (id) => {
    try {
      const newCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(newCartItems);
      await axios.delete(
        `https://623cacbd7efb5abea68567ed.mockapi.io/cart/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getObjCard = async (obj) => {
    try {
      if (cartItems && cartItems.find((item) => item.id === obj.id)) {
        const newCartItems = cartItems.filter((o) => o.id !== obj.id);
        setCartItems(newCartItems);
        await axios.delete(
          `https://623cacbd7efb5abea68567ed.mockapi.io/cart/${obj.id}`
        );
      } else {
        await axios.post(
          "https://623cacbd7efb5abea68567ed.mockapi.io/cart",
          obj
        );
        setCartItems((prevState) => [...prevState, obj]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorite = async (obj) => {
    try {
      if (favoriteCard && favoriteCard.find((item) => item.id === obj.id)) {
        const newfavoriteCard = favoriteCard.filter((o) => o.id !== obj.id);
        setFavoriteCard(newfavoriteCard);
        await axios.delete(
          `https://623cacbd7efb5abea68567ed.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://623cacbd7efb5abea68567ed.mockapi.io/favorites",
          obj
        );
        setFavoriteCard((prevState) => [...prevState, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.find((obj) => obj.id === id);
  };

 
  return (
    <AppContext.Provider
      value={{
        cartItems,
        favoriteCard,
        cardList,
        isItemAdded,
        setCartItems,
      }}
    >
      <div className="wrapper">
        <div className={cartOpened ? "overlay" : "overlay close"}>
          <Drawer
            cartItems={cartItems}
            closeCart={closeCart}
            onRemoveCart={onRemoveCart}
          />
        </div>
        <Header openCart={openCart} />
        <Route exact path="/">
          <Home
            setSearchCard={setSearchCard}
            findProduct={findProduct}
            getObjCard={getObjCard}
            addToFavorite={addToFavorite}
            loading={loading}
          />
        </Route>
        <Route path="/favorite">
          <div className="favorite__header">
            <h1 className="favorite__header-title">Мои Закладки</h1>
          </div>
          <div className="favorite__content-wrap">
            {favoriteCard.length === 0 ? (
              <div className="favorite__empty">
                <div className="favorite__empty-wrap">
                  <div className="favorite__empty-img">
                    <img width={70} height={70} src={SadImg} alt="Sad-Img" />
                  </div>
                  <div className="favorite__empty-title">
                    <h3>Закладок нет :(</h3>
                  </div>
                  <div className="favorite__empty-text">
                    <p>Вы ничего не добавляли в закладки</p>
                  </div>
                  <div>
                    <Link to="/">
                      <button className="favorite__empty-btn">
                        <img src={ArrovLeft} alt="arrov-left" />
                        <span>Вернуться назад</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              favoriteCard.map((favoriteItem) => (
                <Favorite
                  key={favoriteItem.id}
                  favoriteItem={favoriteItem}
                  favoritedStatus={true}
                  addToFavorite={addToFavorite}
                />
              ))
            )}
          </div>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
