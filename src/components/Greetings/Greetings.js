import React, { useState } from "react";

const Greetings = () => {
  const [isTextUpdated, setIsTextUpdated] = useState(false);

  const onClickHandler = () => {
    setIsTextUpdated((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Hello World!</h2>

      {!isTextUpdated && <p>Greetings There!! 😁</p>}
      {isTextUpdated && <p>Greeting description was UPDATED</p>}
      <button onClick={onClickHandler}>Update Text</button>
    </div>
  );
};

export default Greetings;
