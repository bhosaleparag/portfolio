import React from "react";
import score from "../assets/project/score.png";
import navbar from "../assets/project/navbar.png";
import login from "../assets/project/login.png";
import feedback from "../assets/project/feedback.png";
import game1 from "../assets/project/game1.png";
import setting from "../assets/project/setting.png";
import game2 from "../assets/project/game2.png";

export default function Project1() {
  return (
    <>
      <p>Typing Trainer</p>
      <div className="projectImg">
        <img src={score} className="projectImgScore" />
        <img src={navbar} className="projectImgNavbar" />
        <img src={login} className="projectImgLogin" />
        <img src={feedback} className="projectImgFeedback" />
        <img src={game1} className="projectImgGame1" />
        <img src={game2} className="projectImgGame2" />
        <img src={setting} className="projectImgSetting" />
      </div>
    </>
  );
}
