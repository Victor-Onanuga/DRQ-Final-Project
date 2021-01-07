import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ShowScandal extends React.Component{

  constructor(){
    super();
    this.DeleteScandal = this.DeleteScandal.bind(this);
  }
  //function for deleting scandal
  DeleteScandal(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/shows/"+this.props.scandal._id)
    .then()
    .catch();

  }

    render(){
        return(
            <div className="appDiv">
               

{/*Card for displaying the database*/ }
  <Card bg="dark" text="white" border="primary" >
  <Card.Img align="center" varient="top" src={this.props.scandal.Photos}></Card.Img>
  <Card.Header>{this.props.scandal.scandalName}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <footer>
      {this.props.scandal.Date}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeleteScandal}>Delete</Button>
<Link to={"/edit/" + this.props.scandal._id} className="btn btn-primary">Edit</Link>
</Card>
            </div>
        )
    }
}
export default ShowScandal;