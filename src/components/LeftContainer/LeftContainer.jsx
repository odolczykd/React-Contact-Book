import "./LeftContainer.css";
import "../ContactTile/ContactTile.css";
import { ContactTile } from "../ContactTile/ContactTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPaintbrush,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";

function LeftContainer({ users, selectedMode, color }) {
  const [selectedUser, setSelectedUser] = useState("");
  const [query, setQuery] = useState("");

  const filteredContacts = useMemo(() => {
    return users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, users]);

  return (
    <section className="leftContainer">
      <header className="logoText">
        <span className="white">
          Contact
          <span className="blue">Book</span>
        </span>
      </header>

      <input
        className="searchInput"
        type="search"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search your contacts..."
      />

      <h3 className="yourContactsHeader">Your Contacts</h3>

      <div className="glassPaneButton">
        <FontAwesomeIcon icon={faPlus} />
        <h4 className="">Add New Contact</h4>
      </div>

      <nav className="contactTilesContainer">
        {!users && <p>Loading...</p>}
        {filteredContacts.length > 0 ? (
          filteredContacts.map((user) => {
            return (
              <div
                key={user.uuid}
                onClick={() => {
                  selectedMode(user.uuid);
                  setSelectedUser(user.uuid);
                }}
              >
                <ContactTile
                  user={user}
                  isSelected={selectedUser === user.uuid}
                />
              </div>
            );
          })
        ) : (
          <div>None of your contacts matches given pattern</div>
        )}
      </nav>

      <footer className="leftContainerFooter">
        <span
          className="glassPaneButton footerButton"
          onClick={() => selectedMode("customize")}
        >
          <FontAwesomeIcon icon={faPaintbrush} />
          <span>Customize</span>
        </span>

        <span
          className="glassPaneButton footerButton"
          onClick={() => selectedMode("author")}
        >
          <FontAwesomeIcon icon={faUser} />
          <span>Author</span>
        </span>
      </footer>
    </section>
  );
}

export { LeftContainer };
