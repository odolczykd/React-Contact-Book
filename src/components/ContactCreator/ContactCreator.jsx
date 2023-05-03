import "./ContactCreator.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPencil } from "@fortawesome/free-solid-svg-icons";

function ContactCreator() {
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
  const [socials, setSocials] = useState([]);

  return (
    <form onSubmit="#" onReset="#" className="creatorContainer">
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="avatar"
        name="avatar"
        onChange={(e) => setAvatar(e.target.files[0])}
        hidden
      />

      <label htmlFor="avatar" className="creatorAvatar">
        {avatar == null ? (
          <FontAwesomeIcon icon={faPlus} className="icon" />
        ) : (
          <>
            <img alt="avatar" src={URL.createObjectURL(avatar)} />
            <FontAwesomeIcon icon={faPencil} />
          </>
        )}
      </label>

      <section>
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

      <section>
        <textarea className="input" placeholder="Description" />
      </section>

      <section>
        <div>
          <input
            className="input"
            type="text"
            placeholder="Street Number"
            pattern="[0-9]+"
            onChange={(e) => setStreetNumber(e.target.value)}
          />

          <input
            className="input"
            type="text"
            placeholder="Street Name"
            onChange={(e) => setStreetName(e.target.value)}
          />

          <input
            className="input"
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <input
            className="input"
            type="text"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          />

          <input
            className="input"
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />

          <input
            className="input"
            type="text"
            placeholder="Timezone Offset (e.g. +2:00)"
            pattern="/^[\+-](([0-9]|1[0-1]):[0-5]{0,5}|12:00)$/gm"
            onChange={(e) => setTimezoneOffset(e.target.value)}
            required
          />
        </div>
      </section>

      <section>
        <input
          className="input"
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
      </section>

      <section>
        <span>Add New Form of Contact</span>
      </section>
    </form>
  );
}

export { ContactCreator };
