import React from "react";
import "./ImageInputForm.css";

const ImageInputForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f2">
        {"This Tech Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f3 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link pa2 ph3 pv2 dib grey bg-orange
            "
            onClick={onButtonSubmit}
          >
            DETECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageInputForm;
