import './header.css';
import React from 'react';
import { withAuthState } from '/src/components/hoc/auth';

function Header(props) {
    const [isShown, setIsShown] = React.useState(false);
  var dt = new Date();
  var nameArr = props.user.name?props.user.name.split(' '):'User';
  return (
    <header>
      <div className="date">
        <div className="day">{dt.getDate()}</div>
        <span>
          <p className="month">{dt.toLocaleString('en-us', { month: 'short' }).toUpperCase()}</p>
          <p className="year">{dt.getFullYear()}</p>
        </span>
      </div>
      <div className="dayinword"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
          {
              isShown?<div onClick={()=>props.logout()}>
              Logout
          </div>:<div>
              Welcome {nameArr[0].toUpperCase()} !
          </div>
          }
      </div>
    </header>
  );
}

export default withAuthState(Header);