import React from "react";
import './ProjectCard.css';
const selectImage = {
  one: <img src="src\assets\myCart.png" className="img-fluid" />,
  two: <img src="src\assets\movieapp.png" className="img-fluid" />,
  three: <img src="src\assets\magic-memory.png" className="img-fluid" />,
};

const projectCard = ({ title, term, image, lr }) => {
  return (
    <div className={`card my-5 projectCard mx-auto ${lr ==="left" ? 'mr-10p' : 'ml-10p'}`}>
      <div className="row g-0">
        <div className="col-md-6">{selectImage[image]}</div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{term}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
