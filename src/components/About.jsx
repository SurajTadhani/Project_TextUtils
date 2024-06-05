import React from "react";

export default function About() {
  return (
    <>
      <h1> TextUtils Project</h1>
      <hr />
      <p className="fs-4">
        Welcome to the TextUtils project, a simple yet powerful React
        application designed to provide various text manipulation utilities.
        This project showcases the fundamental capabilities of React and
        demonstrates how to build interactive and user-friendly web
        applications.
      </p>
      <code className="fs-4">
        1. Text Conversion: <br />
        Convert any text to uppercase with a single click. <br />
        Transform text to lowercase for consistency.
        <br />
        2. Text Clearing: <br />
        Clear the entire text input area effortlessly. <br />
        3.Word and Character Count: <br />
        Get an instant count of the number of words and characters in your text.
      </code>
      <p>
        <p className="fs-4 py-5">
          <h2>2. Additional Features :</h2> <br />
          i. Text Reversal: Reverse the order of characters in the text. <br />
          ii. Copy to Clipboard: Copy the manipulated text to your clipboard for
          easy use. <br />
          iii. Remove Extra Spaces: Clean up your text by removing extra spaces
          between words.
        </p>
      </p>

      <p className="fs-4">
        <h2> How It Works</h2>
        1. Enter Text: <br />
        Type or paste your text into the input area. <br />
        2. Choose an Operation: <br />
        Click on the buttons to perform different text operations such as
        converting to uppercase, lowercase, clearing the text, and more.
        <br />
        3.View Results: <br />
        Instantly see the results of your text manipulation and a summary of
        word and character counts. <br />
      </p>
    </>
  );
}
