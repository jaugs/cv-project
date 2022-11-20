import React from "react";

function WorkHistory (props) {

    const handleInfoChange = (e) => {
        let target = e.target.value
        props.setWorkInfo(
          {
            ...props.info,
           [e.target.name]: target,
          });
    }

    const onSubmitWork = (e) => {
        e.preventDefault();
        props.setWorkEditing(
          false);
      };

    const editWork = (e) => {
      e.preventDefault();
      props.setWorkEditing(
        true);
    };

    return (
        <div>
            <div className="workField">
              {(props.workEditing) ? (
                <form className="workForm" onSubmit={onSubmitWork}>
                    <label htmlFor="workInput">Enter Work History:</label>
                    <input
                        name= 'company'
                        value= {props.info.company === `` ? '' : props.info.company}
                        onChange={handleInfoChange}
                        type="text"
                        placeholder='Company Name...'
                    />
                    <input
                        name= 'title'
                        value= {props.info.title === `` ? '' : props.info.title}
                        onChange={handleInfoChange}
                        type="text"
                        placeholder='Job Title...'
                    />
                    <input
                        name= 'location'
                        value= {props.info.location === `` ? '' : props.info.location}
                        onChange={handleInfoChange}
                        type="text"
                        placeholder='Location...'
                    />
                    <input
                        name= 'date'
                        value= {props.info.date === `` ? '' : props.info.date}
                        onChange={handleInfoChange}
                        type="text"
                        placeholder='Dates worked...'
                    />
                    <button
                    type="submit">Confirm
                    </button>
                </form>
              ) : (
                <div className="workText"> 
                  <p>{props.info.company}</p>
                  <p>{props.info.title}</p>
                  <p>{props.info.location}</p>
                  <p>{props.info.date}</p>
                  <button 
                  id="editWorkButton"
                  onClick={editWork}
                 >Edit</button>
                </div>
              )}
            </div>
        </div>
    )
}

export default WorkHistory;