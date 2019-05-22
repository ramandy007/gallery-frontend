import React from 'react';
import JwPagination from 'jw-react-pagination';
import "bootstrap/dist/css/bootstrap.css"

class Pagination extends React.Component {
    constructor() {
        super();


        // an example array of items to be paged
        
        // bind the onChangePage method to this React component
        this.onChangePage = this.onChangePage.bind(this);
        this.setState=this.setState.bind(this);

        // store example items and current page of items in local state
        this.state = {
            exampleItems,
            pageOfItems: [],
            info:""
        };
        this.setState=this.setState.bind(this);

       

        

    }
   
  
   
    componentWillMount(){
         fetch("http://localhost:3021/query?fromTime=01:44:38&toTime=01:44:40&date=2020-06-18&age=1&color=Green")
      
        .then(response => response.json())
        .then(cata =>{this.setState({info:cata,exampleItems:cata});})  
       
    }

    onChangePage(pageOfItems) {
        // update local state with new page of itemsinfo
        this.setState({ pageOfItems });
        console.log(this.state.info);
       

    }

    render() {
        return (
            
            <div>
                {/* {this.exampleItems=this.state.info} */}
                {console.log(this.state.exampleItems,this.state.pageOfItems,this.state.info)}
                <h1>React - Pagination Example with logic like Google</h1>
                {this.state.pageOfItems.map(item =>
                    <div><img src={item.IMAGENAME1} alt="image"></img></div>

)}
                   
                <JwPagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
            </div>
        );
    }
}

export default Pagination;