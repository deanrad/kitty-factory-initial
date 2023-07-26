import React from "react";

export const CancelButton = () => {
  return (
    <button
      // onClick is admittedly slower than touchend/mouseup but few will notice
      onClick={() => console.log("TODO cancel")}
    >
      Cancel
    </button>
  );
};
