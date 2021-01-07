import React from 'react';
import ShowScandal from './showitem';

class scandals extends React.Component{

    render(){
        return this.props.myScandals.map((scandal)=>{
            return <ShowScandal key={scandal._id} scandal={scandal}></ShowScandal>
        });
    }
}
export default scandals;