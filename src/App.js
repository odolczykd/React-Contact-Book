import "./App.css";
import { ContactList } from "./components/ContactList/ContactList";
import { ContactDetails } from "./components/ContactDetails/ContactDetails";
import { useEffect, useState } from "react";

const USER_API_URL = "https://randomuser.me/api/?results=5&nat=au,us";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  /*** Last Seen Randomizers ***/

  const randomizeLastSeenMinutes = () => {
    const minutes = Math.floor(Math.random() * 60);
    return (
      "last seen " + minutes + (minutes === 1 ? " minute" : " minutes") + " ago"
    );
  };

  const randomizeLastSeenHours = () => {
    const hours = Math.floor(Math.random() * 23) + 1;
    return "last seen " + hours + (hours === 1 ? " hour" : " hours") + " ago";
  };

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
                line1: `${user.location.street.number} ${user.location.street.name}`,
                line2: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
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
              avatar: user.picture.large,
            };
          })
        );
      })
      .catch((err) => console.warn(err));
  }, []);

  const getSelectedUser = (uuid) => {
    setSelectedUser(uuid);
  };

  return (
    <div className="container">
      <ContactList users={users} selectUser={getSelectedUser} />
      <ContactDetails
        person={users.find((value) => value.uuid === selectedUser)}
      />
    </div>
  );
}

export { App };
