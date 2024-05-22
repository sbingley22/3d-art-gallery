/* eslint-disable react/prop-types */
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import Controls from "./Controls"
import Model from "./Model"
import Options from "./Options"
import InfoBox from "./InfoBox"
import Characters from "./Characters"

const Gallery = ({ isMobile=false }) => {
  const canvasRef = useRef()
  const [area, setArea] = useState("entrance")
  const [info, setInfo] = useState([
    "Hi I'm Sean and welcome to my gallery",
    "Click the door to enter and click the pictures to view them. Click once more to interact with them.",
    "Have fun!"
  ])
  
  return (
    <div className="gallery-container">
      <Canvas 
        ref={canvasRef} 
        shadows={isMobile?false:true}
        dpr={isMobile?0.7:2}
        camera={{ position: [14,2,7] }}
      >
        <Suspense fallback={null}>
          <Environment preset="warehouse" environmentIntensity={1} />

          <Controls area={area} />

          <Model isMobile={isMobile} area={area} setArea={setArea} setInfo={setInfo} />

          <Characters />

        </Suspense>
      </Canvas>

      <Options />

      <InfoBox info={info} setInfo={setInfo} />

    </div>
  )
}

export default Gallery
