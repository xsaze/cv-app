import './App.css';
import Info from './components/Info';
import Experience from './components/Experience';
import ExperienceCard from './components/ExperienceCard';
import Education from './components/Education';
import EducationCard from './components/EducationCard';
import Preview from './components/Preview';
import Edit from './components/Edit';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    title: '',
    img: '',
    address: '',
    phone: '',
    email: '',
    about: ''
  });

  const [expData, setExpData] = useState([]);

  const [eduData, setEduData] = useState([]);

  //edit values: 'hide' - hide // 'show' - show
  const [editShow, setEditShow] = useState('hide');

  const [editType, setEditType] = useState('');

  const [editData, setEditData] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: ''
  })

  const [editID, setEditID] = useState(0);

  function toggleEditMenu(type, target, id) {
    if (type === 'exp') {
      setEditData({...editData, position: target.position, company: target.company, city: target.city, from: target.from, to: target.to});
    }
    if (type === 'edu') {
      setEditData({...editData, university: target.university, degree: target.degree, subject: target.subject, city: target.city, from: target.from, to: target.to});
    }
    setEditID(id);
    setEditType(type);
    setEditShow('show');
  }

  function cancelEdit() {
    setEditShow('hide');
  }

  function saveEdit(type, newData) {
    if (type === 'exp') {
      setExpData([...expData.slice(0, editID), newData, ...expData.slice(editID + 1)]);
    }
    if (type === 'edu') {
      setEduData([...eduData.slice(0, editID), newData, ...eduData.slice(editID + 1)]);
    }
    setEditShow('hide');
  }

  function addExperience(state) {
    setExpData([...expData,state]);
  }

  function deleteExperience(id) {
    setExpData([
      ...expData.slice(0, id),
      ...expData.slice(id + 1)
    ]);
  }

  function addEducation(state) {
    setEduData([...eduData, state]);
  }

  function deleteEducation(id) {
    setEduData([
      ...eduData.slice(0, id),
      ...eduData.slice(id + 1)
    ]);
  }

  function updateInfo(obj) {
    setInfo(obj);
  }

  function generatePDF() {
    html2canvas(document.getElementById('cv'),{scale:5, onclone: function(document) {
      document.getElementById('cv').style.border = 'none';
    }}).then((canvas) => {
      var extra_canvas = document.createElement("canvas");
      extra_canvas.setAttribute('width',1240);
      extra_canvas.setAttribute('height',1754);
      var ctx = extra_canvas.getContext('2d');
      ctx.drawImage(canvas,0,0,canvas.width, canvas.height,0,0,1240,1754);
      var dataURL = extra_canvas.toDataURL();
      var img = document.createElement('img');
      img.src = dataURL;
      let pdf = new jsPDF('p', 'px', [1240, 1754]);
      pdf.addImage(dataURL, 'PNG', 0, 0, 1240, 1754);
      pdf.save('CV.pdf');
      let win = window.open();
      win.document.write(`<html style="height: 100%"><head><meta name="viewport" content="width=device-width, minimum-scale=0.1"><title>CV Full Resolution</title></head><body style="margin: 0px; background: #0e0e0e; height: 100%"><img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="`+dataURL+`" width="auto" height="100%"></body></html>`)
      // newWindow.document.write(img.outerHTML);
      // let base64image = canvas.toDataURL('image/png');
      // let 
      // let image = new Image();
      // image.src = base64image;
      // 
      // console.log(base64image);
    })
  }

  return (
    <div className='App'>
      
      <Edit show={editShow} type={editType} target={editData} cancelEdit={cancelEdit} saveEdit={saveEdit}/>

      <div className='header'>
        CV Creator
      </div>
      
      <div className='section-container'>
        <div className='section'>
          <div className='column'>
            <Info update={updateInfo} generatePDF={generatePDF}/>
          </div>
          
          <div className='column'>
            <Experience addExperience = {addExperience} />
            <Education addEducation = {addEducation} />
          </div>

          <div className='column'>
            {expData.length > 0 ? 'Experience:' : ''}
            {expData.map((exp, index) => {
              return <ExperienceCard key={index} data={exp} id={index} deleteExperience={deleteExperience} toggleEdit={toggleEditMenu} />})}
            {eduData.length > 0 ? 'Education:' : ''}
            {eduData.map((edu, index) => {
              return <EducationCard key={index} data={edu} id={index} deleteEducation={deleteEducation} toggleEdit={toggleEditMenu} />})}
          </div>
        </div>

        <div className='section'>
          <Preview info={info} edu={eduData} exp={expData} />
        </div>
        
      </div>

      <div className='footer'>
        Made by Georgi Todorov for The Odin Project.
      </div>
    </div>
  );
}

export default App;
