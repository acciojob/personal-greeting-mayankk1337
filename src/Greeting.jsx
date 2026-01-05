import React, { useState } from "react";

function Greeting() {
  // store the name typed by user
  const [name, setName] = useState("");

  // run when user types in input box
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      {/* input box */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      {/* show greeting only if name is not empty */}
      {name !== "" && <h2>Hello, {name}!</h2>}
    </div>
  );
}

export default Greeting;
