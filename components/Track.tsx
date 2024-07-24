import React from "react";
import { Bad_Script } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const badscript = Bad_Script({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

const Track = () => {
  return (
    <div className="pt-3 flex flex-col items-center text-white">
      <h2
        style={{ fontFamily: badscript.style.fontFamily }}
        className="text-white my-2 text-xl font-bold items-center"
      >
        Create an account
      </h2>
      <FontAwesomeIcon
        icon={faArrowDown}
        style={{ width: "20px", color: "red" }}
      />

      <h2
        style={{ fontFamily: badscript.style.fontFamily }}
        className="text-white my-2 text-xl font-bold items-center"
      >
        Choose Interests
      </h2>
      <FontAwesomeIcon
        icon={faArrowDown}
        style={{ width: "20px", color: "red" }}
      />

      <h2
        style={{ fontFamily: badscript.style.fontFamily }}
        className="text-white my-2 text-xl font-bold items-center"
      >
        Get matched
      </h2>
      <FontAwesomeIcon
        icon={faArrowDown}
        style={{ width: "20px", color: "red" }}
      />

      <h2
        style={{ fontFamily: badscript.style.fontFamily }}
        className="text-white my-2 text-xl font-bold items-center"
      >
        Plan your meet
      </h2>
    </div>
  );
};

export default Track;
