//import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Education from "./components/education";
import React from 'react';
import WorkHistory from './components/workHistory';

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
  
  const [eduInfo, seteduInfo] = React.useState(
    {
      degree: '',
      major: '',
      date: '',
      awards: '',
      id: 0,
  });

  const [edEditing, seteduEditing] = React.useState(true)
  const [eduArr, seteduArr] = React.useState([])
  
  const [workInfo, setWorkInfo] = React.useState(
    {
      company: '',
      title: '',
      location: '',
      date: '',
      tasks: [],
  });

  const [workEditing, setWorkEditing] = React.useState(true)
  const [workArr, setWorkArr] = React.useState([])

 

  return (
    <div>
    
     <Header 
     info = {headerInfo}
     onChangeItem = {setheader}
     isEditing = {isEditing}
     setEditing = {setEditing} />

     <div className='educationContainer'>
        <Education
        info = {eduInfo}
        seteduInfo= {seteduInfo}
        eduArr = {eduArr}
        seteduArr = {seteduArr}
        edEditing = {edEditing}
        seteduEditing = {seteduEditing}
        />
        {/* <button
        id = "addMore"
        onClick={
          <Education
          info = {eduInfo}
        seteduInfo= {seteduInfo}
        eduArr = {eduArr}
        seteduArr = {seteduArr}
        edEditing = {edEditing}
        seteduEditing = {seteduEditing}
        />
        }>Add More Eduacation</button> */}
       
      </div>
     <div className='workContainer'>
        <WorkHistory
        info = {workInfo}
        setWorkInfo= {setWorkInfo}
        workArr = {workArr}
        seteduArr = {setWorkArr}
        workEditing = {workEditing}
        setWorkEditing = {setWorkEditing}
        />
     </div>
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
