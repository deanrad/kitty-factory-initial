import { Observable } from "rxjs";

export const EMPTY_GIF =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

// Encapsulates the loading (and cancelation) of an Image object
// in an Observable that doesn't pass the url on until loaded
export function preloadImage(url) {
  return new Observable((notify) => {
    const img = new Image();

    img.onload = () => {
      // the consumer of the Observable will get the url
      // only after the browser has loaded it into cache :)
      notify.next(url);
      notify.complete();
    };

    img.src = url;

    // This will cancel loading :)
    return () => {
      img.src = EMPTY_GIF;
    };
  });
}

export function randomlyThrow(x) {
  if (Math.random() < 0.2) {
    throw new Error("Kitty was bad! Please try again.");
  }
  return x;
}
