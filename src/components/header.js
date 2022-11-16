import React from "react";



function Header (props) {

    const handleChange = (e) => {
        props.onChangeItem(
          {
            name: e.target.value,
           id: props.info.id
          });
          }

    const onSubmit = (e) => {
        e.preventDefault();
      //  setArr(taskArr.concat(task))
      props.onChangeItem(
        {
        name: '',
        id: props.info.id
        });
    };



   // const { tasks } = props;

    // function handleDelete (itemNum) {
    // console.log(props)
    // const newTasks = tasks.filter((task) => task.id !== itemNum);
    // console.log(newTasks);
    // props.onDeleteTask(newTasks)
    // }
      return (
        <div>
            <div className="name">
                <form onSubmit={onSubmit}>
                    <label htmlFor="nameInput">Enter Name:</label>
                    <input
                        onChange={handleChange}
                        value={props.info.name}
                        type="text"
                        id='taskInput'
                        placeholder='Name...'
                    />
                    <button
                    type="submit">Confirm
                    </button>
                </form>
            </div>
            <div className="email">

            </div>
            <div className="phone">

            </div>

            {/* {tasks.map((task) => {
                 return <div key={task.id}>
                <p>{task.id}: {task.text} </p>
                <button onClick={() => handleDelete(task.id)}>Delete Task</button>
                </div>
            })
            } */}
        </div> 
      );
  };

export default Header;
  
  