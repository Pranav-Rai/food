import React from 'react' 
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/listGroup'
import ListGroupItem from 'react-bootstrap/listGroup'


const Foodgallery = ({items})=>{
    return(
     <>
        {
            items.map((elem)=>{
                const {id , food , status} = elem
                return(
                <>          
                        <div className="d-flex ">
                        
                            <Card className="card text-white bg-info mb-3 " key ={id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap"/>
                                <Card.Body>
                                    <Card.Title>{food}</Card.Title>
                                    <Card.Text>
                                    {status}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                                </Card>
                               
                                </div>
                </>


                )
            })
        }


     
     
     </>

    )
}

export default Foodgallery