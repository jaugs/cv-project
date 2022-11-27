import React from "react";
import '../styles/educationStyle.css';

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
        props.eduArr.push(props.info)
        props.seteduEditing(false);
        props.seteduInfo(
            {
              school: '',
              degree: '',
              major: '',
              date: '',
              awards: '',
              id: (props.info.id + 1)
            })
      };

    const editEdu = (e) => {
      e.preventDefault();
      const num = e.target.id
      props.seteduInfo(
        {
          school: props.eduArr[num].school,
          degree: props.eduArr[num].degree,
          major: props.eduArr[num].major,
          date: props.eduArr[num].date,
          awards: props.eduArr[num].awards,
          id: parseInt(num)
        })
      const newArr = props.eduArr.filter(elem => elem.id !== parseInt(e.target.id))
      props.seteduArr(newArr)
      props.seteduEditing(true);
    };
    
    const addEducation = (e) => {
      e.preventDefault();
      props.seteduEditing(
        true);
    }

    return (
      <div className="educationField">
        {(props.edEditing) ? (
        <form className="eduForm" onSubmit={onSubmitEdu}>
          <label className="eduLabel" htmlFor="eduInput">Enter Education:</label>
            <input
              className="eduInput"
              name= 'date'
              value= {props.info.date === `` ? '' : props.info.date}
              onChange={handleInfoChange} 
              type="text"
              placeholder='Dates attended...'
            />
              <input
              name= 'school'
              className="eduInput"
              value= {props.info.school === `` ? '' : props.info.school}
              onChange={handleInfoChange}
              type="text"
              placeholder='Institution Name...'
            />
            <input
              className="eduInput"
              name= 'degree'
              value= {props.info.degree === `` ? '' : props.info.degree}
              onChange={handleInfoChange}
              type="text"
              placeholder='Degree...'
            />
            <input
              name= 'major'
              className="eduInput"
              value= {props.info.major === `` ? '' : props.info.major}
              onChange={handleInfoChange}
              type="text"
              placeholder='Major...'
            />
            <textarea
            className="eduAward"
            name= 'awards'
            value= {props.info.awards === `` ? '' : props.info.awards}
            onChange={handleInfoChange}
            rows="7"
            cols="30"
            placeholder='Awards/Coursework/Projects...'
            />
           <button
              className="educonfirm"
              type="submit">Confirm
            </button>
          </form>
              ) : (
                <div className="EduField">
           <div className="eduArrText">
        
            {props.eduArr.map(item => (
              <div className="educationInfo" key ={item.id}>
                <p className="eduItem"> {item.degree}</p>
                <p className="eduItem"> {item.major}</p>
                <p className="eduItem"> {item.school}</p>                
                <p className="eduItem"> {item.date}</p>
                <p className="awardsText"> {item.awards}</p>
                <button 
                  id= {item.id}
                  onClick={editEdu}
                  className="educonfirm">Edit</button>
              </div>
            )
            )}
           </div>
          
           <button 
          className='educonfirm'
          onClick={addEducation}>Add Education
        </button>
        </div>
        )}
    </div>
    )}
export default Education;