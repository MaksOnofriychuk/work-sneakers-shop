import React from "react";
import Logo from "./assets/img/logo.png";
import Basket from "./assets/img/basket.svg";
import Like from "./assets/img/like.svg";
import Sneak1 from "./assets/sneakers/1.jpg";
import Sneak2 from "./assets/sneakers/2.jpg";
import Sneak3 from "./assets/sneakers/3.jpg";
import Sneak4 from "./assets/sneakers/4.jpg";
import Sneak5 from "./assets/sneakers/5.jpg";
import Sneak6 from "./assets/sneakers/6.jpg";
import Sneak7 from "./assets/sneakers/7.jpg";
import Sneak8 from "./assets/sneakers/8.jpg";
import Sneak9 from "./assets/sneakers/9.jpg";
import ButtonAdd from "./assets/button/button-add1.svg";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header__left">
          <img src={Logo} alt="logo" />
          <div className="header__info">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <div className="header__right">
          <div className="header__right-basket">
            <img src={Basket} alt="basket" />
            <span>1205 руб.</span>
          </div>

          <div className="header__right-like">
            <img src={Like} alt="like" />
          </div>
        </div>
      </header>

      <div className="content">
        <div className="content__header">
          <h1 className="content__header-title">Все кроссовки</h1>
          <form>
            <input className="content__header-search" />
            <span>Search...</span>
          </form>
        </div>

        <div className="content__wrap">
          <div className="card__wrapper">
            <div className="card__img">
              <img width={133} height={112} src={Sneak1} alt="sneak" />
            </div>

            <div className="card__text">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            </div>

            <div className="card__bottom">
              <div className="card__bottom-price">
                <span>Цена:</span>
                <p>12 999 руб.</p>
              </div>

              <button className="card__bottom-add">
                <img width={32} height={32} src={ButtonAdd} alt="button-add" />
              </button>
            </div>
          </div>
          <div className="card__wrapper">
            <div className="card__img">
              <img width={133} height={112} src={Sneak2} alt="sneak" />
            </div>

            <div className="card__text">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            </div>

            <div className="card__bottom">
              <div className="card__bottom-price">
                <span>Цена:</span>
                <p>12 999 руб.</p>
              </div>

              <button className="card__bottom-add">
                <img width={32} height={32} src={ButtonAdd} alt="button-add" />
              </button>
            </div>
          </div>
          <div className="card__wrapper">
            <div className="card__img">
              <img width={133} height={112} src={Sneak3} alt="sneak" />
            </div>

            <div className="card__text">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            </div>

            <div className="card__bottom">
              <div className="card__bottom-price">
                <span>Цена:</span>
                <p>12 999 руб.</p>
              </div>

              <button className="card__bottom-add">
                <img width={32} height={32} src={ButtonAdd} alt="button-add" />
              </button>
            </div>
          </div>
          <div className="card__wrapper">
            <div className="card__img">
              <img width={133} height={112} src={Sneak4} alt="sneak" />
            </div>

            <div className="card__text">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            </div>

            <div className="card__bottom">
              <div className="card__bottom-price">
                <span>Цена:</span>
                <p>12 999 руб.</p>
              </div>

              <button className="card__bottom-add">
                <img width={32} height={32} src={ButtonAdd} alt="button-add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
