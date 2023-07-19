import React, { useState } from 'react'
import { Button,Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hard from './Hard';
import Medium from './Medium';
import Easy from './Easy';
import './Challenge.css'

const ChallengeLevels = [
    {
        id:1,
        level:"Easy",
        rounds:[
            {
                id:1,
                level:"Easy"
            },
            {
                id:2,
                level:"Easy"
            },
            {
                id:3,
                level:"Easy"
            },
            {
                id:4,
                level:"Easy"
            },
            {
                id:5,
                level:"Easy"
            },
            {
                id:6,
                level:"Easy"
            },
        ]
    },
    {
        id:2,
        level:"Medium",
        rounds:[
            {
                id:1,
                level:"Medium"
            },
            {
                id:2,
                level:"Medium"
            },
            {
                id:3,
                level:"Medium"
            },
            {
                id:4,
                level:"Medium"
            },
            {
                id:5,
                level:"Medium"
            },
            {
                id:6,
                level:"Medium"
            },
        ]
    },
    {
        id:3,
        level:"Hard",
        rounds:[
            {
                id:1,
                level:"Hard"
            },
            {
                id:2,
                level:"Hard"
            },
            {
                id:3,
                level:"Hard"
            },
            {
                id:4,
                level:"Hard"
            },
            {
                id:5,
                level:"Hard"
            },
            {
                id:6,
                level:"Hard"
            },
        ]
        
    }
]

    
  
 

const Challenge = () => {
    const [levels,setlevels]= useState(ChallengeLevels)
    const [selected,setSelected] = useState(null)
    const [selectedButton,setSelectedButton] = useState(null)

    const handleChange=(level)=>{
        setSelected(level)
        setSelectedButton(level)
    }

   

    const renderComponent = ()=>{

         if(selected ==="Easy" )
        {
            return <Easy level={selectedButton} data={levels}/>
        }
       
        else if(selected ==="Medium")
        {
            return <Medium level={selectedButton} data={levels}/>
        }
        else if(selected === "Hard")
        {
            return <Hard level={selectedButton} data={levels} />
        }
    }

    const getButtonVariant =(level)=>{
        if(level === "hard")
        {
            return "outline-danger"
        }
        else if(level === "medium")
        {
            return "outline-primary"
        }
        else if(level === "easy")
        {
            return "outline-warning"
        }
    }

   

      const getColumnClassName = (level, index) => {
        if (level === 'Easy' && index === 0) {
          return 'col-easy';
        } else if (level === 'Medium' && index === 1) {
          return 'col-medium';
        } else if (level === 'Hard' && index === 2) {
          return 'col-hard';
        }
        return '';
      };
      
  return (
    <div>
        
        {levels.map(level => {
            return(
                <>
                <Button className = {`${level.level.toLowerCase()} general`} key={level.id} onClick={handleChange.bind(this,level.level)}>
                {level.level}
                </Button>
                </>
                
            )          
        })}

                {
                    selected ? (renderComponent()) : ( 
                        
                        levels.map(level => {
                        return(
                            <>     
                           
                                <Row>
                                {levels.map((level, index) => (
                                    <Col className={getColumnClassName(level.level, index)} key={level.id}>
                                    {level.rounds.map((item) => (
                                        <Card className="challengesStyle" key={item.id}>
                                        <Card.Body>
                                            <Button className={`${level.level.toUpperCase()} ChallButton`}>
                                            {item.level}
                                            </Button>
                                        </Card.Body>
                                        </Card>
                                    ))}
                                    </Col>
                                ))}

                                
                                </Row> 

                                
                            
                            </>
                            
                        )          
                    })
                    )
                }
 
    </div>
  )
}

export default Challenge