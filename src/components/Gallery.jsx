/* eslint-disable react/prop-types */
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import Controls from "./Controls"
import Model from "./Model"


const Gallery = ({ isMobile=false }) => {
  const canvasRef = useRef()
  const [area, setArea] = useState("entrance")
  
  return (
    <div className="gallery-container">
      <Canvas 
        ref={canvasRef} 
        shadows={isMobile?false:true}
        camera={{ position: [14,2,7] }} 
      >
        <Suspense>
          <Environment preset="warehouse" environmentIntensity={1} />

          <Controls area={area} />

          <Model isMobile={isMobile} area={area} setArea={setArea} />

        </Suspense>
      </Canvas>
    </div>
  )
}

export default Gallery
