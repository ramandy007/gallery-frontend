import React,{Component} from 'react';

import './gallery.css'


class Gallery extends Component{
    constructor(){
        super();
        this.state={path:""}
    }
    
    render(){
         
        const url = this.props.url;
        console.log('url received',url);
        console.log(this.state);
        
       
       
        
        return(
            <div className="gallery">
               
                
               { 
         
                   this.props.url.map((item,key)=>{
                       return(<div className="image" > 
                       <div>
                            <img src ={item.IMAGENAME1} className="image-img" alt="url" /> 
                            <p className="image-text">{key}</p>
                            </div>
                        
                        </div>
                            )
                                                }
                                    )
                }
                
               
            </div>
        );
    }
}

export default Gallery;