import "./UserList.scss";
import { User } from "../User/User";
import { User as userInterface } from "../../api";
import React from "react";

type userListProps = {
  userToShow: userInterface[];
  isLoading: boolean;
  error: string;
};

const UserList: React.FC<userListProps> = ({
  userToShow,
  isLoading,
  error
}) => {
  return (
    <main className="user-list">
      {isLoading ? (
        <h2 className="user-list__message">Loading...</h2>
      ) : error ? (
        <h2 className="user-list__message">{error}</h2>
      ) : userToShow.length === 0 ? (
        <h2 className="user-list__message">Nothing not found</h2>
      ) : (
        userToShow.map((user) => (
          <User key={user.id} id={user.id} name={user.name} age={user.age} />
        ))
      )}
    </main>
  );
};

export { UserList, userListProps };
