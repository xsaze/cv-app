import React from "react";

function Experience(props) {
    const [state, setState] = React.useState({
        position: '',
        company: '',
        city: '',
        from: '',
        to: ''
    })

    function handleChange(e) {
        const value = e.target.value;
        setState({...state,[e.target.name]: value})
    }

    function addExperience() {
        if (isEmpty()) {alert('Please fill all fields')} else {
            props.addExperience(state);
            setState({
                position: '',
                company: '',
                city: '',
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
            Experience
            <div className="category">
                <input name='position' type='text' placeholder='Position' onChange={handleChange} value={state.position}></input>
                <input name='company' type='text' placeholder='Company' onChange={handleChange} value={state.company}></input>
                <input name='city' type='text' placeholder='City' onChange={handleChange} value={state.city}></input>
                <label>From: <input name='from' type='date' onChange={handleChange} value={state.from}></input></label>
                <label>To: <input name='to' type='date' onChange={handleChange} value={state.to}></input></label>
                <button className='add-btn' onClick={addExperience}>Add</button>
            </div>
        </>
    );
}

export default Experience;