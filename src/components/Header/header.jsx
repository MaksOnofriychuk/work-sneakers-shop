import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Basket from "../../assets/img/basket.svg";
import Like from "../../assets/img/like.svg";
import AdminImg from "../../assets/img/admin.svg";
import { useCalculation } from "../../hooks/useCalculation";
import "./header.scss";

const Header = ({ openCart }) => {
  const { sumСalculation } = useCalculation();

  return (
    <header>
      <div className="header__left">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="header__info">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <div className="header__right">
        <div className="header__right-basket">
          <img onClick={openCart} src={Basket} alt="basket" />
          <span>{sumСalculation() || 0} руб</span>
        </div>

        <div className="header__right-like">
          <Link to="/favorite">
            <img src={Like} alt="like" />
          </Link>
        </div>
        <div className="header__right-admin">
          <Link to="/admin">
            <img src={AdminImg} alt="like" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
