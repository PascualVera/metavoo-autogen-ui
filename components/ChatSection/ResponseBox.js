import React, { useState } from "react";
import styles from "styles/components/ChatSection/ResponseBox.module.scss";
import Image from "next/image";


const ResponseBox = ({ response }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleResponseView = () => {
        setIsOpen(() => !isOpen )
    }
  
  return (
          <div className={styles["response_box"]}>
            <span className={styles["title_wrapper"]}>
                <button onClick={()=>{toggleResponseView()}}>{ isOpen ? "▲" : "▼" }</button>
                <h2>{response.provider}</h2>
                <Image alt="ready" width={20} height={20} src='/Status.png'></Image>
            </span>
            <div className={ isOpen ? styles["response"] : styles["response_hide"]}>
                <p>{response.response}</p>
            </div>
          </div>
  );
};

export default ResponseBox;