import "./ContactDetails.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

function ContactDetails({ person }) {
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
                <div className="personContactTile">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="personContactIcon"
                  />
                  <span>{person.contact.email}</span>
                </div>
                <div className="personContactTile">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="personContactIcon"
                  />
                  <span>{person.contact.phone}</span>
                </div>
                <div className="personContactTile">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="personContactIcon"
                  />
                  <span>{person.contact.facebook}</span>
                </div>
                <div className="personContactTile">
                  {person.contact.facebook}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export { ContactDetails };
