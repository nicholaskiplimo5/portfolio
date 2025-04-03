import React from "react";
import Typewriter from "typewriter-effect";

const App_text = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Nicholas Kiplimo.",
          "Software Engineer.",
          "Turnkey Africa Ltd.",
          "Oracle ADF Developer.",
          "Spring Boot Developer.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default App_text;
