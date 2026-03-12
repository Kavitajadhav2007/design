import { useState } from "react";

function Hide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Unhide"}</button>

      {show && <h2>Hello Kavita</h2>}
    </div>
  );
};

export default Hide;
