import "./LeftContainerMobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function LeftContainerMobile({ contacts, selectedMode }) {
  const [selectedUser, setSelectedUser] = useState("");

  const sortedContacts = contacts.sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  const renderContacts = () => {
    return sortedContacts.map((user) => (
      <div
        key={user.uuid}
        onClick={() => {
          selectedMode(user.uuid);
          setSelectedUser(user.uuid);
        }}
        className={
          selectedUser === user.uuid ? "mobileCircle selected" : "mobileCircle"
        }
      >
        <img
          alt={`${user.firstName} ${user.lastName}`}
          src={user.avatar}
          className="avatar"
        />
      </div>
    ));
  };

  return (
    <section className="leftContainerMobile">
      <div
        onClick={() => {
          selectedMode("creator");
          setSelectedUser("");
        }}
        className="addButton"
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>

      <div className="contactContainer">{renderContacts()}</div>
    </section>
  );
}

export { LeftContainerMobile };
