function ExperienceCard(props) {

    function deleteExperience() {
        props.deleteExperience(props.id);
    }

    function toggleEdit() {
        props.toggleEdit('exp',props.data,props.id);
    }

    return(
        <div className="card">
            <div>{props.data.position} @ {props.data.company}</div>
            <div>{props.data.city}</div>
            <div>{props.data.from} - {props.data.to}</div>
            <div className="popup-btn">
                <span className="material-symbols-outlined popup-edit" onClick={toggleEdit}>edit</span>
                <span className="material-symbols-outlined popup-delete" onClick={deleteExperience}>delete</span>
            </div>
        </div>
    );
}

export default ExperienceCard;