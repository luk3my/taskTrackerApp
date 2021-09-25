import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
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

    // Delete Task
    const deleteTask = id => {
      console.log('delete', id)
    }

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
