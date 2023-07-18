import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Popup.css'
import axios from 'axios'
import { useParams ,useNavigate} from 'react-router-dom';

function Popup() {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false)
    navigate('/')
  
  };
  const navigate= useNavigate()
  


  const {id} = useParams();
    const [data, setData] = useState([])
 
    useEffect(()=>{
        
        axios.get( `https://646352d67a9eead6fae32f76.mockapi.io/months/${id}`)
        .then(response => {
            // Handle the response data
            console.log(response.data);
            setData(response.data)
          })        
          .catch(error => {
            // Handle errors
            console.error(error);
          });
    },[])



  return (
    <>
      

    <div>
      <Offcanvas show={show} onHide={handleClose} placement="bottom" className="PopUpcontainer" >
        <Offcanvas.Header closeButton className="popUpHeader">
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="popUpContent">
          <div className="main">    

            <div className="PopupImg">
                <img src={data.img} alt="" className="pImg" />
            </div>

            <div className="PopUpContent">

              <div className="popUpButton">
                <Button className='myButton'>Celebration</Button>
                <Button className='saveBtn' variant="outline-warning">Save</Button>
              </div>

              <div className="popUpTitle">
                 <h4 className="popUpMainTitle">{data.title}</h4><span className="text-muted muted">{data.month} {data.day}, {data.year}</span>
                  <p className="dataDescription">{data.description}</p>
              </div>

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
                  <div className="setDiv">
                  <img src="" alt=""  className="pUimage"/>
                  </div>
                  <div className="setDiv">
                  <img src="" alt="" className="popUPIMage" />
                  </div>
                  <div className="setDiv">
                  <img src="" alt=""  className="popUPIMage"/>
                  </div>

                  
                </div>



            </div>

            </div>
        </Offcanvas.Body>
      </Offcanvas>
      </div>

    </>
  );
}

export default Popup;