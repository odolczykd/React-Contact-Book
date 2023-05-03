import "./RightContainer.css";
import { AuthorPage } from "../AuthorPage/AuthorPage";
import { ContactDetails } from "../ContactDetails/ContactDetails";
import { ContactCreator } from "../ContactCreator/ContactCreator";

function RightContainer({ mode, person }) {
  return (
    <main className="rightContainer">
      {mode === "author" && <AuthorPage />}
      {mode === "creator" && <ContactCreator />}
      {mode !== "author" && mode !== "creator" && (
        <ContactDetails person={person} />
      )}
    </main>
  );
}

export { RightContainer };
