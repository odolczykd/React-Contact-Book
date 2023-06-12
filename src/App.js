import "./App.css";
import { useEffect, useState } from "react";
import { LeftContainer } from "./components/LeftContainer/LeftContainer";
import { RightContainer } from "./components/RightContainer/RightContainer";
import { contactBuilder } from "./utils/contactBuilder";
import { LeftContainerMobile } from "./components/LeftContainer/LeftContainerMobile";

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

  const getContact = (contact) => {
    const uuid = contact.uuid;
    setContacts((prevState) => prevState.filter((user) => user.uuid !== uuid));
    setContacts((prevState) => [...prevState, contact]);
    setSelectedMode(() => uuid);
  };

  const deleteUser = (uuid) => {
    setContacts((prevState) =>
      prevState.filter((value) => value.uuid !== uuid)
    );
  };

  return (
    <div className="container">
      <LeftContainer contacts={contacts} selectedMode={getSelectedMode} />

      {/* Mobile View Only */}
      <LeftContainerMobile contacts={contacts} selectedMode={getSelectedMode} />

      <RightContainer
        mode={selectedMode}
        person={
          selectedMode !== "customize" &&
          contacts.find((value) => value.uuid === selectedMode)
        }
        sendUser={getContact}
        removeUser={deleteUser}
      />
    </div>
  );
}

export { App };
