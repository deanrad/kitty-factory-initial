import React from "react";

/** A component that queues up transitions of its url prop.
 * Image bytes should be preloaded before the url is provided here.
 */
export const Figure = ({ url }) => {
  return (
    <div id="slide-container">
      <div className="slide cat">
        <img src={url} alt="fun gif" />
      </div>
    </div>
  );
};
