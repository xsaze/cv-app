import React from "react";

function Education(props) {
    const [state, setState] = React.useState({
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: ''
    })

    function handleChange(e) {
        const value = e.target.value;
        setState({...state,[e.target.name]: value})
    }

    function addEducation() {
        if (isEmpty()) {alert('Please fill all fields')} else {
            props.addEducation(state);
            setState({
                university: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: ''
            })
        }
    }

    function isEmpty() {
        let isEmpty = false;
        for (const value of Object.values(state)) {
            if (value === '') {
              isEmpty = true;
            }
        }
        return isEmpty;
    }

    return(
        <>
            Education
            <div className="category">
                <input name='university' type='text' placeholder='University name' onChange={handleChange} value={state.university}></input>
                <input name='city' type='text' placeholder='City' onChange={handleChange} value={state.city}></input>
                <input name='degree' type='text' placeholder='Degree' onChange={handleChange} value={state.degree}></input>
                <input name='subject' type='text' placeholder='Subject' onChange={handleChange} value={state.subject}></input>
                <label>From: <input name='from' type='date' onChange={handleChange} value={state.from}></input></label>
                <label>To: <input name='to' type='date' onChange={handleChange} value={state.to}></input></label>
                <button className='add-btn' onClick={addEducation}>Add</button>
            </div>
        </>
    );
}

export default Education;