/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei"
import glb from "../assets/Gallery.glb?url"
import { useEffect, useRef, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Vector2, Vector3, Euler, Raycaster } from "three"


const Model = ({ area, setArea }) => {
  const { scene, nodes } = useGLTF(glb)

  const { camera } = useThree()
  const raycaster = useRef(new Raycaster())
  const mouse = useRef(new Vector2())
  const mouseDown = useRef(false)
  const mouseDownTime = useRef(0)

  const doorMorph = useRef(null)

  useEffect(()=>{
    console.log(nodes)
  }, [nodes])

  // Raycasting from cursor
  useEffect(() => {
    const handleMouseMove = (event, clicked) => {
      // Return if user is rotating camera as this function slows app down
      if (mouseDown.current || mouseDownTime.current > 0.2) return
      //console.log(mouseDownTime.current)

      // Convert mouse position to normalized device coordinates (-1 to +1)
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1

      // Update the raycaster with the camera and mouse positions
      raycaster.current.setFromCamera(mouse.current, camera)

      // Get intersections with objects in the scene
      const intersects = raycaster.current.intersectObjects(scene.children)

      if (intersects.length > 0) {
        handleRayHit(intersects, clicked)
      }
    }

    const handleMouseDown = () => mouseDown.current = true
    const handleMouseUp = () => mouseDown.current = false

    window.addEventListener('mousemove', (e)=>handleMouseMove(e, false))
    window.addEventListener('click', (e)=>handleMouseMove(e, true))
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera, scene, area])

  const handleRayHit = (intersects, clicked = false) => {

    let pointer = false
    const firstHit = intersects[0].object

    if (firstHit.name == "doormain") {
      pointer = true
      if (clicked) {
        if (area == "room0") setArea("entrance")
        else setArea("room0")
        doorMorph.current = {
          door: "doormain",
          name: "open",
          forwards: true,
          rate: 0.9,
          pause: 1
        }
      }
    }

    if (pointer) {
      document.body.style.cursor = "pointer"
    }
    else {
      document.body.style.cursor = "default"
    }

  }

  useFrame((state, delta) => {
    if (mouseDown.current) {
      mouseDownTime.current += delta
    } else {
      mouseDownTime.current = 0
    }

    if (doorMorph.current) {
      const door = nodes[doorMorph.current.door]
      const morph = door.morphTargetDictionary[doorMorph.current.name]
      if (doorMorph.current.forwards) {
        door.morphTargetInfluences[morph] += delta * doorMorph.current.rate
        if (door.morphTargetInfluences[morph] >= 1) doorMorph.current.forwards = false
      } else if (doorMorph.current.pause > 0) {
        doorMorph.current.pause -= delta
      } else {
        door.morphTargetInfluences[morph] -= delta * doorMorph.current.rate
        if (door.morphTargetInfluences[morph] <= 0) doorMorph.current = null
      }
    }

  })

  return (
    <>
      <primitive object={scene} dispose={null} />
    </>
  )
}

export default Model

useGLTF.preload(glb)