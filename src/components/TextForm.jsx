import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpclick = () => {
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
    var textArea = document.getElementById("mybox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Copied To Clipboard", "Success");
  };

  const handleExSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces", "Success");
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const darkMode = props.mode === "dark";

  return (
    <>
      <div
        className="container my-4 p-4 rounded shadow"
        style={{
          backgroundColor: darkMode ? "#2c2c2c" : "#f9f9f9",
          color: darkMode ? "white" : "#222",
          transition: "all 0.3s ease",
        }}
      >
        <h1 className="mb-4 text-center" style={{ fontWeight: "700" }}>
          {props.heading}
        </h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleonchange}
            rows="8"
            style={{
              backgroundColor: darkMode ? "#444" : "white",
              color: darkMode ? "white" : "black",
              borderRadius: "8px",
              border: darkMode ? "1px solid #666" : "1px solid #ccc",
              fontSize: "1.1rem",
              padding: "12px",
            }}
          ></textarea>
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-4 gap-3">
          <button
            className="btn btn-primary px-4 py-2 shadow-sm"
            onClick={handleUpclick}
            style={{ fontWeight: "600", borderRadius: "6px" }}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary px-4 py-2 shadow-sm"
            onClick={handleLoclick}
            style={{ fontWeight: "600", borderRadius: "6px" }}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-danger px-4 py-2 shadow-sm"
            onClick={handleclearclick}
            style={{ fontWeight: "600", borderRadius: "6px" }}
          >
            Clear Text
          </button>
          <button
            className="btn btn-success px-4 py-2 shadow-sm"
            onClick={handleCopy}
            style={{ fontWeight: "600", borderRadius: "6px" }}
          >
            Copy Text
          </button>
          <button
            className="btn btn-warning px-4 py-2 shadow-sm text-dark"
            onClick={handleExSpace}
            style={{ fontWeight: "600", borderRadius: "6px" }}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div
        className="container my-4 p-4 rounded shadow"
        style={{
          backgroundColor: darkMode ? "#232323" : "#fff",
          color: darkMode ? "white" : "#222",
          transition: "all 0.3s ease",
          border: darkMode ? "1px solid #444" : "1px solid #ddd",
        }}
      >
        <h2 className="mb-3" style={{ fontWeight: "700" }}>
          Your Text Summary
        </h2>
        <p style={{ fontSize: "1.1rem" }}>
          {
            text.trim().length === 0
              ? 0
              : text.trim().split(/\s+/).length
          }{" "}
          words and {text.length} characters
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          {(
            0.008 *
            (text.trim().length === 0
              ? 0
              : text.trim().split(/\s+/).length)
          ).toFixed(2)}{" "}
          Minutes read
        </p>

        <h2 className="my-3" style={{ fontWeight: "700" }}>
          Preview
        </h2>
        <p style={{ fontSize: "1.1rem", whiteSpace: "pre-wrap" }}>
          {text.length === 0 ? "Nothing to preview!" : text}
        </p>
      </div>
    </>
  );
}
