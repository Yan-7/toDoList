import { useState } from "react";

function ToDoList() {
  const [myTasks, setMyTasks] = useState([
    { id: 1, text: "task1" },
    { id: 2, text: "task2" },
  ]);
  const [myId, setMyId] = useState(3);

  function addTask(event) {
    event.preventDefault();
    const newTaskText = event.target.elements.myInput.value;
    const newTask = { id: myId, text: newTaskText };
    setMyId(myId + 1);
    setMyTasks([...myTasks, newTask]);
    event.target.reset();
  }

  function deleteTask() {
    const updatedTasks = myTasks.slice(0, -1);
    setMyTasks(updatedTasks);
  }

  function deleteTaskById(event) {
    event.preventDefault();
    const id = parseInt(event.target.elements.deleteTaskId.value,10);
    const newArray = myTasks.filter(task => task.id !==id);
    setMyTasks(newArray);
  }

  return (
    <>
      <h1>Task List</h1>
      <button onClick={deleteTask}>delete last task</button>
      <form onSubmit={addTask}>
        <input id="myInput" type="text" placeholder="Write task" />
        <button type="submit">Add Task</button>
      </form>
{/* 444 */}
      <form onSubmit={deleteTaskById} >
      <input id="deleteTaskId"placeholder="enter id to delete task"></input>
      <button type="submit">delete task by id</button>
      </form>
      <ul>

        {myTasks.map((task) => (
          <li key={task.id}>
            {task.id} --- {task.text}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
