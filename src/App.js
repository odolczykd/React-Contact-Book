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
        setContacts(
          results.map((user) => {
            return contactBuilder(user);
          })
        );
      })
      .catch((err) => console.warn(err));
  }, []);

  const getSelectedMode = (mode) => {
    setSelectedMode(mode);
  };

  return (
    <div className="container">
      <LeftContainer contacts={contacts} selectedMode={getSelectedMode} />
      <RightContainer
        mode={selectedMode}
        person={
          selectedMode !== "customize" &&
          selectedMode !== "author" &&
          contacts.find((value) => value.uuid === selectedMode)
        }
      />
    </div>
  );
}

export { App };
