import {useSelector} from 'react-redux'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Save.css'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Details from '../ProjectDetails/Details'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Home from '../Home/Home';

const Save = () => {

  const [position, setPosition] = useState('middle-center');
  const [show, setShow] = useState(false); 


    const dipatch = useDispatch()

    // const save = useSelector(state => state.save.value)
    const savedProject= useSelector(state=> state.save.projects)
    const [savedData,setSavedData] = useState(savedProject.length > 0)

    useEffect(()=>{
        setSavedData(savedProject.length > 0)
    },[savedProject])

    const handleClick=(data)=>{
      // const {img,title}=data
      const {id,title,img,description,month,day}=data
      setShow(true)
    

    }
   
  return (
    <>
    <div>
    <Home/>
        {console.log("SetSavedData",savedProject)}

        {
            savedData > 0 ? (
                <Row className="saveRow">
                  {savedProject.map((data, index) => (
                    <Col key={index} className="saveCol">
                      <Card style={{ width: '18rem' }} className="saveCard" onClick={handleClick.bind(this,data)}>
                      
                        <Card.Body className="saveBody">
                          <Card.Title className="saveTitle">{data.title}</Card.Title>
                          {/* <Card.Text>{data.description}</Card.Text> */}
                          {/* <Card.Img variant="top" src={data.img} className="saveImg" /> */}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <>
              
              <div
                aria-live="polite"
                aria-atomic="true"
                className="bg-light position-relative"
                style={{ minHeight: '100vh',width:"85%", float:'right', color:'purple' }}
              >
                <ToastContainer
                  className="p-3"
                  position="middle-center"
                  style={{ zIndex: 1 }}
                >
                  <Toast>
                    <Toast.Header closeButton={false}>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      />
                      <strong className="me-auto">Projects</strong>
                      {/* <small>11 mins ago</small> */}
                    </Toast.Header>
                    <Toast.Body>Projects are not saved !</Toast.Body>
                  </Toast>
                </ToastContainer>
              </div>
              </>
              )
        }

              {
                    show && <Details show={show} setShow ={setShow}/>
                }
        
   </div>
   </>
  )
}

export default Save