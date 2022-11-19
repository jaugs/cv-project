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
        console.log('eee')
        props.seteduEditing(
          false);
      };

    return (
        <div>
            <div id="educationField">
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
                <div id="educationText"> {props.info.degree}
                  <button 
                  id="editEduButton"
                 >Edit</button>
                </div>
              )}
            </div>
        </div>
    )
}

export default Education;