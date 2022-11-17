import React from "react";


   // const { tasks } = props;

    // function handleDelete (itemNum) {
    // console.log(props)
    // const newTasks = tasks.filter((task) => task.id !== itemNum);
    // console.log(newTasks);
    // props.onDeleteTask(newTasks)
    // }

function Header (props) {

  const handleNameChange = (e) => {
      props.onChangeItem(
        {
          name: e.target.value,
          id: props.info.id,
          email: props.info.email,
          phone: props.info.phone,
        });
  }
  const handleEmailChange = (e) => {
    props.onChangeItem(
      {
        email: e.target.value,
        id: props.info.id,
        name: props.info.name,
        phone: props.info.phone,
      });
}

const handlePhoneChange = (e) => {
  props.onChangeItem(
    {
      phone: e.target.value,
      id: props.info.id,
      name: props.info.name,
      email: props.info.email,
    });
}
  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name
    console.log(name);
    props.setEditing(
      {
        emailEdit : false,
       //[`${name}+Edit`]: false,
      });
  };

  const editField = (e) => {
    e.preventDefault();
    const name = e.target.name
    props.setEditing(
      {
        [name]: true,
      }); 
  }


      return (
        <div>
            <div id="nameField">
              {(props.isEditing.nameEdit) ? (
                <form id="nameForm" onSubmit={onSubmit}>
                    <label htmlFor="nameInput">Enter Name:</label>
                    <input
                        name= 'name'
                        onChange={handleNameChange}
                        type="text"
                        placeholder='Name...'
                    />
                    <button
                    type="submit">Confirm
                    </button>
                </form>
              ) : (
                <div id="nameText"> {props.info.name}
                  <button 
                  id="editButton"
                  onClick={editField}>Edit</button>
                </div>
              )}
            </div>
          
            <div id="emailField">
              {props.isEditing.emailEdit ? (
                <form id="emailForm" onSubmit={onSubmit}>
                    <label htmlFor="emailInput">Enter Email:</label>
                    <input
                        onChange={handleEmailChange}
                    
                        type="text"
                        name='email'
                        placeholder='Email...'
                    />
                    <button
                    type="submit">Confirm
                    </button>
                </form>
              ) : (
                <div id="email"> {props.info.email}
                  <button 
                  id="editButton"
                  onClick={editField}>Edit</button>
                </div>
              )}

            </div>
            <div id="phoneField">
            {props.isEditing.phoneEdit ? (
                <form id="phoneForm" onSubmit={onSubmit}>
                    <label htmlFor="phoneInput">Enter Phone:</label>
                    <input
                        onChange={handlePhoneChange}
                    
                        type="text"
                        name='phone'
                        placeholder='Phone Number...'
                    />
                    <button
                    type="submit">Confirm
                    </button>
                </form>
              ) : (
                <div id="phone"> {props.info.phone}
                  <button 
                  id="editButton"
                  onClick={editField}>Edit</button>
                </div>
              )}
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
  
  