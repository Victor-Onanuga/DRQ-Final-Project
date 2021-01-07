import React from 'react';
import '../App.css';
import Logo from './jordanLogo.png';


class Home extends React.Component {

  render() {
    return (
      <div className="App">
       <font color="gold"><h1>Sports Central</h1></font> 
        <img src={Logo} height="200" width="200" alt="logo"/>
        <font color="black"><h3>Welcome to Sports Central, where you can find all the latest Sports information</h3></font>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <font color="gold"><h3 align="left">Looking for more info try these links below:</h3></font> 
        <a href="https://www.skysports.com/football"><h4 align="left">Sky Sports</h4></a>
        <br></br>
        <a href="https://www.espn.com/nba/"><h4 align="left">ESPN NBA</h4></a>
        <br></br>
        <a href="https://www.bbc.com/sport"><h4 align="left">BBC Sports</h4></a>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        
        {/*Social media section */}
        <font color="gold"><h4 align="left">Find Sports Central on social media:</h4> </font>
       
        <h5 align="left"> <img align="left" src="http://i.imgur.com/XCELznQ.png" height="30" width="30"></img><a href="https://twitter.com">Twitter</a></h5>
        <h5 align="left"><img align="left" src="https://pngmind.com/wp-content/uploads/2019/08/Facebook-Logo-Png-Transparent-Background.jpg" height="30" width="30"></img><a href="https://facebook.com">Facebook</a></h5>
        <h5 align="left"><img align="left" src="https://vectorified.com/images/instagram-icon-for-business-card-25.jpg" height="30" width="30"></img><a href="https://instagram.com">Instagram</a></h5>

        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Home;