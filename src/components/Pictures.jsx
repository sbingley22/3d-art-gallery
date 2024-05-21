/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import Pic from './Pic'
import Vid from './Vid'

const pics = [
  {
    id: uuidv4(),
    frame: 0,
    file: "pic (1).png",
    type: "pic",
    description: ["A short prototype of a point and click survival horror game set in a future cybernetic world.",
    "Play at https://sbingley22.github.io/machina-elysium/"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 1,
    file: "pic (2).png",
    type: "pic",
    description: [`A very basic facebook imitation made for the odin project using react and express.`,
    `Live Link: https://sbingley22-odin-book.netlify.app/`],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 2,
    file: "pic (3).png",
    type: "pic",
    description: [`A simple version of floorplanner made using react three fiber.`,
    `Live Link: https://sbingley22.github.io/simple-floorplanner/`],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 4,
    file: "pic (4).png",
    type: "pic",
    description: [`Live Link: https://sbingley22.github.io/cyberpunk-motor-chase/`,
    `A react three fiber project. Control David or Lucy as they race to escape enemy mercs. Use the multiple viewports to control the motor cycle or shoot enemies.`,
    `Tap enemies to shoot them. Enemies with blue cones shoot at you. Tap them to interupt them.`,
    `Dodge obstacles and get home.`],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 3,
    file: "pic (5).png",
    type: "pic",
    description: [`Live Link: https://sbingley22.github.io/cyberpunk-shootout/`,
    `A simple gallery shooter / typing shooter made using just basic react. Makes heavy use of useEffect, useState, useRef, and setTimeout to make the game loop. In future iteractions I will use more useRef and less useState to avoid stale state in setTimeout.`,
    `David Martinez: Click and hold to shoot at enemies. Enemies flash when they are about to hit you, take cover then.`,
    `Lucy Kushinada: Hold space to see kill words. Type them whilst behind cover then press spacebar to eliminate enemy.`],
    scale: 1.6,
  },
  {
    id: uuidv4(),
    frame: 5,
    file: "pic (6).png",
    type: "pic",
    description: [`A landing page for a shop or similar buisness. In this example I have used a "ripper doc" shop from cyberpunk.`,
    `It features a 3D interactable shop for users to view and interact with. Clicking on various employees shows there name and bio. Clicking the signed posted "Services", "Contact", and "About" shows html pages with relevant details about the buisness. Try clicking the woman at the front of the shop. This will allow her to try out some of the services the buisness offers. Clicking the boombox plays music.`,
    `Live Link: https://sbingley22.github.io/ripperdoc-shop-landing-page/
    `],
    scale: 2,
  },
  // {
  //   id: uuidv4(),
  //   frame: 5,
  //   file: "vid (1).mp4",
  //   type: "vid",
  //   description: ["arrrhghg"],
  //   scale: 2,
  // },
]

const Pictures = ({ nodes, area, setArea, setInfo }) => {
  const [frames, setFrames] = useState([])

  useEffect(() => {
    const tempFrames = []

    Object.keys(nodes).forEach(nodeName => {
      if (nodeName.includes("frame")) {
        const node = nodes[nodeName]
        //console.log(node)
        node.visible = false

        const index = parseInt(nodeName.slice(5), 10)
        tempFrames.push({
          number: index,
          position: node.position,
          rotation: node.rotation,
        })
      }
    })

    setFrames(tempFrames)

  }, [nodes])

  if (frames.length < 1) return

  return (
    <>
      { pics.map( pic => (
        pic.type == "pic" ? 
        <Pic
          key={pic.id}
          file={pic.file}
          frame={pic.frame}
          description={pic.description}
          position={frames[pic.frame].position}
          rotation={frames[pic.frame].rotation}
          scale={pic.scale}
          area={area}
          setArea={setArea}
          setInfo={setInfo}
        />
        :
        <Vid
          key={pic.id}
          file={pic.file}
          frame={pic.frame}
          description={pic.description}
          position={frames[pic.frame].position}
          rotation={frames[pic.frame].rotation}
          scale={pic.scale}
          area={area}
          setArea={setArea}
          setInfo={setInfo}
        />
      ))}
    </>
  )
}

export default Pictures
