import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Logo from './jordanLogo.png';

class GAA extends React.Component {

  render() {
    return (
      <div className="App">
        <font color="white"><h1>Gaelic Athletic Association</h1></font>
        {/*Hard coded gaa pages in cards */}
        <CardGroup>
  <Card bg="dark" text="white">
  <a href="https://www.skysports.com/gaa/hurling"><Card.Img src="http://kclrfanzone.com/wp-content/uploads/2015/08/paul-murphy-joe-canning.jpg"/></a>
    <Card.Body>
      <Card.Title>Hurling</Card.Title>
      
      <Card.Text>
        The Gaelic Athletic Association is an Irish international amateur sporting and cultural organisation.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.skysports.com/gaa/football"><Card.Img src="https://cdn.extra.ie/wp-content/uploads/2019/06/30080458/mayo3-1-1200x700.jpg" /></a>
    <Card.Body>
      <Card.Title>Football</Card.Title>
      <Card.Text>
      Gaelic football (Irish: Peil Ghaelach; short name Peil or Caid), commonly referred to as football or Gaelic, is an Irish team sport. It is played between two teams of 15 players on a rectangular grass pitch. </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.independent.ie/sport/gaelic-games/gaelic-football/"><Card.Img src="https://visitkilkenny.ie/wp-content/uploads/2018/07/Camogie-Action-1-e1569255237753.jpg" /></a>
    <Card.Body>
      <Card.Title>GAA News and Results</Card.Title>
      <Card.Text>
      Get all of the latest GAA news, scores, results and fixtures
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    
      </div>
    );
  }
}

export default GAA;