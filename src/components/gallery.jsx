import React,{Component} from 'react';

import './gallery.css'



class GalleryModal extends Component{
    render(){
        if(this.props.isOpen === false)
        return null;

        return(
            <div isOpen={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
              <div className='modal-body'>
          <a className='modal-close' href='#' onClick={this.props.onClick}><span className='far fa-window-close'></span></a>
          
          <img src={this.props.src.IMAGENAME1} />
        </div>  
            </div>
        )
    }
}

class GalleryImage extends React.Component {
    render() {
      return(
        <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
      )
    }
  }


class Gallery extends Component{
    constructor(){
        super();
        this.state={url:"",
        showModal:false,    
        }
        this.openModal= this.openModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
    }
    openModal(url,e){
        this.setState({
            showModal:true,
            url:url,
        })
    };
    closeModal(){
        this.setState({showModal:false,url:"",})
    };

    render(){
         
        const url1 = this.props.url;
        console.log('url received',url1);
        console.log(this.state);
        
       
       
        
        return(
            <div className="gallery-container container-fluid gallery-space">
               <div className="row">
               { 
         
                this.props.url.map((url,key)=>{
                    return(<div className="gallery-card col-sm-6 col-md-3 col-xl-2" > 
                    <GalleryImage className="gallery-thumbnail img-fluid img-thumbnail" src={url.IMAGENAME1} alt={'Image number '+(key+1)} />
                    <span className='card-icon-open fas fa-expand-arrows-alt' value={url} onClick={(e)=>{this.openModal(url,e)}}></span>
                    {/* <div>
                        <img src ={item.IMAGENAME1} className="image-img" alt="url" /> 
                        <p className="image-text">{key}</p>
                        </div> */}
              
              </div>
                  )
                                      }
                          )
      }
               </div>
                
              
                
               <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
            </div>
        );
    }
}


export default Gallery;