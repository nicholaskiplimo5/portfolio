import React from "react";
import Typewriter from "typewriter-effect";

const App_text = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "I am Nicholas Kiplimo.",
          "Lets have a chat.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 2,
      }}
    />
  );
};

export default App_text;
