import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


class Basketball extends React.Component {

  render() {
    return (
      <div className="App">


        <font color="white"><h1> NBA Teams and Stats</h1></font>
        {/*Hard coded basketball pages in cards */}
        <CardGroup>
          <Card bg="dark" text="white">
            <a href="https://www.nba.com/news"><Card.Img src="https://besthqwallpapers.com/img/original/22874/nba-national-basketball-association-usa-basketball-nba-logo.jpg" /></a>
            <Card.Body>
              <Card.Title>NBA News</Card.Title>
      2020/21
      <Card.Text>
                The National Basketball Association is a professional basketball league in North America. The league is composed of 30 teams and is one of the four major professional sports leagues in the United States and Canada.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <a href="https://www.nba.com/players"><Card.Img src="https://wallpapercave.com/wp/wp3721994.jpg" /></a>
            <Card.Body>
              <Card.Title>All NBA Players</Card.Title>
      2020
      <Card.Text>
                Complete listing of all NBA Players and team rosters. View player profile, bio, stats etc.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <a href="https://www.nbastore.eu/en/?CMP=FUS-QYHJ9CFB&portal=QYHJ9CFB"><Card.Img src="https://www.dexigner.com/images/article/24840/NYC_NBA_Flagship_Store_04_gallery.jpg" /></a>
            <Card.Body>
              <Card.Title>NBA Store</Card.Title>
              <Card.Text>
                Cop the latest NBA Gear, Jerseys, Apparel, Memorabilia, DVDs, Clothing and other NBA goods !!
      </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        {/*Second row of cards*/}
        <CardGroup>
          <Card bg="dark" text="white">
            <a href="https://www.nba.com/standings"><Card.Img src="https://e0.365dm.com/20/07/768x432/skysports-nba-kneel-blm-black-lives-matter_5054104.jpg?20200731064635" /></a>
            <Card.Body>
              <Card.Title>Standings</Card.Title>
      2020
      <Card.Text>
                The standings and stats of the current NBA season. Keep track of how your favorite teams and players are doing.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <a href="https://www.nba.com/lakers/"><Card.Img src="https://wallpapercave.com/wp/wp7672074.jpg" /></a>
            <Card.Body>
              <Card.Title>Los Angeles Lakers</Card.Title>
      2020
      <Card.Text>
                Head over to one of the Los Angeles Lakers official pages. Includes news, scores, schedules, statistics etc
      </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <a href="https://www.biography.com/athlete/kobe-bryant"><Card.Img src="https://i.pinimg.com/originals/1d/97/d4/1d97d4f3b8955eb9029cf93f5f262aa0.jpg" /></a>
            <Card.Body>
              <Card.Title>In Memory of Kobe</Card.Title>
      Lived: 23 Aug 1978 - 26 Jan 2020 (age 41)
      Height: 6'5"
      <Card.Text>
                Kobe Bean Bryant was an American former professional basketball player. He played his entire 20-year career with the Los Angeles Lakers of the National Basketball Association
      </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default Basketball;