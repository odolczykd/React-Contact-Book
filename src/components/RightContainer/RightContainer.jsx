import "./RightContainer.css";
import { CustomizePage } from "../CustomizePage/CustomizePage";
import { AuthorPage } from "../AuthorPage/AuthorPage";
import { ContactDetails } from "../ContactDetails/ContactDetails";

function RightContainer({ mode, person, selectedColor, selectedBackground }) {
  return (
    <main className="rightContainer">
      {mode === "customize" && (
        <CustomizePage
          selectedColor={selectedColor}
          selectedBackground={selectedBackground}
        />
      )}
      {mode === "author" && <AuthorPage />}
      {mode !== "customize" && mode !== "author" && (
        <ContactDetails person={person} />
      )}
    </main>
  );
}

export { RightContainer };
