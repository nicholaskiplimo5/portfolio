import React from "react";
import Typewriter from "typewriter-effect";

const App_text = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "I am Nicholas Kiplimo.",
          "Currently Working at Turnkey Africa Ltd.",
          "As a Software Engineer.",
          "Lets have a chat.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
};

export default App_text;
