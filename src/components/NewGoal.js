import { useState } from "react";
import React from "react";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState();

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText, //text is entertedText that is displayed
    };

    setEnteredText(" "); //to make the input tage empty

    props.onAddGoal(newGoal);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form action="" onSubmit={addGoalHandler}>
      <input
        type="text"
        value={enteredText}
        onChange={textChangeHandler}
        className="m-2 "
      />
      <button type="submit" className="rounded-md bg-gray-500 px-3 py-1">
        Add Goal
      </button>
    </form>
  );
};
export default NewGoal;
