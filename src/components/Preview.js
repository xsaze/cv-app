function Preview(props) {
    const edu = props.edu;
    const exp = props.exp;

    return(
        <div id='cv' className='preview'>
            <div className="preview-left">
                {/* <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="30" />
                </svg> */}
                <span className='preview-img'>
                    <img src={props.info.img === '' ? '' : URL.createObjectURL(props.info.img)} alt=''></img>
                </span>
                <div className='preview-left-section'>
                    {props.info.address !== '' || props.info.phone !== '' || props.info.email !== '' ? <div className='preview-header'>Contact</div> : ''}
                    <div>
                        <div>{props.info.address}</div>
                        <div>{props.info.phone}</div>
                        <div>{props.info.email}</div>
                    </div>
                </div>
                <div className='preview-left-section'>
                    {edu.length > 0 ? <div className="preview-header">Education</div> : ''}
                    {edu.map((item, index) => {
                        return (
                            <div key={index} className='preview-edu-card'>
                                <div className='from-to'>{item.from} - {item.to}</div>
                                <div className='degree'>{item.degree} @</div>
                                <div className='subject'>{item.subject}</div>
                                <div className='university'>{item.university}</div>
                                <div className='city'>{item.city}</div>
                            </div>)})}
                </div>
            </div>
            <div className="preview-right">
                <div className='preview-title'>
                    <div className='name'>
                        {props.info.title}
                        <span className='firstName'> {props.info.firstName}</span> 
                        <span className='lastName'> {props.info.lastName}</span>
                    </div>
                    <div className='about'>
                        {props.info.about}
                    </div>
                </div>
                <div className="preview-experience">
                    {exp.length > 0 ? <div className='preview-header'>Experience</div> : ''}
                    {exp.map((item, index) => {
                        return (
                            <div key={index} className='preview-exp-card'>
                                <div className='from-to'>{item.from} - {item.to}</div>
                                <div className='company'>{item.company}</div>
                                <div className='position'>{item.position}</div>
                                <div className='city'>{item.city}</div>
                            </div>
                        )})}
                    
                </div>
            </div>
        </div>
    );
}

export default Preview;