import React ,{Component}from 'react';
import axios from 'axios';

import {Col,Form,Button,Container} from 'react-bootstrap';

import './form.css';
import Gallery from './gallery_pagination'

//  navbar-expand-lg navbar-light bg-light static-top mb-5 shadow
class PageForm extends Component{
    constructor(props){
        super(props);
        this.state={
            fromTime:null,
            toTime:null,
            date:null,
            age:null,
            color:null,
            url:null,
            show:false,
            error:null

        }

    
    }
   
    callQuery(){
        try{    
                axios.get("http://localhost:3021/query",{params:{fromTime:this.state.fromTime,toTime:this.state.toTime,date:this.state.date,age:this.state.age,color:this.state.color}})
                .then(res=>{const url = res.data;this.setState({url:url});
                if (res.status ===500){this.setState({loading:res.message})}
                else{
                    const error=new Error(res.error);
                    throw error;
                } })
             }

        catch(e){ console.log(e);}

       

        
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
                            <option disabled={false} selected="unknown" >unknown</option>
                            <option>Blue</option>
                            <option>Green</option>
                            <option>Red</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Yellow</option>
                            <option>pink</option>
                            <option>Purple</option>
                            <option>Grey</option>
                            <option>Magenta</option>
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

                        {/* <div>
                        <Form>
                            {['radio'].map(type => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="Male" type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Female" type={type} id={`inline-${type}-2`} />
                                <Form.Check inline label="Unknown" type={type}  id={`inline-${type}-3`} />
                                </div>
                            ))}
                        </Form>;                            


                        </div> */}



                       
                      <Form.Group>
                      <Form.Label>      </Form.Label>
                       <Col  className="col-auto btn-space"><Button  variant="outline-success"
                         onClick={()=>{this.callQuery();this.setState({show:!this.state.show})}}>Submit</Button>
                       </Col>
                       </Form.Group>

       

                </Form.Row>

                </Form>
                 {(this.state.show && this.state.url!==null)?
                 <Container>
                    <Gallery url={this.state.url} ></Gallery>                                
                
                </Container>  : <Container>
                    <h4 className="not-found" >Images not found!!</h4>
                    
                </Container>
                
                 }
                </div>

                
               
                
        );
        
    }
}

export default PageForm;
