/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Pic = ({ file, frame, description, position, rotation, scale, area, setArea, setInfo }) => {
  const meshRef = useRef()
  const texture = useLoader(TextureLoader, file)

  const width = texture.source.data.width
  const height = texture.source.data.height
  const aspect = width / height

  const handleClick = () => {
    const newArea = 'frame'+frame
    if (area == newArea) {
      //console.log(description)
      setInfo(description)
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
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default Pic
