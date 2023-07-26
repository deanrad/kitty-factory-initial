import { Bus } from "@rxfx/bus";

export const bus = new Bus();
// bus events can go to the console, Redux, wherever..
bus.spy((e) => console.log(e.type, e.payload));
bus.errors.subscribe(console.error);
