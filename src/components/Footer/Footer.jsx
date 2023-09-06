import React from "react";
import qiwi from "../assets/icons/qiwi.svg";
import web from "../assets/icons/web.svg";
import yandex from "../assets/icons/yandex.svg";
import vk from "../assets/icons/vk.svg";
import email from "../assets/icons/email.svg";
import "./styles.scss";

const footerList = [
    {title: "Qiwi wallet", icon: qiwi, id: 0},
    {title: "Yandex Money", icon: yandex, id: 1},
    {title: "Web Money", icon: web, id: 2},
];

const contactList = [
    {title: "info@ipsum228.com", icon: email, id: 0},
    {title: "Мы вконтакте", icon: vk, id: 1},
];

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__copyright">© 2018 «LoremIpsum.net» Все права защищены.</p>
                <div className="footer__line" />
                <div className="footer__list">
                    {footerList.map((item) => (
                        <div key={item.id} className="footer__item">
                            <img src={item.icon} alt="icon" className="footer__icon" />
                            <p className="footer__title">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="footer__line" />
                <div className="footer__list">
                    {contactList.map((item) => (
                        <div key={item.id} className="footer__item">
                            <img src={item.icon} alt="icon" className="footer__icon" />
                            <p className="footer__title">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};
