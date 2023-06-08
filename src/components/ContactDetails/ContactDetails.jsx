import "./ContactDetails.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faEnvelope,
  faLocationDot,
  faPaintbrush,
  faPencil,
  faPhone,
  faUserXmark,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faDiscord } from "@fortawesome/free-brands-svg-icons";

function ContactDetails({ person, removeUser }) {
  const handleUserDelete = () => {
    removeUser(person.uuid);
  };

  return (
    <div className="contactDetails">
      {person === undefined ? (
        "Click a person from list on the left to show details"
      ) : (
        <>
          <HelmetProvider>
            <Helmet>
              <title>{`${person.firstName} ${person.lastName} | Contact Book`}</title>
            </Helmet>
          </HelmetProvider>

          <main className="personDetails">
            <img
              className="avatarImageLarge"
              alt="avatar"
              src={person.avatar}
            />

            <h2 className="personDetailsUserName">
              {person.firstName} {person.lastName}
            </h2>

            <div className="personDetailsDescription">
              {person.description === "" ? (
                <i>No description is given</i>
              ) : (
                person.description
              )}
            </div>

            <div className="personDetailsAddress">
              <FontAwesomeIcon
                className="personDetailsIcon"
                icon={faLocationDot}
              />
              <div className="description">
                <span>{person.location.line1}</span>
                <span>{person.location.line2}</span>
              </div>
            </div>

            <div className="personDetailsContact">
              <h3 className="getInContactHeader">
                Get In Contact with {person.firstName} {person.lastName}
              </h3>

              <div className="personContactTiles">
                <div className="personContactGroup">
                  <div className="personContactTile">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="personContactIcon"
                    />
                    <span>{person.contact.email}</span>
                  </div>

                  <div className="personContactTile">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="personContactIcon"
                    />
                    <a
                      className="hyperlink"
                      href={person.contact.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {person.contact.facebook}
                    </a>
                  </div>
                </div>

                <div className="personContactGroup">
                  <div className="personContactTile">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="personContactIcon"
                    />
                    <span>{person.contact.phone}</span>
                  </div>

                  <div className="personContactTile">
                    <FontAwesomeIcon
                      icon={faDiscord}
                      className="personContactIcon"
                    />
                    <span>{person.contact.discord}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="formRow width80">
              <button type="button" className="formButton">
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
        </>
      )}
    </div>
  );
}

export { ContactDetails };
