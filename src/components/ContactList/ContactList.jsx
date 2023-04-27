import "./ContactList.css";
import "../ContactTile/ContactTile.css";
import { ContactTile } from "../ContactTile/ContactTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ContactList({ users, selectUser }) {
  return (
    <section className="contactList">
      <header className="logoText">Contact Book</header>
      <div>Search Bar</div>
      <h4>Your Contacts</h4>
      <nav className="contactTilesContainer">
        <div className="contactTile">
          <FontAwesomeIcon icon={faPlus} />
          <h3 className="tileUserName">Add New Contact</h3>
        </div>

        {!users && <p>Loading...</p>}
        {users.length > 0 &&
          users.map((user) => {
            return (
              <div key={user.uuid} onClick={() => selectUser(user.uuid)}>
                <ContactTile user={user} />
              </div>
            );
          })}
      </nav>
    </section>
  );
}

export { ContactList };
