import "./ContactCreatorForm.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPencil,
  faBroom,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { v4 as generateUUID } from "uuid";

function ContactCreatorForm({ sendNewUser }) {
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [discord, setDiscord] = useState("");

  const newContact = {
    uuid: generateUUID(),
    firstName: firstName,
    lastName: lastName,
    description: description,
    location: {
      line1: `${streetNumber} ${streetName}`,
      line2: `${city}, ${state}, ${country}`,
    },
    contact: {
      email: email,
      phone: phone,
      facebook: facebook,
      discord: discord,
    },
    offset: timezoneOffset,
    avatar: avatar,
  };

  const handleFormReset = () => {
    setAvatar(null);
    setFirstName("");
    setLastName("");
    setDescription("");
    setStreetNumber("");
    setStreetName("");
    setCity("");
    setState("");
    setCountry("");
    setTimezoneOffset("");
    setEmail("");
    setPhone("");
    setFacebook("");
    setDiscord("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendNewUser(newContact);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      className="creatorContainer"
    >
      <HelmetProvider>
        <Helmet>
          <title>Add New Contact | Contact Book</title>
        </Helmet>
      </HelmetProvider>

      <input
        type="file"
        accept="image/png, image/jpeg"
        id="avatar"
        name="avatar"
        onChange={(e) => setAvatar(e.target.files[0])}
        hidden
      />

      <label htmlFor="avatar" className="creatorAvatar">
        {avatar === null ? (
          <FontAwesomeIcon icon={faPlus} className="icon" />
        ) : (
          <>
            <img
              alt="avatar"
              src={URL.createObjectURL(avatar)}
              className="avatarDisplay"
            />
            <FontAwesomeIcon icon={faPencil} className="avatarChangeOverlay" />
          </>
        )}
      </label>

      <section className="formRow width80">
        <input
          className="input"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </section>

      <section className="formRow width80">
        <textarea className="input inputLarge" placeholder="Description" />
      </section>

      <section className="formColumn width80">
        <div className="formRow width100">
          <input
            className="input"
            type="text"
            placeholder="Street Number"
            pattern="[0-9]+"
            onChange={(e) => setStreetNumber(e.target.value)}
            required
          />

          <input
            className="input"
            type="text"
            placeholder="Street Name"
            onChange={(e) => setStreetName(e.target.value)}
            required
          />

          <input
            className="input"
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="formRow width100">
          <input
            className="input"
            type="text"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
            required
          />

          <input
            className="input"
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
            required
          />

          <input
            className="input"
            type="text"
            placeholder="Time Offset (e.g. +2:00)"
            pattern="/^[\+-](([0-9]|1[0-1]):[0-5]{0,5}|12:00)$/gm"
            onChange={(e) => setTimezoneOffset(e.target.value)}
            required
          />
        </div>
      </section>

      <section className="formRow width80">
        <input
          className="input"
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </section>

      <section className="formRow width80">
        <input
          className="input"
          type="text"
          placeholder="Facebook Profile Link"
          onChange={(e) => setFacebook(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Discord Username (e.g. User#1234)"
          onChange={(e) => setDiscord(e.target.value)}
        />
      </section>

      <section className="formRow width80">
        <button type="reset" className="formButton">
          <FontAwesomeIcon icon={faBroom} />
          <span>Clear Form</span>
        </button>
        <button className="formButton">
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Add New Contact</span>
        </button>
      </section>
    </form>
  );
}

export { ContactCreatorForm };
