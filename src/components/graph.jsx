import React,{Component} from 'react';
import ReactChartkick, { BarChart } from 'react-chartkick'
import Chart from 'chart.js'
import "bootstrap/dist/css/bootstrap.css"
import "./form.css"


ReactChartkick.addAdapter(Chart);

class Graph extends Component{
    render(){

        let data = this.props.data;
         let stats={
              BLUE:0,
              GREEN:0,
              YELLOW:0,
              RED:0,
              PURPLE:0,
              BLACK:0,
              PINK:0,
              GREY:0,
              MAGENTA:0,                     
             }

            for (let x of data)
                for(let y in x)
                {
                    if (y in stats && x[y] >0)
                    stats[y]+=1
                }
            
        return(
<container className="form-space">
<div><BarChart data={stats} width="780px" height="180px"  /></div>
</container>



        );
    }
}

export default Graph;