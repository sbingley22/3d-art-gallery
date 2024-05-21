/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import LookControls from "./LookControls";
import { Vector3, Quaternion, Euler } from "three"

const areas = {
  "entrance": {
    pos: [12,1,5],
    rot: [0,Math.PI/4,0],
    lookable: true
  },
  "room0": {
    pos: [5,1,0],
    rot: [0, Math.PI/2,0],
    lookable: true
  }
}

const targetPosition = new Vector3()
const targetQuaternion = new Quaternion()
const targetEuler = new Euler(0, Math.PI/1, 0)

const Controls = ({ area }) => {
  const [lookEnabled, setLookEnabled] = useState(true)
  const { camera, gl } = useThree()
  const moving = useRef(false)

  useEffect(()=>{
    moving.current = true

    const pos = areas[area].pos
    const rot = areas[area].rot
    setLookEnabled(false)
    
    targetPosition.set(pos[0], pos[1], pos[2])
    targetQuaternion.setFromEuler(targetEuler.set(rot[0], rot[1], rot[2]))

  }, [area])

  // eslint-disable-next-line no-unused-vars
  useFrame((state,delta) => {
    if (moving.current) {
      const alphaPos = 0.02
      const alphaRot = 0.02
      const targetDist = 0.05
      camera.position.lerp(targetPosition, alphaPos)
      camera.quaternion.slerp(targetQuaternion, alphaRot)
      if (camera.position.distanceTo(targetPosition) < targetDist && camera.quaternion.angleTo(targetQuaternion) < targetDist) {
        moving.current = false
        setLookEnabled(areas[area].lookable)
      }
    }
  })

  return (
    <>
      <LookControls 
        enabled={lookEnabled} 
        lockXAxis={false}
        lockYAxis={false} 
        speedX={0.1}
        speedY={1.2} 
        minX={-Math.PI/16}
        maxX={Math.PI/16}
      />
    </>
  )
}

export default Controls;
