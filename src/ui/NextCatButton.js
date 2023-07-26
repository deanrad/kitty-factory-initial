import React, { useRef } from "react";
import { tap } from "rxjs/operators";
import { useService, useWhileMounted } from "@rxfx/react";

import { gifService } from "../services/gifService";
import { HourglassSpinner } from "./HourglassSpinner";
import { bounceInAndOut } from "./bounce";

export function NextCatButton() {
  return (
    <button style={{ minWidth: "12rem" }} onClick={() => gifService.request()}>
      Next Cat >>️
    </button>
  );
}
