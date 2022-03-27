import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import SuperSadImg from "../../assets/img/supperSad.png";
import ArrovLeft from "../../assets/img/arrov-left.svg";

const Admin = () => {
  const [adminCard, setAdminCard] = useState([]);
  const getAdminCard = async () => {
    try {
      const { data } = await axios.get(
        "https://623cacbd7efb5abea68567ed.mockapi.io/orders"
      );
      setAdminCard(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAdminCard();
  }, []);

  const adminItem = adminCard.map((obj) => obj.items).flat();

  const deleteAdminState = () => {
    adminCard.forEach((item) => {
      axios.delete(
        `https://623cacbd7efb5abea68567ed.mockapi.io/orders/${item.id}`
      );
    });
    setAdminCard([]);
  };

  return (
    <>
      <div className="content__header">
        <h1 className="content__header-title">Мои покупки</h1>
      </div>

      {adminItem.length === 0 ? (
        <div className="favorite__empty">
          <div className="favorite__empty-wrap">
            <div className="favorite__empty-img">
              <img width={70} height={70} src={SuperSadImg} alt="Sad-Img" />
            </div>
            <div className="favorite__empty-title">
              <h3>У вас нет заказов</h3>
            </div>
            <div className="favorite__empty-text">
              <p>Вы нищеброд? Оформите хотя бы один заказ</p>
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
        <>
          <div className="content__wrap">
            {adminItem.map((item) => {
              return <Card card={item} key={Math.random() + 1} />;
            })}
          </div>
          <div>
            <button onClick={deleteAdminState}>Очистить</button>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
