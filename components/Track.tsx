import React from "react";
import { Bad_Script } from "next/font/google";

const badscript = Bad_Script({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});
const Track = () => {
  return (
    <div className="pt-5 flex flex-col items-center text-white">
      <p
        style={{ fontFamily: badscript.style.fontFamily }}
        className="text-white my-3 text-md font-semibold items-center"
      >
        Create an account
      </p>
      <img
        src={"rdown.svg"}
        alt="Right Arrow"
        style={{
          width: "25px",
        }}
      />
      <p
        style={{ fontFamily: badscript.style.fontFamily }}
        className="text-white my-3 text-md font-semibold items-center"
      >
        Choose Interests
      </p>
      <img
        src={"rdown.svg"}
        alt="Right Arrow"
        style={{
          width: "25px",
        }}
      />
      <p
        style={{ fontFamily: badscript.style.fontFamily }}
        className="text-white my-3 text-md font-semibold items-center"
      >
        Get matched
      </p>
    </div>
  );
};

export default Track;
