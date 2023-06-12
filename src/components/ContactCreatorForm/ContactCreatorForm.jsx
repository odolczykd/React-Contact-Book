import "./ContactCreatorForm.css";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPencil,
  faUserPlus,
  faTrash,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { v4 as generateUUID } from "uuid";

function ContactCreatorForm({ userToEdit, sendUser, switchEditorMode }) {
  const addressSplitter = (line1, line2) => {
    if (
      line1 === null ||
      line1 === undefined ||
      line2 === null ||
      line2 === undefined
    )
      return {
        streetNumber: null,
        streetName: null,
        city: null,
        state: null,
      };

    // Line 1: Split Street Number & Street Name
    const separator = line1.indexOf(" ");
    const streetNumber = line1.slice(0, separator);
    const streetName = line1.slice(separator);

    // Line 2: Split City & State
    const city = line2.split(", ").at(0);
    const state = line2.split(", ").at(1);

    return {
      streetNumber: streetNumber,
      streetName: streetName,
      city: city,
      state: state,
    };
  };

  const splitAddress = addressSplitter(
    userToEdit?.location?.line1,
    userToEdit?.location?.line2
  );

  const [avatar, setAvatar] = useState(userToEdit?.avatar || null);
  const [firstName, setFirstName] = useState(userToEdit?.firstName || "");
  const [lastName, setLastName] = useState(userToEdit?.lastName || "");
  const [description, setDescription] = useState(userToEdit?.description || "");
  const [streetNumber, setStreetNumber] = useState(
    splitAddress?.streetNumber || ""
  );
  const [streetName, setStreetName] = useState(splitAddress?.streetName || "");
  const [city, setCity] = useState(splitAddress?.city || "");
  const [state, setState] = useState(splitAddress?.state || "");
  const [timezoneOffset, setTimezoneOffset] = useState(
    userToEdit?.offset || ""
  );
  const [email, setEmail] = useState(userToEdit?.contact?.email || "");
  const [phone, setPhone] = useState(userToEdit?.contact?.phone || "");
  const [facebook, setFacebook] = useState(userToEdit?.contact?.facebook || "");
  const [discord, setDiscord] = useState(userToEdit?.contact?.discord || "");

  const handleStreetNumberInputChange = (e) => {
    const input = e.target;
    const regex = /^[0-9]+$/;
    if (input.value.match(regex) === null) {
      input.setCustomValidity(
        "Street number should have no characters other than numbers"
      );
    } else {
      setStreetNumber(input.value);
      input.setCustomValidity("");
    }
  };

  const handleOffsetInputChange = (e) => {
    const input = e.target;
    const regex = /^[+-](([0-9]|1[0-1]):[0-5][05]|12:00)$/;
    if (input.value.match(regex) === null) {
      input.setCustomValidity(
        "Incorrect Offset Format\nExamples: +2:00, -5:30"
      );
    } else {
      setTimezoneOffset(input.value);
      input.setCustomValidity("");
    }
  };

  const handleEmailInputChange = (e) => {
    const input = e.target;
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (input.value.match(regex) === null) {
      input.setCustomValidity(
        "Incorrect Email Address Format\nExample: me@example.com"
      );
    } else {
      setEmail(input.value);
      input.setCustomValidity("");
    }
  };

  const handlePhoneInputChange = (e) => {
    const input = e.target;
    const regex =
      /^([+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6})|([0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3})$/;
    if (input.value.match(regex) === null) {
      input.setCustomValidity(
        "Incorrect Phone Number Format\nExamples: (123) 456-7890, 505 505 505"
      );
    } else {
      setPhone(input.value);
      input.setCustomValidity("");
    }
  };

  const handleFacebookInputChange = (e) => {
    const input = e.target;
    const regex = /^(https?:\/\/)?(www.)?facebook.[a-z]{2,3}\/[A-Za-z0-9]+$/;
    if (input.value.match(regex) === null) {
      input.setCustomValidity("Invalid Facebook Profile Link");
    } else {
      setFacebook(input.value);
      input.setCustomValidity("");
    }
  };

  const handleDiscordInputChange = (e) => {
    const input = e.target;
    const regex = /^[A-Za-z0-9]+#[0-9]{4}$/;
    if (input.value.match(regex) === null) {
      input.setCustomValidity(
        "Invalid Discord Username Format\nExample: User#1234"
      );
    } else {
      setDiscord(input.value);
      input.setCustomValidity("");
    }
  };

  const newContact = {
    uuid: userToEdit ? userToEdit.uuid : generateUUID(),
    firstName: firstName,
    lastName: lastName,
    description: description,
    location: {
      line1: `${streetNumber} ${streetName}`,
      line2: `${city}, ${state}`,
    },
    contact: {
      email: email,
      phone: phone,
      facebook: facebook,
      discord: discord,
    },
    offset: timezoneOffset,
    avatar: avatar ? avatar : null,
  };

  const handleFormReset = () => {
    setAvatar(userToEdit?.avatar || null);
    setFirstName(userToEdit?.firstName || "");
    setLastName(userToEdit?.lastName || "");
    setDescription(userToEdit?.description || "");
    setStreetNumber(splitAddress?.streetNumber || "");
    setStreetName(splitAddress?.streetName || "");
    setCity(splitAddress?.city || "");
    setState(splitAddress?.state || "");
    setTimezoneOffset(userToEdit?.offset || "");
    setEmail(userToEdit?.contact?.email || "");
    setPhone(userToEdit?.contact?.phone || "");
    setFacebook(userToEdit?.contact?.facebook || "");
    setDiscord(userToEdit?.contact?.discord || "");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendUser(newContact);
    switchEditorMode(false);
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
        onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))}
        hidden
      />

      <label htmlFor="avatar" className="creatorAvatar">
        {avatar === null ? (
          <FontAwesomeIcon icon={faPlus} className="icon" />
        ) : (
          <>
            <img alt="avatar" src={avatar} className="avatarDisplay" />
            <FontAwesomeIcon icon={faPencil} className="avatarChangeOverlay" />
          </>
        )}
      </label>

      <section className="formRow width80">
        <input
          className="input"
          type="text"
          placeholder="First Name"
          defaultValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="Last Name"
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </section>

      <section className="formRow width80 desc">
        <textarea
          className="input inputLarge"
          placeholder="Description"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength="1500"
        />
      </section>

      <section className="formColumn width80">
        <div className="formRow width100 street">
          <input
            className="input"
            type="text"
            placeholder="Street Number"
            defaultValue={streetNumber}
            onChange={handleStreetNumberInputChange}
            required
          />

          <input
            className="input"
            type="text"
            placeholder="Street Name"
            defaultValue={streetName}
            onChange={(e) => setStreetName(e.target.value)}
            required
          />
        </div>

        <div className="formRow width100">
          <input
            className="input"
            type="text"
            placeholder="City"
            defaultValue={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <input
            className="input"
            type="text"
            placeholder="State"
            defaultValue={state}
            onChange={(e) => setState(e.target.value)}
            required
          />

          <input
            className="input"
            type="text"
            placeholder="Time Offset (e.g. +2:00)"
            defaultValue={timezoneOffset}
            onChange={handleOffsetInputChange}
            required
          />
        </div>
      </section>

      <section className="formRow width80">
        <input
          className="input"
          type="text"
          placeholder="Email Address"
          defaultValue={email}
          onChange={handleEmailInputChange}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="Phone Number"
          defaultValue={phone}
          onChange={handlePhoneInputChange}
          required
        />
      </section>

      <section className="formRow width80">
        <input
          className="input"
          type="text"
          placeholder="Facebook Profile Link"
          defaultValue={facebook}
          onChange={handleFacebookInputChange}
        />

        <input
          className="input"
          type="text"
          placeholder="Discord Username"
          defaultValue={discord}
          onChange={handleDiscordInputChange}
        />
      </section>

      <section className="buttonContainer">
        <button type="reset" className="formButton">
          <FontAwesomeIcon icon={faTrash} />
          <span>Reset</span>
        </button>
        <button className="formButton">
          {userToEdit ? (
            <>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Edit Contact</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faUserPlus} />
              <span>Add New Contact</span>
            </>
          )}
        </button>
      </section>
    </form>
  );
}

export { ContactCreatorForm };
