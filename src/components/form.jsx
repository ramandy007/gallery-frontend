import React ,{Component}from 'react';
import axios from 'axios';

import {Col,Form,Button,Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import './form.css';
import "./graph.css";
import VPlayer from "./player";

import Gallery from './gallery_pagination'
import Graph from './graph'
import BarGraph from './graph1';

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
            error:null,
            gender:"Male",
            view:"",


        }
        this.handleOptionChange=this.handleOptionChange.bind(this);
      //  let url="";
    
    }
   
    callQuery(){
        try{    
                axios.get("http://localhost:3021/query",{params:{fromTime:this.state.fromTime,toTime:this.state.toTime,date:this.state.date,age:this.state.age,color:this.state.color}})
                .then(res=>{this.url = res.data;console.log(this.url);this.setState({url:this.url});
                if (res.status ===500){this.setState({loading:res.message})}
                else{
                    const error=new Error(res.error);
                    throw error;
                } })
             }

        catch(e){ console.log(e);}

       

        
    }

    handleOptionChange= event=>{
        this.setState({
            gender:event.target.value
        });
        console.log(event.target.value)
        console.log(this.url)
    }
    
    render(){
        return(
          
            
            <div >
            <Form className="form-space" onSubmit={(event)=>{event.preventDefault();}} >
                <Form.Row>



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

                    <Form.Group className="width-reduce">
                    <Col className="col-auto col-space " >
                    <Form.Label>Age</Form.Label>  
                    <Form.Control placeholder="Age" id="Adjust-width" type="number" min="0" value={this.state.age} 
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
                            <option>All</option>
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

                    {/* <Form.Group>
                    <Col className="col-auto col-space"  >
                    <Form.Label>Color</Form.Label>                                 
                    <Form.Control placeholder="Color" type="color" value={this.state.color}
                     onInput={(event)=>{this.setState({color:event.target.value});
                     console.log("event",event.target.value);}}
                    />
                    </Col>
                    </Form.Group> */}
 
                    {/* <Form.Group >
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
                        </Form.Group>    */}

                    <Form.Group>
                            <Col className="col-auto col-space"  >  
                            <Form.Label>Gender</Form.Label>
                            <Form.Check 
                            type="radio"
                            id="Male"
                            label="Male"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleOptionChange}
                            />
                            <Form.Check
                            type="radio"
                            id="Female"
                            label="Female"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleOptionChange}

                            />
                            <Form.Check 
                            type="radio"
                            id="Unknown"
                            label="Both"
                            value="Unknown"
                            checked={this.state.gender === "Unknown"}
                            onChange={this.handleOptionChange}

                            />
                        
                        </Col>
                    </Form.Group>


                    <Form.Group >
                        <div className="col-auto col-space" >
                        <Form.Label>View Distance</Form.Label>
                        <Form.Control as="select" value={this.state.view} 
                         onInput={(event)=>{this.setState({view:event.target.value});
                         console.log("event",event.target.value);}}
                        >   
                            <option selected="Far" >Far</option>
                            <option>Medium</option>
                            <option>Near</option>
                            
                        </Form.Control>
                        </div>
                        </Form.Group>   


                    




                       
                      <Form.Group>
                      <Form.Label>      </Form.Label>
                       <Col  className="col-auto btn-space"><Button  variant="outline-success"
                         onClick={()=>{this.callQuery();this.setState({show:!this.state.show})}}>Submit</Button>
                       </Col>
                       </Form.Group>

       

                </Form.Row>

                </Form>


                 {(this.state.show && this.state.url!==null)?
                 <div className="disp-flex">
                    <Gallery url={this.state.url} className="disp-flex" ></Gallery> 
                    {console.log(this.url)}
                  {/* < Graph data={this.url} /> 
                                           */}

            <div className="disp-flex form-space " >
                <div>
            <BarGraph data={this.url} />  

            <VPlayer className="chart-container"/>

           
            </div>
            
            </div> 
            
           
               
                </div>   : 
                <Container>
                    
                    
                </Container>

               
                
                 }
                 
                </div>

                
               
                
        );
        
    }
}

export default PageForm;
