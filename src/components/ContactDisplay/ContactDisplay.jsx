import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import emptyAvatar from "../../img/user.png";

function ContactDisplay({ person }) {
  return (
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
          src={person.avatar || emptyAvatar}
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
          <FontAwesomeIcon className="personDetailsIcon" icon={faLocationDot} />
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
                <a
                  className="hyperlink"
                  href={`mailto:${person.contact.email}`}
                >
                  {person.contact.email}
                </a>
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
                  {person.contact.facebook ? (
                    <>
                      <span>/</span>
                      <span>{person.contact.facebook.split("/").at(3)}</span>
                    </>
                  ) : (
                    <i>not given</i>
                  )}
                </a>
              </div>
            </div>

            <div className="personContactGroup">
              <div className="personContactTile">
                <FontAwesomeIcon icon={faPhone} className="personContactIcon" />
                <span>{person.contact.phone}</span>
              </div>

              <div className="personContactTile">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="personContactIcon"
                />
                <span>{person.contact.discord || <i>not given</i>}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export { ContactDisplay };
