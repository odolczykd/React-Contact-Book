import "./RightContainer.css";
import { ContactDetails } from "../ContactDetails/ContactDetails";
import { ContactCreatorForm } from "../ContactCreatorForm/ContactCreatorForm";

function RightContainer({ mode, person, sendUser, removeUser }) {
  const getUser = (user) => {
    sendUser(user);
  };

  const deleteUser = (user) => {
    removeUser(user);
  };

  return (
    <main className="rightContainer">
      {mode === "creator" ? (
        <ContactCreatorForm sendUser={getUser} switchEditorMode={() => {}} />
      ) : (
        <ContactDetails
          person={person}
          removeUser={deleteUser}
          sendUser={getUser}
        />
      )}
    </main>
  );
}

export { RightContainer };
