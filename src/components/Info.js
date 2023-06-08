import React from 'react';

function Info(props) {
    const [info, setInfo] = React.useState({
        firstName: '',
        lastName: '',
        title: '',
        img: '',
        address: '',
        phone: '',
        email: '',
        about: ''
    });

    function handleFieldChange() {
        props.update(info);
    }

    function handleChange(e) {
        const value = e.target.value;
        setInfo({...info,[e.target.name]: value})
    }

    function uploadImage(e) {
        const file = e.target.files;
        setInfo({...info,[e.target.name]: file[0]})
    }


    return (
        <>  
            Personal Information
            <div className="category">
                
                <input name='firstName' type='text' placeholder="First name" onChange={handleChange} onBlur={handleFieldChange}></input>
                <input name= 'lastName' type='text' placeholder="Last name" onChange={handleChange} onBlur={handleFieldChange}></input>
                <label>Title: <select name='title' onChange={handleChange} onBlur={handleFieldChange}>
                    <option></option>
                    <option value='Mr.'>Mr</option>
                    <option value='Mrs.'>Mrs</option>
                    <option value='Dr.'>Doctor</option>
                </select></label>
                <label id='img-upload'>Click here to upload photo<input name='img' type='file' placeholder="Photo" accept="image/png, image/jpeg" className='hidden' onChange={uploadImage} onBlur={handleFieldChange}></input></label>
                <input name= 'address' type='text' placeholder="Address" onChange={handleChange} onBlur={handleFieldChange}></input>
                <input name= 'phone' type='text' placeholder="Phone number" onChange={handleChange} onBlur={handleFieldChange}></input>
                <input name= 'email' type='text' placeholder="Email" onChange={handleChange} onBlur={handleFieldChange}></input>
                <textarea name='about' placeholder="About me..." onChange={handleChange} onBlur={handleFieldChange}></textarea>
            </div>

            <div className="buttons-container">
                <div className='menu-btn' onClick={props.generatePDF}>Generate PDF</div>
                <div className='menu-btn' onClick={() => window.location.reload()}>Reset</div>
            </div>
        </>
    );
}

export default Info;