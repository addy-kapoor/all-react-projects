import React from 'react';
import "./App.css";

const Project = ({ src, title, description, link }) => {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={src} alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <a href={link} className="card-link" target="_blank">
            Open Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Project