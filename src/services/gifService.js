import {
  createService,
  createQueueingService,
  createSwitchingService,
  createBlockingService
} from "@rxfx/service";

import { ajax } from "rxjs/ajax";

import { bus } from "./bus";
import { map, mergeMap, tap } from "rxjs/operators";
import { preloadImage, randomlyThrow } from "./preloader";
import { gifReducer } from "./gifReducer";

//
export const gifService = createService(
  "gif", // namespace for actions requested,started,next,complete,error,etc
  bus, // bus to read consequences and requests from
  fetchRandomGIFPromised, // the Promise-or-Observable-returning process that creates events
  (ACTIONS) => gifReducer(ACTIONS) // the reducer to aggregate non-transient state
);

// A Promise-based fetch - will still run to completion
// - but wont update state - after being aborted
//
function fetchRandomGIFPromised() {
  return (
    fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key": "a4383754-c873-4d6d-b28f-46ebb6b1272a"
      }
    })
      .then((res) => res.json())
      // .then(randomlyThrow)
      .then((data) => data[0].url)
  );
}

// An Observable, thus cancelable fetch
// function fetchRandomGIF() {
//   return ajax({
//     url: "https://api.thecatapi.com/v1/images/search",
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "x-api-key": "a4383754-c873-4d6d-b28f-46ebb6b1272a"
//     },
//     timeout: TIMEOUTS.URL
//   }).pipe(
//     map((r) => r.response[0].url),
//     // Test errors by uncommenting randomlyThrow
//     // tap(randomlyThrow),
//     // Stay in the loading state until the image bytes have arrived
//     mergeMap(preloadImage)
//   );
// }
