import React from "react";
import '../styles/workStyle.css';

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
        props.workArr.push(props.info)
        props.setWorkEditing(false);
        props.setWorkInfo(
            {
              duties: '',
              company: '',
              title: '',
              location: '',
              date: '',
              id: (props.info.id + 1)
            })
      };

    const editWork = (e) => {
      e.preventDefault();
      const num = e.target.id
      props.seteduInfo(
        {
          company: props.workArr[num].company,
          title: props.workArr[num].title,
          location: props.workArr[num].location,
          date: props.workArr[num].date,
          duties: props.workArr[num].duties,
          id: parseInt(num)
        })
      const newArr = props.workArr.filter(elem => elem.id !== parseInt(e.target.id))
      props.setWorkArr(newArr)
      props.setWorkEditing(
        true);
    };

    const addWork = (e) => {
      e.preventDefault();
      props.setWorkEditing(
        true);
    }

    return (
        <div>
            <div className="workField">
              {(props.workEditing) ? (
                <form className="workForm" onSubmit={onSubmitWork}>
                    <label className="workLabel" htmlFor="workInput">Enter Work History:</label>
                    <input
                        className="workInput"
                        name= 'date'
                        value= {props.info.date === `` ? '' : props.info.date}
                        onChange={handleInfoChange}
                        type="text"
                        placeholder='Dates worked...'
                    />
                    <input
                        className="workInput"
                        name= 'company'
                        value= {props.info.company === `` ? '' : props.info.company}
                        onChange={handleInfoChange}
                        type="text"
                        placeholder='Company Name...'
                    />
                    <input
                        className="workInput"
                        name= 'title'
                        value= {props.info.title === `` ? '' : props.info.title}
                        onChange={handleInfoChange}
                        type="text"
                        placeholder='Job Title...'
                    />
                    <input
                        className="workInput"
                        name= 'location'
                        value= {props.info.location === `` ? '' : props.info.location}
                        onChange={handleInfoChange}
                        type="text"
                        placeholder='Location...'
                    />
                     <textarea
                        className="jobDuties"
                        name= 'duties'
                        value= {props.info.duties === `` ? '' : props.info.duties}
                        onChange={handleInfoChange}
                        type="text"
                        placeholder='Job Duties/Responsibilities...'
                        rows="7"
                        cols="30"
                    />
                    <button
                    className="workconfirm"
                    type="submit">Confirm
                    </button>
                </form>
              ) : (
                <div className="WorkTextField">
           <div className="workArrText">
        
            {props.workArr.map(item => (
              <div className="workInfo" key ={item.id}>
                <p className="jobItem"> {item.company}</p>
                <p className="jobItem"> {item.title}</p>
                <p className="jobItem"> {item.location}</p>
                <p className="jobItem"> {item.date}</p>
                <p className="dutiesText"> {item.duties}</p>
                <hr />
                <button
              className="workconfirm"
              id= {item.id}
              onClick={editWork}
              >Edit</button>
              </div>
            )
            )}
           </div>
          
           <button 
          className='workconfirm'
          onClick={addWork}>Add Work:
        </button>
        </div>
              )}
            </div>
        </div>
    )
}

export default WorkHistory;