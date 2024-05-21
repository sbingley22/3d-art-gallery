/* eslint-disable react/prop-types */
import { Html } from "@react-three/drei"
import { Euler } from "three"

const Picture = ({ file, type, description, position, rotation }) => {

  const style = {
    //width: "56px",
    transform: "scale(.05)",
  }

  //console.log(rotation)
  const altRotation = new Euler(rotation.y, rotation._z, rotation._y, rotation._order)

  return (
    <Html 
      position={position}
      rotation={altRotation}
      center 
      transform 
      //distanceFactor={10}
      occlude
    >
      <img src={file} alt="" style={style} />
    </Html>
  )
}

export default Picture
