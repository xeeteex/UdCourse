import React from "react";

const GoalList = props => {
  
  return (
    <div>
     
      <ul className=" list-none m-2 p-2">
         {props.goals.map(goal=>{
          return <li className=" border-black border-1" key={goal.id} >{goal.text}</li>

         } )} 
      </ul> 
    </div> 
  )
} 
export default GoalList