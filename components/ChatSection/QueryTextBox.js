// QueryTextBox.js
import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "styles/components/ChatSection/QueryTextBox.module.scss";

const QueryTextBox = ({ content, setContent, onSubmit }) => {
  const handleChange = (event) => {
    setContent(`${event.target.value}`);
    console.log(content)
  };
  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter" && content.trim() !== "") {
  //     onSubmit(content.trim());
  //     setContent("");
  //   }
  // };
  return (
    <div className={styles["expanding_textbox_container"]}>
      <TextareaAutosize
        value={content}
        minRows={1}
        maxRows={30}
        placeholder="Start typing your query here..."
        style={{
          width: "100%",
          resize: "none",
          fontSize: "16px",
          padding: "0.5rem",
          maxHeight: "80vh",
          border: "none",
        }}
        className={styles["expanding_textbox"]}
        onChange={handleChange}
        // onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default QueryTextBox;
