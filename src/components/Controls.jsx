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
    pos: [3,1,-.5],
    rot: [0, Math.PI/2,0],
    lookable: true
  },
  "room1": {
    pos: [-4,1,-1],
    rot: [0, Math.PI/2,0],
    lookable: true
  },
  "room2": {
    pos: [-2.5,1,10],
    rot: [0, Math.PI/2,0],
    lookable: true
  },

  // room 0
  "frame0": {
    pos: [5, 1.6, -2],
    rot: [0, -Math.PI/2, 0],
    lookable: true
  },
  "frame1": {
    pos: [5, 1.6, -3],
    rot: [0, 0, 0],
    lookable: true
  },
  "frame2": {
    pos: [1, 1.6, -3],
    rot: [0, 0, 0],
    lookable: true
  },
  "frame3": {
    pos: [2, 1.6, -4],
    rot: [0, Math.PI/2, 0],
    lookable: true
  },
  "frame4": {
    pos: [2, 1.6, 2],
    rot: [0, Math.PI/2, 0],
    lookable: true
  },
  "frame5": {
    pos: [3,  1.6, 1],
    rot: [0, Math.PI, 0],
    lookable: true
  },

  // room 1
  "frame6": {
    pos: [-3,  1.6, -6.1],
    rot: [0, -Math.PI/2, 0],
    lookable: true
  },
  "frame7": {
    pos: [-3, 1.6, 3.2],
    rot: [0, -Math.PI/2, 0],
    lookable: true
  },
  "frame8": {
    pos: [-4.6, 1.6, -7.9],
    rot: [0, 0, 0],
    lookable: true
  },
  "frame9": {
    pos: [-6,  1.6, -6.1],
    rot: [0, Math.PI/2, 0],
    lookable: true
  },
  "frame10": {
    pos: [-6, 1.6, -2],
    rot: [0, Math.PI/2, 0],
    lookable: true
  },
  "frame11": {
    pos: [-6, 1.6, 3.5],
    rot: [0, Math.PI/2, 0],
    lookable: true
  },
  "frame12": {
    pos: [-6,  1.6, 3.5],
    rot: [0, Math.PI, 0],
    lookable: true
  },

  // room 2
  "frame13": {
    pos: [1, 1.6, 9.5],
    rot: [0, -Math.PI/2, 0],
    lookable: true
  },
  "frame14": {
    pos: [1, 1.6, 16],
    rot: [0, -Math.PI/2, 0],
    lookable: true
  },
  "frame15": {
    pos: [-1, 1.6, 16],
    rot: [0, Math.PI, 0],
    lookable: true
  },
  "frame16": {
    pos: [-5, 1.6, 16],
    rot: [0, Math.PI, 0],
    lookable: true
  },
  "frame17": {
    pos: [-6, 1.6, 14.5],
    rot: [0, Math.PI/2, 0],
    lookable: true
  },
  "frame18": {
    pos: [-6, 1.6, 9.5],
    rot: [0, Math.PI/2, 0],
    lookable: true
  },
}

const targetPosition = new Vector3()
const targetQuaternion = new Quaternion()
const targetEuler = new Euler(0, Math.PI/1, 0)

const Controls = ({ area }) => {
  const [lookEnabled, setLookEnabled] = useState(true)
  const { camera } = useThree()
  const moving = useRef(false)
  const rotating = useRef(false)

  useEffect(()=>{
    //console.log(areas[area])
    moving.current = true
    rotating.current = true

    const pos = areas[area].pos
    const rot = areas[area].rot
    setLookEnabled(false)
    //setLookEnabled(areas[area].lookable)
    
    targetPosition.set(pos[0], pos[1], pos[2])
    targetQuaternion.setFromEuler(targetEuler.set(rot[0], rot[1], rot[2]))

  }, [area])

  // eslint-disable-next-line no-unused-vars
  useFrame((state,delta) => {
    if (moving.current) {
      const alphaPos = 0.02
      const alphaRot = 0.02
      const targetDist = 0.2
      const targetRot = 0.2

      camera.position.lerp(targetPosition, alphaPos)
      if (rotating.current) camera.quaternion.slerp(targetQuaternion, alphaRot)

      if (camera.position.distanceTo(targetPosition) < targetDist) {
        moving.current = false
        rotating.current = false
        setLookEnabled(areas[area].lookable)
      }
      if (camera.quaternion.angleTo(targetQuaternion) < targetRot) {
        setLookEnabled(areas[area].lookable)
        rotating.current = false
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
