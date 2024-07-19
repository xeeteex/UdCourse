import React from "react";

const NewGoal = (props) => {
  const addGoalHandler=(event)=>{
    event.preventDefault();

    const newGoal= {
      id:Math.random().toString(),
      text:'my new goal'
    };
    props.onAddGoal(newGoal);
  };
    return (
    <form action="" onSubmit={addGoalHandler}>
      <input type="text" className="m-2 " />
      <button type="submit" className="rounded-md bg-gray-500 px-3 py-1">Add Goal</button>
    </form>
  )
}
export default NewGoal