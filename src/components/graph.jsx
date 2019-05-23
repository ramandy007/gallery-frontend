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
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],                  
             }

            for (let x of data)
                for(let y in x)
                {
                    if (y in stats && x[y] >0)
                    stats[y]+=1
                }
            
        return(
<container className="form-space">
<div><BarChart data={stats} width="780px" height="180px" cmap="origin" /></div>
</container>



        );
    }
}

export default Graph;