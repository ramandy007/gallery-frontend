import React,{Component} from 'react';
import {Player,PlaybackRateMenuButton,ControlBar} from 'video-react';
// import ropTypes from 'prop-types';

import "../../node_modules/video-react/dist/video-react.css"
// import "../node_modules/video-react/dist/video-react.css"; // import css

// import './App.css';

class VPlayer extends Component {
  componentDidMount(){
    this.player.playbackRate =1;
    this.forceUpdate();
   
  }
  

  
  render(){
    return (
      <div className="player">
          <Player 
          ref={c=>{
            this.player = c;
          }}
           playsInLine
            poster="/assets/poster.png" >
               < source
           src="MOT17-02.mp4" type="video/mp4" /> 

        <ControlBar>
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5,0.05, 0.1]} />
        </ControlBar>

            </Player>
         
      </div>
    );
  }
  
}

export default VPlayer;
