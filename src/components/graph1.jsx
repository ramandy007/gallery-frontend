import React, { Component } from 'react'
import Chart from "chart.js";
// import classes from "./LineGraph.module.css";

// chart.canvas.parentNode.style.height = '128px';
// chart.canvas.parentNode.style.width = '128px';
//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//
export default class BarGraph extends Component {
    chartRef = React.createRef();
    constructor(){
        super();
      
        let stats,data;



    }
       
    
   
    render() {
     
        this.data = this.props.data;
          this.stats={
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

            for (let x of this.data)
                for(let y in x)
                {
                    if (y in this.stats && x[y] >0)
                    this.stats[y]+=1
                }

        return (
            <div >
                <canvas  
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: 'horizontalBar',
            data: {
                labels: Object.keys(this.stats),
                datasets: [{
                    label: '# of count',
                    data: Object.values(this.stats),
                    // backgroundColor: [
                    //     'rgba(255, 99, 132, 0.2)',
                    //     'rgba(54, 162, 235, 0.2)',
                    //     'rgba(255, 206, 86, 0.2)',
                    //     'rgba(75, 192, 192, 0.2)',
                    //     'rgba(153, 102, 255, 0.2)',
                    //     'rgba(255, 159, 64, 0.2)'
                    // ],
                    // backgroundColor: [
                    //     'blue',
                    //     'green',
                    //     'yellow',
                    //     'red',
                    //     'purple',
                    //     'black',
                    //     'pink',
                    //     'grey',
                    //     'magenta'
                    // ],
                    backgroundColor: Object.keys(this.stats),
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive:true,
                layout:{height:128,width:128},
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
