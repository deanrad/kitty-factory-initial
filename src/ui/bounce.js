import { concat } from "rxjs";
import { Easing, THRESHOLD, tweenToValue } from "@rxfx/animation";

export function bounceInAndOut(min, max) {
  return concat(
    tweenToValue(
      { scale: min },
      { scale: max },
      THRESHOLD.AnimationShort / 2,
      Easing.Bounce.InOut
    ),
    tweenToValue(
      { scale: max },
      { scale: min },
      THRESHOLD.AnimationShort / 2,
      Easing.Bounce.InOut
    )
  );
}
