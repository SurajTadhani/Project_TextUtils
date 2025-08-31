import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./SpeechToText.css";

const SpeechToText = (props) => {
  const [textToCopy, setTextToCopy] = useState("");
  const [startListen, setListen] = useState(false);
  const navigate = useNavigate();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 2000,
  });

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setListen(true);
  };
  const stopListening = () => {
    SpeechRecognition.stopListening();
    setListen(false);
  };
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="container text-center mt-5">
        <h3>Your browser does not support Speech Recognition.</h3>
      </div>
    );
  }


  const darkMode = props.mode === "dark";

  return (
    <div
      className="container mt-5 p-4 rounded shadow dark:"
       style={{
         maxWidth: "700px",
          backgroundColor: darkMode ? "#2c2c2c" : "#f9f9f9",
          color: darkMode ? "white" : "#222",
          transition: "all 0.3s ease",
          userSelect: "text",
           boxShadow:
          "0 8px 16px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.1)",
        color: "#222",
        }}
    >
   
      <div className="mb-4">
        <IoArrowBack
          className="fs-1 text-primary"
          role="button"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0d6efd")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#0d6efd")}
        />
      </div>

      {/* Heading */}
      <h2 className="mb-4 text-center fw-bold" style={{ letterSpacing: "1px" }}>
        Speech to Text Converter
      </h2>

      {/* Transcript Display */}
      <div
        className="border rounded p-3 mb-4 shadow-sm"
        style={{
          minHeight: "180px",
          overflowY: "auto",
          fontSize: "1.25rem",
          lineHeight: "1.5",
          whiteSpace: "pre-wrap",
          cursor: "text",
          userSelect: "text",
          borderColor: "#ced4da",
        }}
        onClick={() => setTextToCopy(transcript)}
        title="Click here to set text for copying"
        aria-label="Speech transcript text"
      >
        {transcript || (
          <span className="text-muted fst-italic">
            Your spoken words will appear here...
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
        <button
          className="btn btn-outline-primary flex-grow-1"
          onClick={setCopied}
          disabled={!transcript}
          style={{ minWidth: "150px" }}
        >
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
        <button
          className={`btn ${
            startListen ? "btn-success" : "btn-primary"
          } flex-grow-1`}
          onClick={startListening}
          disabled={startListen}
          style={{ minWidth: "150px" }}
        >
          {startListen ? "Listening..." : "Start Listening"}
        </button>
        <button
          className="btn btn-danger flex-grow-1"
          onClick={stopListening}
          disabled={!startListen}
          style={{ minWidth: "150px" }}
        >
          Stop Listening
        </button>
      </div>
    </div>
  );
};

export default SpeechToText;
