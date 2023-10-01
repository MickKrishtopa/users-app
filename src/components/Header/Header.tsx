import React from "react";
import "./Header.scss";

type propsHeader = {
    title: string;
    link: string;
};
const Header: React.FC<propsHeader> = ({ title, link }) => {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
            <a href={link} target="blank" className="header__link">
                Repo
            </a>
        </header>
    );
};

export default Header;
