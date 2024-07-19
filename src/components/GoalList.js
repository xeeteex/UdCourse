import React from "react";

const GoalList = props => {
  
  return (
    <div>
     
      <ul className=" list-none m-2 p-2">
         {props.goals.map(goal=>{
          return <li key={goal.id} className="border-solid-1 border-black">{goal.text}</li>

         } )} 
      </ul> 
    </div> 
  )
} 
export default GoalList