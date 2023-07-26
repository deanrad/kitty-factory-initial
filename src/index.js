import React from "react";
import ReactDOM from "react-dom";
import { useWhileMounted, useService, Unmounter } from "@rxfx/react";

import { gifService } from "./services/gifService";
import { Figure, NextCatButton, CancelButton } from "./ui/";

import "./styles.scss";

function CatFetcher() {
  const { state, currentError } = useService(gifService);
  const { url } = state;

  return (
    <div className="fetcher">
      {/* The image */}
      <Figure url={url} />

      {/* Errors */}
      <div
        className="error"
        style={{ visibility: currentError ? "visible" : "hidden" }}
      >
        {currentError &&
          (currentError.toString().match("timed out ")
            ? "Sorry, that kitty could not be loaded, please try again."
            : currentError.toString())}
      </div>

      {/* Buttons */}
      <div className="buttons">
        {/* <CancelButton /> */}
        <NextCatButton />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="counter window">
      <header id="header">𝗥𝘅𝑓𝑥 Kitty Factory</header>
      <div>
        <CatFetcher />
        {/* Test cancelation on unmount by wrapping CatFetcher in Unmounter */}
        {/* <Unmounter>
          <CatFetcher />
        </Unmounter> */}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
