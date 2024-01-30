import React from "react";
import QueryTextBox from "./QueryTextBox";
import styles from "styles/components/ChatSection/QueryArea.module.scss";
import Image from "next/image";

const QueryArea = ({ content, setContent, onSubmit }) => {
  return (
    <div className={styles["queryArea"]}>
      <QueryTextBox
        content={content}
        setContent={setContent}
        onSubmit={onSubmit}
      />
      <div className={styles["queryArea__buttons"]}>
        {" "}
        <button
          onClick={() => onSubmit(content.trim())}
          className={styles["queryArea__submitButton"]}
        >
          <Image src="/Send.png" width={26} height={26} alt="send" />
        </button>
        <button
          onClick={() => onSubmit(content.trim())}
          className={styles["queryArea__brainButton"]}
        >
          <Image src="/Brain.png" width={26} height={26} alt="wipe" />
        </button>
      </div>
    </div>
  );
};

export default QueryArea;
