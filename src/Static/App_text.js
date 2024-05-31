import React from "react";
import Typewriter from "typewriter-effect";

const App_text = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Nicholas Kiplimo.",
          "Junior Software Engineer.",
          "React Js Developer.",
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
