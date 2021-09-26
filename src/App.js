import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
   const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'task1',
            day: 'today',
            reminder: true 
        },{
            id: 2,
            text: 'task2',
            day: 'tomorrow',
            reminder: true 
        },{
            id: 3,
            text: 'task3',
            day: 'next week',
            reminder: false
        }
    ])

    // Add task
    const addTask = task => {
      const id = Math.floor(Math.random() * 1000) + 1
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = id => {
      setTasks(tasks.filter(task => task.id !== id))
    }

    // Toggle reminder
    const toggleReminder = id => {
      setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder} /> : 'No Tasks to show'}
    </div>
  );
}

export default App;
