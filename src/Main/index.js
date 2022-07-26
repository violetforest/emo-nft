import React from 'react';
import randomUsername from '../username';
import randomLyrics from '../lyrics';
import randomColor from '../colors';
import randomVideo from '../video';

class Main extends React.Component {
    render() {
      return (
        <main>
          <section className="user-network" style={{backgroundColor: randomColor.color}}>
            <header>
              <h2>{randomUsername} is in your extended network</h2>
            </header>
          </section>
  
          <section className="blurbs" style={{backgroundColor: randomColor.color}}>
            <header className="main-section-header">
              <h2 className="main-section-h2">Tom's Blurbs</h2>
            </header>
  
            <h3><strike>About me</strike></h3>
            <p>
              <em>{randomLyrics} <br /> &hearts;</em>
            </p>
            <iframe width="410" height="230" src={randomVideo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
            <br />
            <h3><strike>Who I'd like to meet:</strike></h3>
            <em>everyone and Noel Fielding</em>
          </section>
  
          <section className="friends" style={{backgroundColor: randomColor.color}}>
            <header className="main-section-header">
              <h2 className="main-section-h2">{randomUsername}'s Friend Space</h2>
            </header>
  
            <p><b>{randomUsername} has <span className="focus-highlight">98</span> Friends.</b></p>
  
            <div className="friend-pic-container">
              <figure>
                <figcaption><a href="#">Mia</a></figcaption>
                <img src="http://placekitten.com/100/100"></img>
              </figure>
  
              <figure>
                <figcaption><a href="#">Kat</a></figcaption>
                <img src="http://placekitten.com/90/120"></img>
              </figure>
  
              <figure>
                <figcaption><a href="#">Mat</a></figcaption>
                <img src="http://placekitten.com/120/80"></img>
              </figure>
  
              <figure>
                <figcaption><a href="#">Tommm</a></figcaption>
                <img src="http://placekitten.com/80/110"></img>
              </figure>
  
              <figure>
                <figcaption><a href="#">Tim</a></figcaption>
                <img src="http://placekitten.com/100/170"></img>
              </figure>
  
              <figure>
                <figcaption><a href="#">James</a></figcaption>
                <img src="http://placekitten.com/80/100"></img>
              </figure>
  
              <figure>
                <figcaption><a href="#">Jamiii &hearts;</a></figcaption>
                <img src="http://placekitten.com/105/100"></img>
              </figure>
  
              <figure>
                <figcaption><a href="#">Aaron</a></figcaption>
                <img src="http://placekitten.com/100/108"></img>
              </figure>
            </div>
  
            <p className="friends-list-link"><a href="#">View All of {randomUsername}'s Friends</a></p>
          </section>
  
          <section className="comment-wall" style={{backgroundColor: randomColor.color}}>
            <header className="main-section-header">
              <h2 className="main-section-h2">Tom's Friends Comments</h2>
            </header>
  
            <p id="comment-counter"><b>Displaying <span className="focus-highlight">5</span> of <span className="focus-highlight">220</span> comments (<a href="#">View/Edit All Comments</a>)</b></p>
  
            <table>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Todd</a></figcaption>
                    <img src="http://placekitten.com/100/90"></img>
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 6:54 PM</h3>
                  <p>pc4pc?</p>
                </td>
              </tr>
  
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Laura</a></figcaption>
                    <img src="http://placekitten.com/100/150"></img>
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 6:51 PM</h3>
                  <p>thanx 4 the add!!!</p>
                </td>
              </tr>
  
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">ASH</a></figcaption>
                    <img src="http://placekitten.com/50/50"></img>
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 5:30 PM</h3>
                  <p>hiiiii :)</p>
                </td>
              </tr>
  
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Sammy</a></figcaption>
                    <img src="http://placekitten.com/120/120"></img>
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:37 PM</h3>
                  <p>omg I luv that song</p>
                </td>
              </tr>
  
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Danny</a></figcaption>
                    <img src="http://placekitten.com/90/100"></img>
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:13 PM</h3>
                  <p>Hey add me I accept everyone</p>
                </td>
              </tr>
  
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">The Truckstop Fighters</a></figcaption>
                    <img src="http://placekitten.com/100/300"></img>
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:08 PM</h3>
                  <p>Hey! cool music taste! check out our band! Our new song is on our page! FFO Green day, Blink 182, NOFX etc.</p>
                </td>
              </tr>
  
            </table>
  
            <p id="add-comment"><a href="#">Add Comment</a></p>
  
          </section>
        </main>
      )
    }
  }

export default Main;