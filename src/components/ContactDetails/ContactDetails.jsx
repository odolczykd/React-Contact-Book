import "./ContactDetails.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
              <span>{person.location.line1}</span>
              <span>{person.location.line2}</span>
            </div>

            <div className="personDetailsContact">
              <h3>
                Get In Contact with
                <br />
                {person.firstName} {person.lastName}
              </h3>
              <span>{person.contact.email}</span>
              <span>{person.contact.phone}</span>
              <span>{person.contact.facebook}</span>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export { ContactDetails };
