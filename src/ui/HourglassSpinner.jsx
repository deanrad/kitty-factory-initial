import React from "react";
import "./HourglassSpinner.scss";

export function HourglassSpinner({ show = false }) {
  const inline = show ? {} : { visibility: "hidden" };

  return (
    <span className="spinner" style={inline}>
      ⏳
    </span>
  );
}
