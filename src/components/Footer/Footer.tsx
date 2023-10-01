import React from "react";
import "./Footer.scss";

type propsFooter = {
    name: string;
    link: string;
};
const Footer: React.FC<propsFooter> = ({ name, link }) => {
    return (
        <footer className="footer">
            <h3 className="footer__title">© {name}</h3>
            <a href={link} target="blank" className="footer__link">
                Github
            </a>
        </footer>
    );
};

export default Footer;
