/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import LookControls from "./LookControls";

const Controls = () => {
  const [lookEnabled, setLookEnabled] = useState(true)

  return (
    <>
      <LookControls 
        enabled={lookEnabled} 
        lockXAxis={false}
        lockYAxis={false} 
        speedX={0.1}
        speedY={0.2} 
        minX={-Math.PI/16}
        maxX={Math.PI/16}
      />
    </>
  )
}

export default Controls;
