import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import randomColor from './colors';

class Myspace extends React.Component {

  render() {
    let bg = "./bg/" + randomColor.bg;
    document.body.style.background = "url('" + bg + "')";
    document.body.style.backgroundRepeat = "" + randomColor.repeat
    document.body.style.backgroundSize = "" + randomColor.bgSize
    document.body.style.backgroundAttachment = "" + randomColor.bgAttach
    return (
      <div className="master-container">
        <Header />
        <div className="page-content-container">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}
  
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Myspace />);
