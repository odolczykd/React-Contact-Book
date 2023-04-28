import "./App.css";
import { LeftContainer } from "./components/LeftContainer/LeftContainer";
import { useEffect, useState } from "react";
import { RightContainer } from "./components/RightContainer/RightContainer";

const USER_API_URL = "https://randomuser.me/api/?results=10&nat=us";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState("img/bay.jpg");

  /** Get Random User Data **/
  useEffect(() => {
    fetch(USER_API_URL)
      .then((response) => response.json())
      .then(({ results }) => {
        setUsers(
          results.map((user) => {
            return {
              uuid: user.login.uuid,
              firstName: user.name.first,
              lastName: user.name.last,
              location: {
                line1: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}`,
                line2: `${user.location.state}, ${user.location.country}`,
                coordinates: {
                  latitude: user.location.coordinates.latitude,
                  longitude: user.location.coordinates.longitude,
                },
              },
              contact: {
                email: user.email,
                phone: user.cell,
                facebook: `https://facebook.com/${user.login.username}`,
              },
              offset: user.location.timezone.offset,
              avatar: user.picture.large,
            };
          })
        );
      })
      .catch((err) => console.warn(err));
  }, []);

  const getSelectedMode = (mode) => {
    setSelectedMode(mode);
  };

  const getSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const getSelectedBackground = (backgroundUrl) => {
    setSelectedBackground(backgroundUrl);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${selectedBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LeftContainer
        users={users}
        selectedMode={getSelectedMode}
        color={selectedColor}
      />
      <RightContainer
        mode={selectedMode}
        person={
          selectedMode !== "customize" &&
          selectedMode !== "author" &&
          users.find((value) => value.uuid === selectedMode)
        }
        selectedColor={getSelectedColor}
        selectedBackground={getSelectedBackground}
      />
    </div>
  );
}

export { App };
