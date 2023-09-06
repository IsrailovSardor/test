import React from "react";
import "./styles.scss";

const bannerList = [
    {title: "At vero eos et accusamus et iusto odio dignissimos ducimus!", id: 0},
    {title: "- Totam rem aperiam eaque ipsa", id: 1},
    {title: "- Sit voluptatem accusantium doloremque laudantium", id: 2},
    {title: "- Sed ut perspiciatis, unde omnis iste natus error", id: 3},
];

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <p className="banner__text">
                    <span className="banner__text-highlight">Lorem ipsum</span> dolor sit amet consectetur{" "}
                    <span className="banner__text-highlight">adipiscing</span>
                </p>
                <ul className="banner__list">
                    {bannerList.map((item) => (
                        <li key={item.id} className="banner__list-item">
                            {item.title}
                        </li>
                    ))}
                </ul>
                <div className="banner__buttons">
                    <button className="banner__button-success">заказать</button>
                    <button className="banner__button-more">подробнее</button>
                </div>
            </div>
        </div>
    );
};
