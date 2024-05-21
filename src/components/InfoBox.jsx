/* eslint-disable react/prop-types */

const InfoBox = ({ info, setInfo }) => {

  if (!info) return

  const exitInfo = () => {
    setInfo(null)
  }
  
  return (
    <div className="infoContainer">
      <button className="infoReturn" onClick={exitInfo}>{"<"}</button>
      <div className="infoContent">
        {info.map( (text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  )
}

export default InfoBox
