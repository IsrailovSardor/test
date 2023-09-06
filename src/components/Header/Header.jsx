import React from "react";
import {NavLink} from "react-router-dom";
import "./styles.scss";

const navList = [
    {title: "Бизнес", id: 0, link: "/business"},
    {title: "О нас", id: 1, link: "/about"},
    {title: "Цены", id: 2, link: "/prices"},
    {title: "Оформить заказ", id: 3, link: "/order"},
];

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <p class="header__text">
                    LoremIpsum<span className="header__text--highlight">.Net</span>
                </p>
                <ul className="header__menu">
                    {navList.map((item) => (
                        <li className="header__menu-item" key={item.id}>
                            <NavLink to={item.link} className="header__menu-link" activeClassName="active">
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
