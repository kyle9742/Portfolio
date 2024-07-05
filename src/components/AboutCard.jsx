import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoPerson, IoSchoolSharp } from "react-icons/io5";
import { MdEmail, MdPlace } from "react-icons/md";

const selectIcon = {
  name: <IoPerson />,
  birth: <FaBirthdayCake />,
  address: <MdPlace />,
  phone: <FaPhoneFlip />,
  email: <MdEmail />,
  edu: <IoSchoolSharp />,
};

const AboutCard = ({ title, content, icon }) => {
  return (
    <div className="col my-3">
      <div className="card aboutCard d-flex flex-row">
        <div className="icon-container">{selectIcon[icon]}</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
