import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class addSportScandal extends React.Component {
  constructor(props){
    super(props);

    this.state = {scandalName:'',
                  Date:'',
                Photos:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScandalNameChange = this.handleScandalNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePhotos = this.handlePhotos.bind(this);
    
  }
  //functions for adding to database
  handleScandalNameChange(e){
    this.setState({scandalName: e.target.value});
  }

  handleDateChange(e){
    this.setState({Date: e.target.value});
  }

  handlePhotos(e){
    this.setState({Photos: e.target.value});
  }


  handleSubmit(e){
    alert(this.state.scandalName+ "      " + this.state.Date 
    +"       "+ this.state.Photos);
    e.preventDefault();
    
                const newScandal = {
                  scandalName: this.state.scandalName,
                  Date: this.state.Date,
                  Photos: this.state.Photos
                };
          axios.post('http://localhost:4000/api/shows',newScandal) 
          .then()
          .catch();
          

          this.setState({scandalName:'',
                Date:'',
                Photos:''});    
  }

  render() {
    return (
      <div>
        <font color="gold"><label><h1>Know any interesting Sport Scandals ?? Go ahead and add them to the page </h1></label></font> 
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
        <font color="black"><label><h4>Scandal Name :</h4></label></font>
          <input
          type='text'
          className='form-control'
          value={this.state.scandalName}
          onChange={this.handleScandalNameChange}
          ></input>
        </div>
        <div className='form-group'>
        <font color="black"><label><h4>Date of Scandal :</h4></label></font>
          <input
          type='text'
          className='form-control'
          value={this.state.Date}
          onChange={this.handleDateChange}
          ></input>
        </div>
        <div className='form-group'>
        <font color="black"><label><h4>Show Photos Url</h4></label></font>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Photos}
          onChange={this.handlePhotos}
          ></textarea>
        </div>
        
        <div>
          <input
          type="submit"
          value="Add Scandal">
          </input>
        </div>
        </form>
       
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      
    );
  }
}

export default addSportScandal;