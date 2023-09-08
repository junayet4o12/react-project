import { useState } from "react"

export default function Team(){
  const [team,setTeam]= useState(11)
  const handleAdd = () => {
    const newTeam= team+1;
    setTeam(newTeam);
  }
  const handlereduce = () => {
    const newTeam= team-1;
    setTeam(newTeam);
  }
    const teamstyle={
        border: '2px solid black',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return(
        <div style={teamstyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handlereduce}>remove</button>
        </div>
    )
}