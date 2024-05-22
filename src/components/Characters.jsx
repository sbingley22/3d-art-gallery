/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from "@react-three/drei"
import glb from '../assets/Characters.glb?url'
import { useEffect } from "react"

const Characters = () => {
  const { scene, nodes, animations } = useGLTF(glb)
  const { actions, mixer, names } = useAnimations(animations, scene)

  // Initial setup
  useEffect(() => {
    console.log("Characters: ", nodes)
    console.log(names)

    actions["M1Idle"].play()
    actions["W1Idle"].play()
    actions["SeanWave"].play()

    Object.keys(nodes).forEach( nodeName => {
      const node = nodes[nodeName]
      if (nodeName.includes("Adam") || nodeName.includes("Ana")) {
        node.children.forEach( child => {
          child.frustumCulled = false
        })
      }
    })

  }, [actions, names, nodes])

  // Mixer
  useEffect(() => {
    actions["SeanWave"].clampWhenFinished = true
    actions["SeanWave"].repetitions = 2

    mixer.addEventListener("finished", (e) => {
      if (e.action == "SeanWave") {
        actions["SeanIdle"].play()
      }
      console.log(e.action)
    })
  }, [mixer, actions])

  return (
    <>
      <primitive object={scene} dispose={null} />
    </>
  )
}

export default Characters

useGLTF.preload(glb)