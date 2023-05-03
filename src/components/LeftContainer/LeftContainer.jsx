import "./LeftContainer.css";
import "../ContactTile/ContactTile.css";
import { ContactTile } from "../ContactTile/ContactTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import { LogoHeader } from "../LogoHeader/LogoHeader";
import { Footer } from "../Footer/Footer";

function LeftContainer({ contacts, selectedMode }) {
  const [selectedUser, setSelectedUser] = useState("");
  const [query, setQuery] = useState("");

  const filteredContacts = useMemo(() => {
    return contacts
      .filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(query.toLowerCase());
      })
      .sort((a, b) => a.lastName.localeCompare(b.lastName));
  }, [query, contacts]);

  return (
    <section className="leftContainer">
      <LogoHeader />

      <input
        className="input"
        type="search"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search your contacts..."
      />

      <h3 className="yourContactsHeader">Your Contacts</h3>

      <div className="glassPaneButton" onClick={() => selectedMode("creator")}>
        <FontAwesomeIcon icon={faPlus} />
        <h4 className="">Add New Contact</h4>
      </div>

      <nav className="contactTilesContainer">
        {!contacts && <p>Loading...</p>}
        {filteredContacts.length > 0 ? (
          filteredContacts.map((user) => {
            return (
              <div
                key={user.uuid}
                onClick={() => {
                  selectedMode(selectedUser === user.uuid ? null : user.uuid);
                  setSelectedUser((prevState) => {
                    return prevState === "" ? user.uuid : "";
                  });
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

      <Footer />
    </section>
  );
}

export { LeftContainer };
