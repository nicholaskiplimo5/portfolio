import React from "react";
import Typewriter from "typewriter-effect";

const Status_text = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Open to job...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Status_text;
