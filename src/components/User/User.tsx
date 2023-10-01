import "./User.scss";

import { User as userInterface } from "../../api";

const User: React.FC<userInterface> = ({ name, age, id }) => {
    return (
        <div className="user">
            <span className="user__name">{`${name},`}</span>
            <span className="user__age">{`age: ${age} `}</span>
        </div>
    );
};

export { User };
