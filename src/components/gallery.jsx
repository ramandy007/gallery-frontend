import React,{Component} from 'react';

import '../App.css'


class Gallery extends Component{
    render(){
        // console.log('gallery props',this.props);
        const url = this.props.url;
        
        return(
            <div>
                {url === null  ? null : console.log(url[0].IMAGENAME1)
                }
            </div>
        );
    }
}

export default Gallery;