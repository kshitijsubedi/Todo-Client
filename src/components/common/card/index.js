import './card.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  let { title, heading, subheading, footer, footertext, footerlink } = props;
  return (
    <div className="card-wrapper">
      <div className="card">
        <h1 className="card-logo">{heading}</h1>
        <div className="card-header">
          <h2>{title}</h2>
          <h4>{subheading}</h4>
          <div className="children">{props.children}</div>
        </div>
        <div className="card-footer">
          <p>
            {footertext}
            <Link className="card-route" to={footerlink} replace>
              {footer}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
