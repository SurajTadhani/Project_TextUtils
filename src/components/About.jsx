import React from "react";

export default function About(props) {
  const darkMode = props.mode === "dark";

  return (
    <div
      className="container my-5 p-4 p-md-5 rounded shadow"
      style={{
        maxWidth: "80%",
        minHeight: "70vh",
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#e0e0e0" : "#1a1a1a",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      <h1
        className="mb-4 text-center fw-bold"
        style={{
          letterSpacing: "2px",
          fontSize: "2rem",
          color: darkMode ? "#bb86fc" : undefined, // subtle color in dark mode heading
          transition: "color 0.3s ease",
        }}
      >
        TextUtils Project
      </h1>
      <hr
        style={{
          borderColor: darkMode ? "#444" : "#333",
          borderWidth: 2,
          marginBottom: "2rem",
          transition: "border-color 0.3s ease",
        }}
      />

      <p
        className="mb-4"
        style={{
          fontSize: "1.1rem",
          lineHeight: 1.6,
          color: darkMode ? "#ccc" : undefined,
          transition: "color 0.3s ease",
        }}
      >
        Welcome to the <strong>TextUtils</strong> project, a simple yet powerful
        React application designed to provide various text manipulation
        utilities. This project showcases the fundamental capabilities of React
        and demonstrates how to build interactive and user-friendly web
        applications.
      </p>

      <section className="mb-5">
        <h3
          className="mb-3"
          style={{
            textDecoration: "underline",
            fontSize: "1.3rem",
            color: darkMode ? "#bb86fc" : undefined,
            transition: "color 0.3s ease",
          }}
        >
          Core Features
        </h3>
        <ul
          className="mb-4"
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            paddingLeft: "1.2rem",
            color: darkMode ? "#ddd" : undefined,
            transition: "color 0.3s ease",
          }}
        >
          <li>
            Convert any text to uppercase or lowercase with a single click.
          </li>
          <li>Clear the entire text input area effortlessly.</li>
          <li>
            Get an instant count of the number of words and characters in your
            text.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h3
          className="mb-3"
          style={{
            textDecoration: "underline",
            fontSize: "1.3rem",
            color: darkMode ? "#bb86fc" : undefined,
            transition: "color 0.3s ease",
          }}
        >
          Additional Features
        </h3>
        <ul
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            paddingLeft: "1.2rem",
            color: darkMode ? "#ddd" : undefined,
            transition: "color 0.3s ease",
          }}
        >
          <li>Text Reversal: Reverse the order of characters in the text.</li>
          <li>
            Copy to Clipboard: Copy the manipulated text to your clipboard for
            easy use.
          </li>
          <li>
            Remove Extra Spaces: Clean up your text by removing extra spaces
            between words.
          </li>
        </ul>
      </section>

      <section>
        <h3
          className="mb-3"
          style={{
            textDecoration: "underline",
            fontSize: "1.3rem",
            color: darkMode ? "#bb86fc" : undefined,
            transition: "color 0.3s ease",
          }}
        >
          How It Works
        </h3>
        <ol
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.7,
            paddingLeft: "1.2rem",
            color: darkMode ? "#ddd" : undefined,
            transition: "color 0.3s ease",
          }}
        >
          <li>Enter Text: Type or paste your text into the input area.</li>
          <li>
            Choose an Operation: Use buttons to perform text operations like
            converting case, clearing text, etc.
          </li>
          <li>View Results: See instant results and summaries.</li>
        </ol>
      </section>
    </div>
  );
}
