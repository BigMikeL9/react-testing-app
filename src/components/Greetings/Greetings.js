import React, { useState } from "react";
import Container from "../Container/Container";

const Greetings = () => {
  const [isTextUpdated, setIsTextUpdated] = useState(false);

  const onClickHandler = () => {
    setIsTextUpdated((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Hello World!</h2>

      {!isTextUpdated && <Container>Greetings There!! 😁</Container>}
      {isTextUpdated && <Container>Greeting description was UPDATED</Container>}
      <button onClick={onClickHandler}>Update Text</button>
    </div>
  );
};

export default Greetings;
