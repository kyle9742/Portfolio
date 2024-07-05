import React from "react";
import "./About.css";
import AboutCard from "../components/AboutCard";

const About = () => {
  return (
    <div className="about container-fluid" id="about">
      <div className="title text-center mt-5">About Me</div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <AboutCard title="이름" content="박 서 윤" icon="name" />
        <AboutCard title="생년월일" content="93.07.30" icon="birth" />
        <AboutCard title="주소지" content="부산광역시 서구" icon="address" />
        <AboutCard title="연락처" content="010-8927-4658" icon="phone" />
        <AboutCard title="이메일" content="jaewoo1993@gmail.com" icon="email" />
        <AboutCard title="학력" content="울산대학교 경영학과" icon="edu" />
      </div>
    </div>
  );
};

export default About;
