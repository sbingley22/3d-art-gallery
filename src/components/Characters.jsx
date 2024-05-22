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

    actions["Action"].play()
    actions["Action.001"].play()

    Object.keys(nodes).forEach( nodeName => {
      const node = nodes[nodeName]
      if (nodeName.includes("Adam") || nodeName.includes("Ana")) {
        node.children.forEach( child => {
          child.frustumCulled = false
        })
      }
    })

  }, [])

  return (
    <>
      <primitive object={scene} dispose={null} />
    </>
  )
}

export default Characters

useGLTF.preload(glb)