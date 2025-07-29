/**
 * Goals:
 * 1. Run the App
 * 2. Make it work properly
 */

/**
 * Kanban Board app.
 *
 * Features:
 *  – The board should have 3 columns: "Todo", "Doing", "Done".
 *  – The "Todo" column should have 3 tasks.
 *  – Clicking on any task should move it to the next column.
 *  – Tasks in the "Done" column are not clickable.
 *  - Bonus: you can add a new task directly from the Todo column
 */

import { useEffect, useState } from "react";
import "./styles.css";

type TaskStatus = "DOING" | "TODO" | "DONE"

type Task = {
  id: number, task: string, status: TaskStatus
}
const fetchTasks = (): Promise<Array<Task>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {id: 1, task: "Task 1", status: "TODO"},
        {id: 2, task: "Task 2", status: "TODO"},
        {id: 3, task: "Task 3", status: "TODO"}
      ]);
    }, 1000);
  });
};


export const App = () => {
  const [tasks, setTasks] = useState<Array<Task> | null>(null)
  const nextPossibleSteps: Record<TaskStatus, TaskStatus> = {
    "TODO": "DOING",
    "DOING": "DONE",
    "DONE": "DONE"
  }
  const steps: Array<TaskStatus> = ["TODO", "DOING", "DONE"];
  useEffect(() => {
    const getTasksData = async () => {
      const data = await fetchTasks();
      setTasks(data)
    }
    getTasksData()
  }, [])

  const changeStatusTo = (id: number, status: TaskStatus) => {
    const updatedTasks = tasks?.map((task) =>
      {
        if (task.id === id) {
          return {...task, status}
        }
        return task
      });
    updatedTasks && setTasks(updatedTasks)
  }
  

  const listOfTasks = (currentStatus: TaskStatus) => {
    const filterTasks = tasks?.filter((task) => task.status === currentStatus);
    const buttons = filterTasks?.map((task) => 
      <button key={task.id} onClick={() => changeStatusTo(task.id, nextPossibleSteps[currentStatus])}>
        {task.task}
      </button>
    )
    return buttons;
  };

  return (
    <div className="content">
      <div className="container">
        { 
          steps.map((step) =>
            <div className="column" key={step}>
              <p className="title">{step}</p>
              {listOfTasks(step)}
            </div>
          )
        }
      </div>
    </div>
  );
};
