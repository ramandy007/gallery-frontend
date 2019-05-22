import React,{Component} from 'react';
import {Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import './gallery.css';
import JwPagination from 'jw-react-pagination';




class GalleryModal extends Component{
    render(){
        if(this.props.isOpen === false)
        return null;

        return(
            <div isOpen={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} onBackdropClick={(e)=>{e.preventDefault()} } data-backdrop="static" name={this.props.name}>
              <div className='modal-body'>
           
          {/* <a className='modal-close'  href="#" onClick={this.props.onClick}><span className='far fa-window-close'></span></a> */}
         <button className='far fa-window-close modal-close'  onClick={this.props.onClick}></button>
         

          <div className="img-space img-fluid img-thumbnail" onClick={(e)=>{e.preventDefault()}}>
            <div className="row">
                <div className="col-auto">
                <img className="img_padding" src={this.props.src.IMAGENAME1} alt="image1" />
                <img className="img_padding"src={this.props.src.IMAGENAME2}  alt="image2"/>
                <img className="img_padding"src={this.props.src.IMAGENAME3} alt="image3"/>
            </div>
                <div className="col-sm-6 col-md-3 col-xl-2">
                    <div>
                        <Table striped   hover  id="table">
                            <thead>
                                <tr>
                                    <th>FromTime</th>
                                    <th>ToTime  </th>
                                    <th>ViewDistance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{this.props.src.STARTTIME}</td>
                                <td>{this.props.src.ENDTIME}</td>
                                <td>{this.props.src.VIEWDISTANCE}</td>
                                </tr>
                            </tbody>
                        </Table>
                        
                    
                    </div> 
                    </div>
              
          
         
          </div>
         
          
          </div>
         
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
        this.state={
        url:"",
        showModal:false,   
        exampleItems:"",
        pageOfItems: [],
        info:"", 
        }
        this.openModal= this.openModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.setState=this.setState.bind(this);
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

    onChangePage(pageOfItems) {
        // update local state with new page of itemsinfo
        this.setState({ pageOfItems });
        console.log(this.state.exampleItems);
       

    }

    render(){
         
        const url1 = this.props.url;
        console.log('url received',url1);
        console.log(this.state);        
        return(
            <div className="gallery-container container-fluid gallery-space">
               <div className="row">
               { 
         
             this.state.pageOfItems.map((url,key)=>{
                    return(
                    <div className="gallery-card col-sm-6 col-md-3 col-xl-2" > 
                    <GalleryImage className="gallery-thumbnail img-fluid img-thumbnail" src={url.IMAGENAME1} alt={'Image number '+(key+1)} />
                    <span className='card-icon-open fas fa-expand-arrows-alt' value={url} onClick={(e)=>{this.openModal(url,e);}}></span>
                </div>
                  )
                                                }
                                  )
                }
               </div>
                
              
                
               <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
               <JwPagination pageSize="15" maxPages="10" items={this.props.url} onChangePage={this.onChangePage} className="Pagination"  />
            </div>
        );
    }
}


export default Gallery;