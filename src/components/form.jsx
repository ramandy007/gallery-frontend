import React ,{Component}from 'react';
import axios from 'axios';

import {Col,Form,Button,Container} from 'react-bootstrap';

import './form.css';
import Gallery from './gallery'

//  navbar-expand-lg navbar-light bg-light static-top mb-5 shadow
class PageForm extends Component{
    constructor(props){
        super(props);
        this.state={
            fromTime:"",
            toTime:null,
            date:null,
            age:null,
            color:null,
            url:[""],
            show:false,

        }

    
    }
   
    callQuery(){
        axios.get("http://localhost:3001/query").then(res=>{const url = res.data;this.setState({url:url}); })

        
    }
    
    render(){
        return(
          
            
            <div >
            <Form className="form-space" onSubmit={(event)=>{event.preventDefault();}} >
                <Form.Row>
                    <Form.Group>
                   
                    <Col className="col-auto col-space" >
                    <Form.Label>From Time</Form.Label>  
                    <Form.Control placeholder="From Time" value={this.state.fromTime} type="time" step='1'
                    onInput={(event)=>{this.setState({fromTime:event.target.value});
                    console.log("event",event.target.value);}}
                    />
                    </Col>
                    </Form.Group>
                    <Form.Group>
                    <Col  className="col-auto col-space">
                    <Form.Label>To Time</Form.Label>                      
                    <Form.Control placeholder="To Time" type="time" step='1' value={this.state.toTime}
                     onInput={(event)=>{this.setState({toTime:event.target.value});
                     console.log("event",event.target.value);}}
                    />
                    </Col>
                    </Form.Group>

                    <Form.Group>
                    <Col className="col-auto col-space" >
                    <Form.Label>Date</Form.Label>                      
                    <Form.Control placeholder="Date" type="date" value={this.state.date}
                     onInput={(event)=>{this.setState({date:event.target.value});
                     console.log("event",event.target.value);}}
                    />
                    </Col>
                    </Form.Group>

                    <Form.Group>
                    <Col className="col-auto col-space" >
                    <Form.Label>Age</Form.Label>  
                    <Form.Control placeholder="Age" type="number" value={this.state.age} 
                     onInput={(event)=>{this.setState({age:event.target.value});
                     console.log("event",event.target.value);}}
                    />
                    </Col>
                    </Form.Group>

                    <Form.Group >
                        <div className="col-auto col-space" >
                        <Form.Label>Colors</Form.Label>
                        <Form.Control as="select" value={this.state.color} 
                         onInput={(event)=>{this.setState({color:event.target.value});
                         console.log("event",event.target.value);}}
                        >
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
                    <Col className="col-auto col-space"  >
                    <Form.Label>Color</Form.Label>                                 
                    <Form.Control placeholder="Color" type="color" value={this.state.color}
                     onInput={(event)=>{this.setState({color:event.target.value});
                     console.log("event",event.target.value);}}
                    />
                    </Col>
                    </Form.Group>

                    <Form.Group >
                        <Col className="col-auto col-space"  >
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" value={this.state.gender}
                         onInput={(event)=>{this.setState({gender:event.target.value});
                         console.log("event",event.target.value);}}
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Unknown</option>
                            
                        </Form.Control>
                        </Col>
                        </Form.Group>  

                       
                      <Form.Group>
                      <Form.Label>      </Form.Label>
                       <Col  className="col-auto btn-space"><Button  variant="outline-success"
                         onClick={()=>{this.callQuery();this.setState({show:!this.state.show})}}>Submit</Button>
                       </Col>
                       </Form.Group>

       

                </Form.Row>

                </Form>
                 {this.state.show?<Container>
                    <Gallery url={this.state.url} ></Gallery>
                
                </Container>  :null 
                 }
                </div>

                
               
                
        );
        
    }
}

export default PageForm;