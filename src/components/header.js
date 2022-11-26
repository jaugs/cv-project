import React from "react";
import '../styles/headerStyle.css';

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
  const onSubmitName = (e) => {
    e.preventDefault();
    props.setEditing(
      {
        nameEdit : false,
        emailEdit : props.isEditing.emailEdit,
        phoneEdit : props.isEditing.phoneEdit,
      });
  };

  const onSubmitEmail = (e) => {
    e.preventDefault();
    props.setEditing(
      {
        nameEdit : props.isEditing.nameEdit,
        emailEdit : false,
        phoneEdit : props.isEditing.phoneEdit,
      });
  };

  const onSubmitPhone = (e) => {
    e.preventDefault();
    props.setEditing(
      {
        nameEdit : props.isEditing.nameEdit,
        emailEdit : props.isEditing.emailEdit,
        phoneEdit : false,
      });
  };
  const editName = (e) => {
    e.preventDefault();
    props.setEditing(
      {
        nameEdit : true,
        emailEdit : props.isEditing.emailEdit,
        phoneEdit : props.isEditing.phoneEdit,
      }); 
  }
  const editEmail = (e) => {
    e.preventDefault();
    props.setEditing(
      {
        nameEdit : props.isEditing.nameEdit,
        emailEdit : true,
        phoneEdit : props.isEditing.phoneEdit,
      }); 
  }
  const editPhone = (e) => {
    e.preventDefault();
    props.setEditing(
      {
        nameEdit : props.isEditing.nameEdit,
        emailEdit : props.isEditing.emailEdit,
        phoneEdit : true
      }); 
  }


      return (
        <div className="headerField">
            <div id="nameField">
              {(props.isEditing.nameEdit) ? (
                <form id="nameForm" onSubmit={onSubmitName}>
                    <label className="headerLabel" htmlFor="nameInput">Enter Name:</label>
                    <input
                        className="headerInput"
                        name= 'name'
                        value= {props.info.name === `` ? '' : props.info.name}
                        onChange={handleNameChange}
                        type="text"
                        placeholder='Name...'
                    />
                    <button
                    className="confirm"
                    type="submit">Confirm
                    </button>
                </form>
              ) : (
                <div id="nameText"> {props.info.name}
                  <button 
                  id="editButton"
                  onClick={editName}>Edit</button>
                </div>
              )}
            </div>
          
            <div id="emailField">
              {props.isEditing.emailEdit ? (
                <form id="emailForm" onSubmit={onSubmitEmail}>
                    <label className="headerLabel" htmlFor="emailInput">Enter Email:</label>
                    <input
                        className="headerInput"
                        onChange={handleEmailChange}
                        value= {props.info.email === `` ? '' : props.info.email}
                        type="text"
                        name='email'
                        placeholder= 'Email...'
                        
                    />
                    <button
                    className="confirm"
                    type="submit">Confirm
                    </button>
                </form>
              ) : (
                <div id="email"> {props.info.email}
                  <button 
                  id="editButton"
                  onClick={editEmail}>Edit</button>
                </div>
              )}

            </div>
            <div id="phoneField">
            {props.isEditing.phoneEdit ? (
                <form id="phoneForm" onSubmit={onSubmitPhone}>
                    <label className="headerLabel" htmlFor="phoneInput">Enter Phone:</label>
                    <input
                        className="headerInput"
                        onChange={handlePhoneChange}
                        value= {props.info.phone === `` ? '' : props.info.phone}
                        type="text"
                        name='phone'
                        placeholder='Phone Number...'
                    />
                    <button
                    className="confirm"
                    type="submit">Confirm
                    </button>
                </form>
              ) : (
                <div id="phone"> {props.info.phone}
                  <button 
                  id="editButton"
                  onClick={editPhone}>Edit</button>
                </div>
              )}
            </div>
         
        </div> 
      );
  };

export default Header;
  
  