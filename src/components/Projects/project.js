import React, { useState } from 'react'
import { Button,Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Challenge.css'
import Home from '../Home/Home'

import { useDispatch, useSelector } from 'react-redux';


import { toSetProject } from '../../Features/Projects/setProjects';
import ChallengeLevels from './ChallengeLevel'
import Details from '../ProjectDetails/Details'


  
const Challenge = () => {

    const [show, setShow] = useState(false); 


    // const project = useSelector(state=> state.project.value)
    const dispatch= useDispatch()

    const handleProjectClick=(data)=>{
        console.log("item",data)
        dispatch(toSetProject(data))
        setShow(true)
    }
  
    return (
        <>
      <div>
        <Home />

        <div className="projectMainClass">
        
          {ChallengeLevels.map((level, index) => (
            <div key={index}>
              <h2>{level.projects}</h2>
              
              <Row>   
                {
                   
                    level.rounds.map(item=>{
                        return(
                            <Col md={4} key={index} onClick={handleProjectClick.bind(this,item)}>
                            <Card className="challengesStyle" key={item.id}>
                            <Card.Body>
                                <Card.Title style={{textAlign: 'center'}}>{item.title}</Card.Title>
                                <Button variant="outline-warning" >
                                {item.title}
                                </Button>
                            </Card.Body>
                            </Card>
                            </Col>
                        )
                    })
                    
                }
               </Row>
             
              
            </div>
          ))}
         
        </div>
      </div>
                {
                    show && <Details show={show} setShow ={setShow}/>
                }
      </>
    );
  };
  
  export default Challenge;