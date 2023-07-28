import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

import './Popup.css'
import { removeProject, saveProject } from '../../Features/Save';


const selectProjectInfo = (state)=> state.save.projects.map(project=>({
    id:project.id,
    isSavedinMyProject:project.isSaved
  }))


function PopDis({show,setShow}) {

    const dispatch = useDispatch()
     
    const project = useSelector(state=> state.project.value)
    const {id,title,projects,level}= project

  const offCanvasStyles ={
    height:'95vh',
    borderTopLeftRadius:"50px",
    borderTopRightRadius:"50px",
    border:"2px solid purple",

  }

  const popUpContent={
    display:"flex",
    flexDirection:"column",   
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height: "80vh",
    border:"2px solid red",
    textAlign: "justify",
  }


  
  const projectInfo = useSelector (selectProjectInfo )

  const isSavedProject = projectInfo.find(project=> project.id === id)?.isSavedinMyProject
  const buttonVariant = isSavedProject ? 'highlightYellow' : ' '
  const buttonText = isSavedProject ? 'Saved' : 'Save';

  const handleClose = () => setShow(false);
  const handleSave = (data) => {
    if(isSavedProject){
      dispatch(removeProject(data.id))
    }
    else{
      dispatch(saveProject({...data,isSaved:true}));
    }
  };
  


  return (
    <>
    <div >
    <Offcanvas show={show} onHide={handleClose} placement="bottom" style={offCanvasStyles}>

        <Offcanvas.Header closeButton className="popUpHeader">
          <Offcanvas.Title> </Offcanvas.Title>
        </Offcanvas.Header>
        
      
      <Offcanvas.Body className="popUpContent" >
          <div className="main">    

            <div className="PopupImg">
            </div>

            <div className="PopUpContent2">

              <div className="popUpButton">
                <Button className='myButton'>{title}</Button>

                <Button variant='outline-warning' className={`saveBtn ${buttonVariant} `}  onClick={handleSave.bind(this,project)} >
                    {buttonText}
                </Button>
              </div>

              <div className="popUpTitle">
                 <h4 className="popUpMainTitle"></h4><span className="month">{title}</span>
                  <p className="dataDescription"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  
                  </p>
              </div>

              {/* <div className="wpast">

                  <h2 className="inspirations">Inspirations</h2>
                <div className="DetailedImage">
                
                  <div className="setDiv">
                  <img src="" alt=""  className="popUPIMage" />
                  </div>
                  <div className="setDiv">
                  <img src="" alt=""  className="popUPIMage"/>
                  </div>
                  <div className="setDiv">
                  <img src="" alt="" className="popUPIMage" />
                  </div>
                 
                </div>

                </div> */}

            </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>


        </div>
    </>
  );
}

export default PopDis;