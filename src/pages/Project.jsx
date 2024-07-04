import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="cardList container-fluid text-center bg-info" id="project">
      <div className="title">Projects</div>

      <div className="card d-flex flex-row mx-auto mt-5 w-75">
        <img src="src\assets\myCart.png" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">My Cart</h5>
          <p className="card-text">개발기간 : 2024.06 ~ 2024.07</p>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card d-flex flex-row mx-auto mt-5 w-75">
        <img src="src\assets\movieapp.png" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Movie App</h5>
          <p className="card-text">개발기간 : 2024.06 ~ 2024.07</p>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card d-flex flex-row mx-auto mt-5 w-75">
        <img src="src\assets\magic-memory.png" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">매직메모리 게임</h5>
          <p className="card-text">개발기간 : 2024.06 ~ 2024.07</p>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
