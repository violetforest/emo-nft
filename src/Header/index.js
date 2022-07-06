import React from 'react';
import randomColor from './../colors';

class Header extends React.Component {
    render() {
      return (
        <header className="main-header" style={{color: randomColor.color}}>
            <nav className="search-bar">
        
            <ul className="topnav home">
                <li><a href="#">MySpace.com</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        
            <form>
                <label>
                The Web
                <input type="radio" name="search-type" value="the-web"></input>
                </label>
        
                <label>
                MySpace
                <input type="radio" name="search-type" value="myspace"></input>
                </label>
        
                <label>
                <input type="text" name="search"></input>
                </label>
        
                <input className="submit-btn" type="submit" name="submit-button" value="Search"></input>
            </form>
        
            <ul className="topnav signup">
                <li><a href="#">Help</a></li>
                <li><a href="#">SignUp</a></li>
            </ul>
            </nav>
        
            <nav className="navbar" style={{color: randomColor.color}}>
            <ul>
                <li><a style={{color: randomColor.color}} href="#">Home</a></li>
                <li><a style={{color: randomColor.color}} href="#">Browse</a></li>
                <li><a style={{color: randomColor.color}} href="#">Search</a></li>
                <li><a style={{color: randomColor.color}} href="#">Invite</a></li>
                <li><a style={{color: randomColor.color}} href="#">Film</a></li>
                <li><a style={{color: randomColor.color}} href="#">Mail</a></li>
                <li><a style={{color: randomColor.color}} href="#">Blog</a></li>
                <li><a style={{color: randomColor.color}} href="#">Favorites</a></li>
                <li><a style={{color: randomColor.color}} href="#">Forum</a></li>
                <li><a style={{color: randomColor.color}} href="#">Groups</a></li>
                <li><a style={{color: randomColor.color}} href="#">Events</a></li>
                <li><a style={{color: randomColor.color}} href="#">Videos</a></li>
                <li><a style={{color: randomColor.color}} href="#">Music</a></li>
                <li><a style={{color: randomColor.color}} href="#">Classifieds</a></li>
            </ul>
            </nav>
        
        </header>
        )
    }
}

export default Header;