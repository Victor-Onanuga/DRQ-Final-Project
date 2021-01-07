import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Logo from './jordanLogo.png';

class Football extends React.Component {

  render() {
    return (
      <div className="App">
        <font color="white"><h1>Football Leagues</h1></font>
        {/*Hard coded football pages in cards */}
        <CardGroup>
          <Card bg="dark" text="white">
            <a href="https://www.premierleague.com/"><Card.Img src="http://www.footballgate.com/wp-content/uploads/2016/09/premier-league-wallpaper-790x444.jpg" /></a>
            <Card.Body>
              <Card.Title>The Premier League</Card.Title>
      2020/21
      <Card.Text>
                The Premier League, often referred to outside England as the English Premier League or the EPL, is the top level of the English football league system. Contested by 20 clubs.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <a href="https://www.premierleague.com/tables"><Card.Img src="http://wallpapercave.com/wp/wp1830678.jpg" /></a>
            <Card.Body>
              <Card.Title>Premier League Table</Card.Title>
      2020/21
      <Card.Text>
                Keep up to date and view the latest Premier League tables, form guides and season archives, on the official website of the Premier League.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <a href="https://www.thesportster.com/soccer/top-20-greatest-players-in-premier-league-history/"><Card.Img src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABcGmBvd9w6SWxu_8z0JEH7fnvHWxAfJ8PcjAxG_JJLFz6i0Sz4HbigpjQcgf12Xg_Luzi64TUZ69EPoj_n56VnT2351aLnd6-Nsg5vmNpqVRXnyWmxu80Tqjx1oryIz_Zpp-aOtc9UA.jpg" /></a>
            <Card.Body>
              <Card.Title>Top 20 Greatest Players in Premier League History</Card.Title>
      1990s-2020
      <Card.Text>
                The league has become by far the most popular in the world,there are a plethora of world class players who have graced the league.
      </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        {/*Second row of cards */}
        <CardGroup>
          <Card bg="dark" text="white">
            <a href="https://www.laliga.com/en-GB"><Card.Img src="https://wallpapercave.com/wp/wp1894703.jpg" /></a>
            <Card.Body>
              <Card.Title>La Liga</Card.Title>
      2020/21
      <Card.Text>

                The Campeonato Nacional de Liga de Primera División, commonly known as La Liga, is the men's top professional football division of the Spanish football league system.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <a href="https://www.laliga.com/en-GB/laliga-santander/classification"><Card.Img src="https://footballwallpapermadridista.files.wordpress.com/2012/07/liga-bbva.jpg" /></a>
            <Card.Body>
              <Card.Title>La Liga Standings</Card.Title>
      2020/21
      <Card.Text>
                Complete table of La Liga standings for the 2020/2021 Season.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <a href="https://news.williamhill.com/football/greatest-la-liga-players-of-all-time/"><Card.Img src="https://www.hdwallpapers.in/download/cristiano_ronaldo_4k_2017-wide.jpg" /></a>
            <Card.Body>
              <Card.Title>La Liga Legends</Card.Title>
      1990s-2020
      <Card.Text>
                The greatest La Liga players of all time
      </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>


      </div>
    );
  }
}

export default Football;