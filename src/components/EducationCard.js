function EducationCard(props) {

    function deleteEducation() {
        props.deleteEducation(props.id);
    }

    function toggleEdit() {
        props.toggleEdit('edu',props.data,props.id);
    }

    return(
        <div className="card">
            <div>{props.data.subject} @ {props.data.university}</div>
            <div>{props.data.degree}</div>
            <div>{props.data.city}</div>
            <div>{props.data.from} - {props.data.to}</div>
            <div className="popup-btn">
                <span className="material-symbols-outlined popup-edit" onClick={toggleEdit}>edit</span>
                <span className="material-symbols-outlined popup-delete" onClick={deleteEducation}>delete</span>
            </div>
        </div>
    );
}

export default EducationCard;