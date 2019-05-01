import React ,{Component}from 'react';

import {Bootstrap,Row,Col,Form,Button,FormControl,Container} from 'react-bootstrap';

import './form.css';


class PageForm extends Component{
    render(){
        return(
    
                




         

            <div className=" float-md-left">
            <Form className="form-space">
                <Form.Row>
                    <Form.Group>
                   
                    <Col className="col-auto col-space" >
                    <Form.Label>From Time</Form.Label>  
                    <Form.Control placeholder="From Time" type="time" step='1'/>
                    </Col>
                    </Form.Group>
                    <Form.Group>
                    <Col  className="col-auto col-space">
                    <Form.Label>To Time</Form.Label>                      
                    <Form.Control placeholder="To Time" type="time" step='1' />
                    </Col>
                    </Form.Group>

                    <Form.Group>
                    <Col className="col-auto col-space" >
                    <Form.Label>Date</Form.Label>                      
                    <Form.Control placeholder="Date" type="date"/>
                    </Col>
                    </Form.Group>

                    <Form.Group>
                    <Col className="col-auto col-space" >
                    <Form.Label>Age</Form.Label>  
                    <Form.Control placeholder="Age" type="number" />
                    </Col>
                    </Form.Group>

                    <Form.Group >
                        <div className="col-auto col-space" >
                        <Form.Label>Colors</Form.Label>
                        <Form.Control as="select">
                            <option>Blue</option>
                            <option>Green</option>
                            <option>Red</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Yellow</option>
                            <option>pink</option>
                        </Form.Control>
                        </div>
                        </Form.Group>   

                    <Form.Group>
                    <Col className="col-auto col-space" >
                    <Form.Label>Color</Form.Label>                                 
                    <Form.Control placeholder="Color" type="color"/>
                    </Col>
                    </Form.Group>

                    <Form.Group >
                        <div className="col-auto col-space" >
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Unknown</option>
                            
                        </Form.Control>
                        </div>
                        </Form.Group>   

                </Form.Row>
                </Form>
                </div>
                
        );
    }
}

export default PageForm;