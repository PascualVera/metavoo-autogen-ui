import Image from "next/image";
import React from "react";
import styles from "styles/components/ChatSection/ResponseArea.module.scss";
import ResponseBox from "./ResponseBox";


const ResponseArea = ({ queries }) => {
  const responses = [
    {provider: 'Gato',
        response: 
        `
Based on the information provided, we will focus on the DM (Demographics) domain, specifically the SEX column, to determine the number of female patients in the CDISCPILOT01 trial. The SEX column contains string values indicating the sex of the patients, with 'F' representing females.
Here is the proposed plan to answer the question:
Access the DM domain data from the file path /Users/hkll/rsconnect_test/app/data_csv/dm.csv.
Filter the data to include only records from the CDISCPILOT01 trial.
Count the number of records where the SEX column has the value 'F' to determine the number of female patients.
Does this plan meet your expectations?
Based on the information provided, we will focus on the DM (Demographics) domain, specifically the SEX column, to determine the number of female patients in the CDISCPILOT01 trial. The SEX column contains string values indicating the sex of the patients, with 'F' representing females.`},
   {provider: 'Chat Gepeto',
    response: 
            `
    Ehhhhh si`},
]
  return (
    <div className={styles["responseArea"]}>
      <div className={styles["responseAreaLogoContainer"]}>
        {" "}
        <Image
          src="/logo.png"
          className={styles["responseAreaLogo"]}
          alt="logo"
          width={700}
          height={175}
        />
      </div>

      {queries.map((data, index) => {
        return (
          <>
            <p key={index}>{data}</p>
            {responses.map((response, index)=>{
              return (<ResponseBox key={ index } response={ response }></ResponseBox>)
            })}
           
          </>
        );
      })}
    </div>
  );
};

export default ResponseArea;
