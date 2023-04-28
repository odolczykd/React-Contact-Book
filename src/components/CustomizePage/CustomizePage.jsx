import "./CustomizePage.css";

function CustomizePage({ selectedColor, selectedBackground }) {
  return (
    <>
      <div>
        <button onClick={() => selectedColor("#ff0000")}>red</button>
        <button onClick={() => selectedColor("#02aa42")}>green</button>
        <button onClick={() => selectedColor("#ffff00")}>yellow</button>
      </div>

      <div className="backgroundLayout">
        <img
          alt="city"
          src="/img/city.jpg"
          onClick={() => selectedBackground("/img/city.jpg")}
          className="backgroundPhotoPreview"
        />

        <img
          alt="bay"
          src="/img/bay.jpg"
          onClick={() => selectedBackground("/img/bay.jpg")}
          className="backgroundPhotoPreview"
        />

        <img
          alt="forest"
          src="/img/forest.jpg"
          onClick={() => selectedBackground("/img/forest.jpg")}
          className="backgroundPhotoPreview"
        />
        <img
          alt="landscape"
          src="/img/landscape.jpg"
          onClick={() => selectedBackground("/img/landscape.jpg")}
          className="backgroundPhotoPreview"
        />

        <img
          alt="mountain"
          src="/img/mountain.jpg"
          onClick={() => selectedBackground("/img/mountain.jpg")}
          className="backgroundPhotoPreview"
        />

        <img
          alt="rocks"
          src="/img/rocks.jpg"
          onClick={() => selectedBackground("/img/rocks.jpg")}
          className="backgroundPhotoPreview"
        />
      </div>
    </>
  );
}

export { CustomizePage };
