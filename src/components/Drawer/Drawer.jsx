import React, { useContext, useState } from "react";
import Sneak3 from "../../assets/sneakers/3.jpg";
import Delete from "../../assets/button/button-delete.svg";
import ArrovRight from "../../assets/img/arrov-right.svg";
import CartEmpty from "../../assets/img/cart-empty.jpg";
import ArrovLeft from "../../assets/img/arrov-left.svg";
import Ordering from "../../assets/img/ordering.jpg";
import "../Drawer/drawer.scss";
import axios from "axios";
import { AppContext } from "../../App";
import { useCalculation } from "../../hooks/useCalculation";

const Drawer = ({ closeCart, cartItems, onRemoveCart }) => {
  const { sumСalculation, percentageOfTheAmount } = useCalculation();
  const { setCartItems } = useContext(AppContext);
  const [isCompleted, setIsCompleted] = useState(true);

  const sendToOrdering = async () => {
    try {
      setIsCompleted(false);
      await axios.post("https://623cacbd7efb5abea68567ed.mockapi.io/orders", {
        items: cartItems,
      });

      cartItems.forEach((item) => {
        axios.delete(
          `https://623cacbd7efb5abea68567ed.mockapi.io/cart/${item.id}`
        );
      });
      setCartItems([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="drawer">
      <div className="drawer__wrapper">
        <div className="drawer__header">
          <h3 className="drawer__header-title">Корзина</h3>
          <div className="drawer__header-btn">
            <img
              onClick={closeCart}
              width={32}
              height={32}
              src={Delete}
              alt="btn-delete"
            />
          </div>
        </div>

        {isCompleted ? (
          cartItems.length > 0 ? (
            <div className="wrapp-content">
              {cartItems.map((item) => {
                return (
                  <div key={item.id} className="drawer__card">
                    <div className="drawer__card-img">
                      <img
                        width={70}
                        height={70}
                        src={Sneak3}
                        alt="basket-sneaker"
                      />
                    </div>
                    <div className="drawer__card-info">
                      <p className="drawer__card-text">{item.text}</p>
                      <span className="drawer__card-price">
                        {item.price} руб
                      </span>
                    </div>
                    <div className="drawer__card-button">
                      <img
                        onClick={() => onRemoveCart(item.id)}
                        width={32}
                        height={32}
                        src={Delete}
                        alt="delete-button"
                      />
                    </div>
                  </div>
                );
              })}

              <div className="drawer__bottom">
                <div className="drawer__bottom-wrap">
                  <div className="drawer__bottom-price">
                    <p>Итого: </p>
                    <span>{sumСalculation()} руб</span>
                  </div>
                  <div className="drawer__bottom-tax">
                    <p>Налог 5%: </p>
                    <span>{percentageOfTheAmount()} руб.</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => sendToOrdering()}
                    className="drawer__bottom-btn"
                  >
                    Оформить заказ
                    <img src={ArrovRight} alt="arrov-right" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="drawer__empty">
                <div className="drawer__empty-image">
                  <img
                    width={120}
                    height={120}
                    src={CartEmpty}
                    alt="cart-empty"
                  />
                </div>
                <div className="drawer__empty-title">
                  <h3>Корзина пустая</h3>
                </div>
                <div className="drawer__empty-text">
                  <p>
                    Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                  </p>
                </div>
                <div>
                  <button onClick={closeCart} className="drawer__empty-button">
                    <img src={ArrovLeft} alt="arrov-left" />
                    Вернуться назад
                  </button>
                </div>
              </div>
            </>
          )
        ) : (
          <>
            <div className="drawer__empty">
              <div className="drawer__empty-image">
                <img width={120} height={120} src={Ordering} alt="cart-empty" />
              </div>
              <div className="drawer__empty-title">
                <h3>Корзина пустая</h3>
              </div>
              <div className="drawer__empty-text">
                <p>
                  Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                </p>
              </div>
              <div>
                <button onClick={closeCart} className="drawer__empty-button">
                  <img src={ArrovLeft} alt="arrov-left" />
                  Вернуться назад
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Drawer;
