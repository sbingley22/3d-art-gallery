/* eslint-disable react/prop-types */
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import Controls from "./Controls"
import Model from "./Model"


const Gallery = ({ isMobile=false }) => {
  const canvasRef = useRef()
  
  return (
    <div className="gallery-container">
      <Canvas ref={canvasRef} shadows={isMobile?false:true} >
        <Suspense>
          <Environment preset="warehouse" environmentIntensity={1} />

          <Controls />

          <Model isMobile={isMobile} />

        </Suspense>
      </Canvas>
    </div>
  )
}

export default Gallery
