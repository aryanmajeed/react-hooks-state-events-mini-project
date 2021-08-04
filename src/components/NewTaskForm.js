import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Food");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => category === "All" ? null : <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
