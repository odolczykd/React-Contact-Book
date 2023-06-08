import "./RightContainer.css";
import { ContactDetails } from "../ContactDetails/ContactDetails";
import { ContactCreatorForm } from "../ContactCreatorForm/ContactCreatorForm";

function RightContainer({ mode, person, sendNewUser, removeUser }) {
  const getNewUser = (user) => {
    sendNewUser(user);
  };

  const deleteUser = (user) => {
    removeUser(user);
  };

  return (
    <main className="rightContainer">
      {mode === "creator" ? (
        <ContactCreatorForm sendNewUser={getNewUser} />
      ) : (
        <ContactDetails person={person} removeUser={deleteUser} />
      )}
    </main>
  );
}

export { RightContainer };
