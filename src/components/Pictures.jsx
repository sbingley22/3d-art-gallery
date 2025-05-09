/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import Pic from './Pic'
import Vid from './Vid'

import pic1 from '../assets/pics/pic (1).png'
import pic2 from '../assets/pics/pic (2).png'
import pic3 from '../assets/pics/pic (3).png'
import pic4 from '../assets/pics/pic (4).png'
import pic5 from '../assets/pics/pic (5).png'
import pic6 from '../assets/pics/pic (6).png'

import vid1 from '../assets/pics/Signalis.webm'
import vid2 from '../assets/pics/Oldboy.webm'
import vid3 from '../assets/pics/Therealfolkblues.webm'
import vid4 from '../assets/pics/Ultimatemuscle.webm'
import vid5 from '../assets/pics/Nkhandshake.webm'
import vid6 from '../assets/pics/Leakgut.webm'
import vid7 from '../assets/pics/Plaqueformation.webm'
import vid8 from '../assets/pics/Wzdroppingin.webm'
import vid9 from '../assets/pics/Wzenemyfriend.webm'
import vid10 from '../assets/pics/Wzparkshame.webm'
import vid11 from '../assets/pics/Whitbygraveyard Shift.webm'
import vid12 from '../assets/pics/Whitbysaycheese.webm'
import vid13 from '../assets/pics/Arcane.webm'

const pics = [
  {
    id: uuidv4(),
    frame: 0,
    //file: "./pic (1).png",
    file: pic1,
    type: "pic",
    description: ["A short prototype of a point and click survival horror game set in a future cybernetic world.",
    "Play at https://sbingley22.github.io/machina-elysium/"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 1,
    //file: "./pic (2).png",
    file: pic2,
    type: "pic",
    description: [`A very basic facebook imitation made for the odin project using react and express.`,
    `Live Link: https://sbingley22-odin-book.netlify.app/`],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 2,
    //file: "./pic (3).png",
    file: pic3,
    type: "pic",
    description: [`A simple version of floorplanner made using react three fiber.`,
    `Live Link: https://sbingley22.github.io/simple-floorplanner/`],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 4,
    //file: "./pic (4).png",
    file: pic4,
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
    //file: "./pic (5).png",
    file: pic5,
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
    //file: "./pic (6).png",
    file: pic6,
    type: "pic",
    description: [`A landing page for a shop or similar buisness. In this example I have used a "ripper doc" shop from cyberpunk.`,
    `It features a 3D interactable shop for users to view and interact with. Clicking on various employees shows there name and bio. Clicking the signed posted "Services", "Contact", and "About" shows html pages with relevant details about the buisness. Try clicking the woman at the front of the shop. This will allow her to try out some of the services the buisness offers. Clicking the boombox plays music.`,
    `Live Link: https://sbingley22.github.io/ripperdoc-shop-landing-page/
    `],
    scale: 2,
  },

  // Room 2
  {
    id: uuidv4(),
    frame: 6,
    //file: "./Signalis.webm",
    file: vid1,
    type: "vid",
    description: ["Signalis"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 7,
    file: vid2,
    //file: "./Oldboy.webm",
    type: "vid",
    description: ["Oldboy", "In a lonely place"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 8,
    file: vid3,
    //file: "./Therealfolkblues.webm",
    type: "vid",
    description: ["Cowboy Bebop", "The Real Folk Blues"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 9,
    file: vid4,
    //file: "./Ultimatemuscle.webm",
    type: "vid",
    description: ["Ultimate Muscle Short"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 10,
    file: vid5,
    //file: "./Nkhandshake.webm",
    type: "vid",
    description: ["Natural Killer Cell Handshake"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 11,
    file: vid6,
    //file: "./Leakgut.webm",
    type: "vid",
    description: ["Leaky Gut"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 12,
    file: vid7,
    //file: "./Plaqueformation.webm",
    type: "vid",
    description: ["Plaque Formation"],
    scale: 2,
  },

  // // Room 3
  {
    id: uuidv4(),
    frame: 13,
    file: vid8,
    //file: "./Wzdroppingin.webm",
    type: "vid",
    description: ["Warzone Dropping In"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 14,
    file: vid9,
    //file: "./Wzenemyfriend.webm",
    type: "vid",
    description: ["Warzone Enemy of My Enemy"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 15,
    file: vid10,
    //file: "./Wzparkshame.webm",
    type: "vid",
    description: ["Warzone Outplayed"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 16,
    file: vid11,
    //file: "./Whitbygraveyard Shift.webm",
    type: "vid",
    description: ["Whitby Goth Weekend"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 17,
    file: vid12,
    //file: "./Whitbysaycheese.webm",
    type: "vid",
    description: ["Whitby Goth Weekend"],
    scale: 2,
  },
  {
    id: uuidv4(),
    frame: 18,
    file: vid13,
    //file: "./Arcane.webm",
    type: "vid",
    description: ["Arcane Opening"],
    scale: 2,
  },
]

const Pictures = ({ nodes, area, setArea, setInfo }) => {
  const [frames, setFrames] = useState([])
  const [pauseAll, setPauseAll] = useState(true)

  // Initial setup
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
          pauseAll={pauseAll}
          setPauseAll={setPauseAll}
        />
      ))}
    </>
  )
}

export default Pictures
