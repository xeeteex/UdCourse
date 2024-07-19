import React, { useState } from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

function App() {
  const [courseGoals, setCoursegoal] = useState([
    { id: "cg1", text: "Finish course" },
    { id: "cg2", text: "Try course" },
    { id: "cg3", text: "Help course" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCoursegoal(courseGoals.concat(newGoal))
    setCoursegoal((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div>
      <h1 className="text-center font-bold ">COURSE GOALS</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
