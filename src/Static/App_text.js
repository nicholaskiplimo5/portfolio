import React from "react";
import Typewriter from "typewriter-effect";

const App_text = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "I am Nicholas Kiplimo.",
          "Welcome to my page",
          "Get to know me better...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 2,
      }}
    />
  );
};

export default App_text;
