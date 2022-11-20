import React from "react";



function Education (props) {

    const handleInfoChange = (e) => {
        let target = e.target.value
        props.seteduInfo(
          {
            ...props.info,
           [e.target.name]: target,
          });
    }

    const onSubmitEdu = (e) => {
        e.preventDefault();
        props.seteduEditing(
          false);
      };

    const editEdu = (e) => {
      e.preventDefault();
      props.seteduEditing(
        true);
    };

    return (
      <div className="educationField">
        {(props.edEditing) ? (
        <form className="eduForm" onSubmit={onSubmitEdu}>
          <label htmlFor="eduInput">Enter Education:</label>
            <input
              name= 'degree'
              value= {props.info.degree === `` ? '' : props.info.degree}
              onChange={handleInfoChange}
              type="text"
              placeholder='Degree...'
            />
            <input
              name= 'major'
                value= {props.info.major === `` ? '' : props.info.major}
                onChange={handleInfoChange}
                type="text"
                placeholder='Major...'
            />
            <input
              name= 'date'
              value= {props.info.date === `` ? '' : props.info.date}
              onChange={handleInfoChange} 
              type="text"
              placeholder='Dates attended...'
            />
            <input
            name= 'awards'
            value= {props.info.awards === `` ? '' : props.info.awards}
            onChange={handleInfoChange}
            type="text"
            placeholder='Awards/Coursework/Projects...'
            />
           <button
              type="submit">Confirm
            </button>
          </form>
              ) : (
          <div id="educationText"> 
            <p>{props.info.degree}</p>
            <p>{props.info.major}</p>
            <p>{props.info.date}</p>
            <p>{props.info.awards}</p>
            <button 
              id="editEduButton"
              onClick={editEdu}
              >Edit</button>
          </div>
        )}
    </div>
    )}
export default Education;