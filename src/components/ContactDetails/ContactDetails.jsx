import "./ContactDetails.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { ContactDisplay } from "../ContactDisplay/ContactDisplay";
import { useState } from "react";
import { ContactCreatorForm } from "../ContactCreatorForm/ContactCreatorForm";

function ContactDetails({ person, removeUser, sendUser }) {
  const [editorMode, setEditorMode] = useState(false);

  const handleEditorModeChange = () => {
    setEditorMode(true);
  };

  const handleUserDelete = () => {
    removeUser(person.uuid);
  };

  const getUser = (user) => {
    sendUser(user);
  };

  const switchEditorMode = (state) => {
    setEditorMode(state);
  };

  return (
    <div className="contactDetails">
      {editorMode ? (
        <ContactCreatorForm
          userToEdit={person}
          sendUser={getUser}
          switchEditorMode={switchEditorMode}
        />
      ) : person === undefined ? (
        <>
          <HelmetProvider>
            <Helmet>
              <title>Contact Book</title>
            </Helmet>
          </HelmetProvider>

          <span className="info">
            Click a person from list on the left to show details.
          </span>
        </>
      ) : (
        <main className="personDetails">
          <ContactDisplay person={person} />

          <div className="buttonContainer">
            <button
              type="button"
              onClick={handleEditorModeChange}
              className="formButton"
            >
              <FontAwesomeIcon icon={faPencil} />
              <span>Edit Contact</span>
            </button>
            <button
              type="button"
              onClick={handleUserDelete}
              className="formButton"
            >
              <FontAwesomeIcon icon={faUserXmark} />
              <span>Delete Contact</span>
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export { ContactDetails };
