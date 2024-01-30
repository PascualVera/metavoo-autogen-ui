// ChatArea.js
import React, { useState } from "react";
import QueryArea from "./QueryArea";
import ResponseArea from "./ResponseArea";
import styles from "styles/components/ChatSection/ChatArea.module.scss";

const ChatArea = ({ queries, setQueries }) => {
  const [content, setContent] = useState("");

  const handleQuerySubmission = (query) => {
    setQueries([...queries, query]);
    setContent("");
  };

  return (
    <div className={styles["chatArea"]}>
      <ResponseArea queries={queries} />
      <QueryArea
        content={content}
        setContent={setContent}
        onSubmit={handleQuerySubmission}
      />
    </div>
  );
};

export default ChatArea;
