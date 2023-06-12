import "./LeftContainer.css";
import "../ContactTile/ContactTile.css";
import { useMemo, useState } from "react";
import { ContactTile } from "../ContactTile/ContactTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogoHeader } from "../LogoHeader/LogoHeader";
import { Footer } from "../Footer/Footer";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

function LeftContainer({ contacts, selectedMode }) {
  const [selectedUser, setSelectedUser] = useState("");
  const [query, setQuery] = useState("");
  const [isToggleVisible, setIsToggleVisible] = useState(false);

  // Contact Filtering
  const filteredContacts = useMemo(() => {
    return contacts
      .filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(query.toLowerCase());
      })
      .sort((a, b) => a.lastName.localeCompare(b.lastName));
  }, [query, contacts]);

  const renderContactList = () => {
    return (
      <section className="contactTilesContainer">
        {!contacts && <p>Loading...</p>}
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
                  selected={selectedUser === user.uuid}
                />
              </div>
            );
          })
        ) : (
          <div>None of your contacts matches given pattern</div>
        )}
      </section>
    );
  };

  return (
    <section className="leftContainer">
      <LogoHeader />

      <div
        className="glassPaneButton"
        onClick={() => {
          selectedMode("creator");
          setSelectedUser("");
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
        <h4 className="">Add New Contact</h4>
      </div>

      <h3 className="yourContactsHeader">Your Contacts</h3>

      <input
        className="input"
        type="search"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search your contacts..."
      />

      {renderContactList()}

      <Footer />
    </section>
  );
}

export { LeftContainer };
