import React from 'react'
import { Button,Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Medium = ({level,data}) => {
  const value= level.toString()
  return (
    <div>

{
          data.flatMap(level => {
            return(
                <>     
                <Row>                         
                   {
                    level.rounds.filter(item=> item.level === value)
                    .map(data=>{
                      
                        return(
                          
                            <>
                            <Col>
                            <Card style={{ width: '18rem' }} className="designCC">                
                            <Card.Body>                                                        
                              <Button className="desEasy" >{data.level}</Button>                                                                                               
                            </Card.Body>
                             </Card>
                             </Col>
                            </>
                        )
                    })
                   }
                </Row> 
                
                </>
                
            )          
        })
        }  
      

    </div>
  )
}

export default Medium