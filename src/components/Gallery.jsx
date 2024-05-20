/* eslint-disable react/prop-types */
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"


const Gallery = ({ isMobile=false }) => {
  const canvasRef = useRef()
  
  return (
    <div className="gallery-container">
      <Canvas ref={canvasRef} shadows={isMobile?false:true} >
        <Suspense>
          <Environment preset="warehouse" environmentIntensity={1} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Gallery
