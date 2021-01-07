import React from 'react'
import scandals from './shows';
import axios from 'axios';


class Read extends React.Component{

    state = {
        scandals: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/shows')
        .then((response)=>{
            this.setState({scandals: response.data.scandals})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <font color="white"><h1>What's hot</h1></font>
                <scandals myScandals={this.state.scandals}></scandals>
            </div>
        );
    }
}
export default Read;