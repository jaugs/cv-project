//import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import React from 'react';

function App() {


  const [headerInfo, setheader] = React.useState(
    { name: '',
      phone: '',
      email: '',
      id: 1
    });
  const [isEditing, setEditing] = React.useState(
    { nameEdit: true,
      phoneEdit: true,
      emailEdit: true,
    });
  
  //const [taskArr, setArr] = React.useState([]);

//  const handleChange = (e) => {
//     setTask(
//       {
//         text: e.target.value,
//        id: task.id
//       })
//       }

//  const onSubmitTask = (e) => {
//     e.preventDefault();
//     console.log(taskArr)
//     setArr(taskArr.concat(task))
//     setTask({
//       text: '',
//       id: task.id + 1
//     })
//   };

  return (
    <div>
      {/* <form onSubmit={onSubmitTask}>
      <label htmlFor="taskInput">Enter Task:</label>
        <input
        onChange={handleChange}
        value={task.text}
        type="text"
        id='taskInput'
        placeholder='Your Task...'
        />
      <button
        type="submit"
        >Add Task</button>
      </form> */}
     <Header 
     info={headerInfo}
     onChangeItem = {setheader}
     isEditing = {isEditing}
     setEditing = {setEditing} />
  </div>
   );
  }





//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
