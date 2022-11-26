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

    // const ListItems = () => {
    //  let items = Object.entries(props.eduArr).map((key, item) => 
    //    {
    //      return  key={item} value={key[0]}>{key[1]}
    //    })
    //   return items}
      
    

    const onSubmitEdu = (e) => {
        e.preventDefault();
        props.eduArr.push(props.info)
        props.seteduEditing(
          false);
        props.seteduInfo(
            {
              degree: '',
              major: '',
              date: '',
              awards: '',
              id: (props.info.id + 1)
            }
          )
      };

   
    const editEdu = (e) => {
      const newArr = props.eduArr.filter(elem => elem.id !== parseInt(e.target.id))
      props.seteduArr(newArr)
      // props.seteduInfo(
      //     {
      //       degree: props.eduArr[item.degree],
      //       major: props.eduArr[item.major],
      //       date: props.eduArr[item.date],
      //       awards: props.eduArr[item.awards],
      //       id: parseInt(item.id+1)
      //     })
    
      props.seteduEditing(
        true);
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
                <div>
           <div className="eduArrText">
        
            {props.eduArr.map(item => (
              <div className="educationInfo" key ={item.id}>
                <p> {item.degree}</p>
                <p> {item.major}</p>
                <p> {item.date}</p>
                <p> {item.awards}</p>
                <hr />
                <button 
              id= {item.id}
              onClick={editEdu}
              >Edit</button>
              </div>
            )
            )}
         
            
             
           </div>
          
           <button 
          className='addEdu'
          onClick={addEducation}>Add Education
        </button>
        </div>
        )}
    </div>
    )}
export default Education;