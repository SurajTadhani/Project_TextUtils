import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success");
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "Success");
  };
  const handleclearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "Success");
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard", "Success");
  };

  const handleExSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Remove Extra Spaces", "Success");
  };

  const handleonchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="form-group py-5">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleonchange}
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>
            Convert The Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>
            Convert The Lowercase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleclearclick}
          >
            Clear Text
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleExSpace}>
            {" "}
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container my-3 border p-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
