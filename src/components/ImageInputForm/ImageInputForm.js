import React from "react";
import "./ImageInputForm.css";

const ImageInputForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="sans-serif">
      <p className="f3 navy w-70 center">
        {"I WILL DETECT A FACE IN ANY PICTURE. TRY ME!"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f3 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link pa2 ph3 pv2 dib white bg-navy
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
