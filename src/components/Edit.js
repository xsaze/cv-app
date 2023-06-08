import React from 'react'

function Edit(props) {

    let obj = props.target;

    function handleChange(e) {
        const value = e.target.value;
        obj = {...obj,[e.target.name]: value};
    }

    function saveEdit() {
        if (isEmpty()) {alert('Please fill all fields')} else {
            props.saveEdit(props.type, obj);
        }
    }

    function isEmpty() {
        let isEmpty = false;
        for (const value of Object.values(obj)) {
            if (value === '') {
              isEmpty = true;
            }
        }
        return isEmpty;
    }

    if (props.show === 'hide') return; else {
        if (props.type === 'exp') {
            return(
                <div className='edit-screen'>
                    <input name='position' type='text' placeholder='Position' onChange={handleChange} defaultValue={obj.position}></input>
                    <input name='company' type='text' placeholder='Company' onChange={handleChange} defaultValue={obj.company}></input>
                    <input name='city' type='text' placeholder='City' onChange={handleChange} defaultValue={obj.city}></input>
                    <label>From: <input name='from' type='date' onChange={handleChange} defaultValue={obj.from}></input></label>
                    <label>To: <input name='to' type='date' onChange={handleChange} defaultValue={obj.to}></input></label>
                    <div>
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={props.cancelEdit}>Cancel</button>
                    </div>
                
                
                </div>
            )
        }
        if (props.type === 'edu') {
            return(
            <div className='edit-screen'>
                    <input name='university' type='text' placeholder='University name' onChange={handleChange} defaultValue={obj.university}></input>
                    <input name='city' type='text' placeholder='City' onChange={handleChange} defaultValue={obj.city}></input>
                    <input name='degree' type='text' placeholder='Degree' onChange={handleChange} defaultValue={obj.degree}></input>
                    <input name='subject' type='text' placeholder='Subject' onChange={handleChange} defaultValue={obj.subject}></input>
                    <label>From: <input name='from' type='date' onChange={handleChange} defaultValue={obj.from}></input></label>
                    <label>To: <input name='to' type='date' onChange={handleChange} defaultValue={obj.to}></input></label>
                    <div>
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={props.cancelEdit}>Cancel</button>
                    </div>
                
                
                </div>
            )
        }
    }
}

export default Edit;