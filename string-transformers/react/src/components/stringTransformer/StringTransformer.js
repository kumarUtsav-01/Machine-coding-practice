import { useState } from "react";
import { cases, caseTitlesMap, stringConverter } from "./StringTransformer.lib";
import StringGenerator from "../stringGenerator/StringGenerator";

import "./StringTransformer.css";

const StringTransformer = () => {
  const [string, setString] = useState("");

  const handleTextChange = (event) => {
    setString(event.target.value);
  };

  const generateCases = () => {
    const stringGenerators = cases.map((stringCase) => {
      const caseTitle = caseTitlesMap.get(stringCase);
      const convertedString = stringConverter(string.trim(), stringCase);

      return (
        <StringGenerator caseType={caseTitle} caseString={convertedString} />
      );
    });

    return stringGenerators;
  };

  return (
    <section>
      <input
        type='text'
        onChange={(e) => handleTextChange(e)}
        value={string}
        placeholder='enter the sentence with spaces (alphanumeric)'
      />
      {...generateCases()}
    </section>
  );
};

export default StringTransformer;
