import "./ContactList.css";
import { ContactTile } from "../ContactTile/ContactTile";

function ContactList({ users, selectUser }) {
  return (
    <section className="contactList">
      <header className="logoText">Phone Book</header>
      <div>Search Bar</div>
      <h4>Your Contacts</h4>
      <nav className="contactTilesContainer">
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
