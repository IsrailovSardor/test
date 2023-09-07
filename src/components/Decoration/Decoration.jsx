import React, {useState} from "react";
import email from "../assets/icons/decoration/email.svg";
import file from "../assets/icons/decoration/file.svg";
import lupa from "../assets/icons/decoration/lupa.svg";
import money from "../assets/icons/decoration/money.svg";
import procent from "../assets/icons/decoration/procent.svg";
import files from "../assets/icons/file.svg";
import arrow from "../assets/icons/arrow.svg";
import "./styles.scss";

const listArr = [
    {
        title: "Lorem ipsum dolorsit amet",
        icon: lupa,
    },
    {
        title: "Сonsecteturadipiscing elit",
        icon: procent,
    },
    {
        title: "Sed do eiusmod tempor",
        icon: file,
    },
    {
        title: "Esse cillum doloreeu fugiat",
        icon: email,
    },
    {
        title: "Excepteur sint occaecat cupidatat non proident",
        icon: money,
    },
];

const dorpDownArr = [
    {title: "Sed ut perspiciatis"},
    {title: "Nemo enim ipsam"},
    {title: "Et harum quidem"},
    {title: "Temporibus autem"},
    {title: "Itaque earum rerum"},
    {title: "Sed ut perspiciatis"},
    {title: "Nemo enim ipsam"},
    {title: "Et harum quidem"},
    {title: "Temporibus autem"},
    {title: "Itaque earum rerum"},
];

export const Decoration = () => {
    const [value, setValue] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [valueDropDown, setValueDropDown] = useState(null);
    return (
        <div class="order">
            <div class="order-form">
                <div class="order-header">
                    <p class="order-header__title">
                        Оформление <span className="order-header__title-highlight">Заказа</span>
                    </p>
                    <p class="order-header__description">Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
                </div>
                <div class="item-list">
                    {listArr.map((item, index) => (
                        <div class="item" key={index}>
                            <div class="item-icon">
                                <img src={item.icon} alt="icon" />
                            </div>
                            <p class="item-title">{item.title}</p>
                        </div>
                    ))}
                </div>
                <form class="order-form-fields" action="#">
                    <div class="form-inputs">
                        <div className="form-dropdown">
                            <div
                                className="form-dropdown__header"
                                style={{
                                    borderBottom: isOpen ? "0" : "1px solid rgba(255, 255, 255, 1)",
                                    borderBottomLeftRadius: isOpen ? "0" : "3px",
                                    borderBottomRightRadius: isOpen ? "0" : "3px",
                                }}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <p className="form-dropdown__header-title">{valueDropDown ?? "Выберите тип системы"}</p>
                                <img src={arrow} alt="arrow" />
                            </div>
                            {isOpen && (
                                <div className="form-dropdown__main">
                                    {dorpDownArr.map((item, index) => (
                                        <p
                                            style={{color: valueDropDown === item.title ? "#43ABF0" : "black"}}
                                            className="form-dropdown__main-title"
                                            key={index}
                                            onClick={() => {
                                                setValueDropDown(item.title);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {item.title}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>

                        <input type="text" class="form-input" placeholder="Ваш e-mail" />
                        <input type="text" class="form-input" placeholder="Ваше имя" />
                    </div>
                    <div class="form-controls">
                        <div class="form-input-range">
                            <div class="form-input__title">
                                <p class="form-input__title-text">Sed ut perspiciatis, unde omnis iste natus</p>
                                <p class="form-input__title-procent">{value} %</p>
                            </div>
                            <input type="range" name="" id="" class="form-input__range" onChange={(e) => setValue(e.target.value)} />
                        </div>
                        <label htmlFor="file" className="form-input-label">
                            <img src={files} alt="file" />
                            Прикрепить файл
                            <input type="file" name="" id="file" class="form-input-file" />
                        </label>
                    </div>
                    <button class="submit-button">Отправить</button>
                </form>
            </div>
        </div>
    );
};
