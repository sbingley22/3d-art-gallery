/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react'
import { useVideoTexture } from '@react-three/drei'

const Vid = ({ file, frame, description, position, rotation, scale, area, setArea, setInfo, pauseAll, setPauseAll }) => {
  const meshRef = useRef()
  const texture = useVideoTexture(file, {
    autoplay: false,
    loop: true,
  })

  const [aspect, setAspect] = useState(1)

  useEffect(() => {
    if (texture) {
      //texture.source.data.loop = true
      //texture.source.data.pause()
      
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
      if (texture.source.data.paused) {
        texture.source.data.muted = false
        texture.source.data.play()
      } else {
        texture.source.data.muted = true
        texture.source.data.pause()
      }
    } else {
      setPauseAll(!pauseAll)
      setInfo(description)
    }
    setArea(newArea)
  }

  useEffect(()=>{
    if (!texture) return
    
    texture.source.data.muted = true
    texture.source.data.pause()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pauseAll])

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
