import "./App.css";
import { useEffect, useState } from "react";
import { LeftContainer } from "./components/LeftContainer/LeftContainer";
import { RightContainer } from "./components/RightContainer/RightContainer";
import { contactBuilder } from "./utils/contactBuilder";

const USER_API_URL = "https://randomuser.me/api/?results=10&nat=us";

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);

  /** Get Random User Data **/
  useEffect(() => {
    fetch(USER_API_URL)
      .then((response) => response.json())
      .then(({ results }) => {
        setContacts(results.map((user) => contactBuilder(user)));
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const getSelectedMode = (mode) => {
    setSelectedMode(mode);
  };

  const getNewContact = (contact) => {
    setContacts((prevState) => [...prevState, contact]);
  };

  const deleteUser = (uuid) => {
    setContacts((prevState) =>
      prevState.filter((value) => value.uuid !== uuid)
    );
  };

  return (
    <div className="container">
      <LeftContainer contacts={contacts} selectedMode={getSelectedMode} />
      <RightContainer
        mode={selectedMode}
        person={
          selectedMode !== "customize" &&
          contacts.find((value) => value.uuid === selectedMode)
        }
        sendNewUser={getNewContact}
        removeUser={deleteUser}
      />
    </div>
  );
}

export { App };
