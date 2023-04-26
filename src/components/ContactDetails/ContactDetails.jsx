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
            <img alt="avatar" src={person.avatar} />

            <span>
              {person.firstName} {person.lastName}
            </span>

            <span>
              <span>{person.location.line1}</span>
              <br />
              <span>{person.location.line2}</span>
            </span>

            <span>
              {person.contact.email} <br />
              {person.contact.phone} <br />
              {person.contact.facebook}
            </span>
          </main>
        </>
      )}
    </div>
  );
}

export { ContactDetails };
