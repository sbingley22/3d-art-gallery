/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react'
import { useVideoTexture } from '@react-three/drei'

const Vid = ({ file, frame, position, rotation, scale, area, setArea, setInfo }) => {
  const meshRef = useRef()
  const texture = useVideoTexture(file)

  const [aspect, setAspect] = useState(1)

  useEffect(() => {
    if (texture) {
      texture.source.data.loop = true
      texture.source.data.play()
      
      // Calculate the aspect ratio once the video metadata is loaded
      const handleLoadedMetadata = () => {
        const { videoWidth, videoHeight } = texture.source.data
        setAspect(videoWidth / videoHeight)
      }

      texture.source.data.addEventListener('loadedmetadata', handleLoadedMetadata)

      return () => {
        texture.source.data.removeEventListener('loadedmetadata', handleLoadedMetadata)
      }
    }
  }, [texture])
  

  const handleClick = () => {
    const newArea = 'frame'+frame
    if (area == newArea) {
      //console.log(texture)
      texture.source.data.muted = !texture.source.data.muted
    }
    setArea(newArea)
  }

  return (
    <mesh 
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={[aspect * scale, scale, 1]}
      onClick={handleClick}
    >
      <planeGeometry />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

export default Vid
