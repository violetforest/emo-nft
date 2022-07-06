import React from 'react';
import randomUsername from './../username';
import randomBands from './../bands';
import randomColor from './../colors';

class Sidebar extends React.Component {
    render() {
      return (
        <aside className="profile-sidebar">
  
          <header style={{backgroundColor: randomColor.color}}>
            <h1><strike>{randomUsername}</strike></h1>
          </header>
  
          <div className="profile-picture-container" style={{backgroundColor: randomColor.color}}>
            <img className="profile-pic" src="http://placekitten.com/170/150" alt="A profile picture of Tom, the creator of MySpace."></img>
  
            <p className="personal-msg"><b>"Just me &hearts; &hearts; &hearts;"</b></p>
  
            <ul className="gender-age">
              <li>Female</li>
              <li>15 years old</li>
              <li>United Kingdom</li>
            </ul>
  
            <ul className="last-login">
              <li>Last Login:</li>
              <li>4/22/2006</li>
            </ul>
  
            <p className="pics-videos">View My: <a href="#"><b>Pics</b></a> | <a href="#"><b>Videos</b></a></p>
          </div>
  
          <section className="contact-box" style={{borderColor: randomColor.color, backgroundImage: "url('./bg/" + randomColor.bg2 + "')" }}>
            <h2>Contacting Tom</h2>
  
            <figure className="contact-images" style={{color: randomColor.color}}>
              <p>Message me</p>
              <p>Forward</p>
              <p>Add Friend</p>
              <p>Favourite</p>
              <p>Instant Message</p>
              <p>Block</p>
              <p>Add to Group</p>
              <p>Rank User</p>
            </figure>
          </section>
  
          <section className="myspace-url-box" style={{backgroundColor: randomColor.color}}>
            <h3><b>MySpace URL:</b></h3>
            <p>http://www.myspace.com/{randomUsername}</p>
          </section>
  
          <section className="interests" style={{backgroundColor: randomColor.color}}>
            <table className="sidebar-table">
  
              <caption>
                <h2 className="sidebar-table-h2">Tom's Interests</h2>
              </caption>
  
              <tbody>
                <tr>
                  <th className="sidebar-table-header" scope="row">General</th>
                  <td className="sidebar-table-data">
                    <p>tv, films, my friends &hearts; &hearts; &hearts; </p>
                  </td>
                </tr>
  
                <tr>
                  <th className="sidebar-table-header" scope="row">Music</th>
                  <td className="sidebar-table-data">
                    <p>
                        {randomBands + '  '}
                    </p>
                  </td>
                </tr>
  
                <tr>
                  <th className="sidebar-table-header" scope="row">Movies</th>
                  <td className="sidebar-table-data">
                    <p>
                      casino royale, hot fuzz, forrest gump, mean girls
                    </p>
                  </td>
                </tr>
  
                <tr>
                  <th className="sidebar-table-header" scope="row">Television</th>
                  <td className="sidebar-table-data">
                    <p>family guy, mighty boosh, 24, CSI, friends, scrubs, the oc</p>
                  </td>
                </tr>
  
              </tbody>
            </table>
          </section>
  
          <section className="details" style={{backgroundColor: randomColor.color}}>
            <table className="sidebar-table">
  
              <caption>
                <h2 className="sidebar-table-h2">Tom's Details</h2>
              </caption>
  
              <tbody>
                <tr>
                  <th className="sidebar-table-header" scope="row">Status:</th>
                  <td className="sidebar-table-data">Single</td>
                </tr>
  
                <tr>
                  <th className="sidebar-table-header" scope="row">Zodiac Sign:</th>
                  <td className="sidebar-table-data">Libra</td>
                </tr>
  
              </tbody>
            </table>
          </section>
        </aside>
      )
    }
  }

export default Sidebar;