import React from 'react'
import tataLogo from "../assets/tcs-logo-white-trans.png";
import locationLogo from "../assets/location.svg";
import image1 from "../assets/IMG-20231023-WA0005.jpg";
import image2 from "../assets/IMG-20231202-WA0006.jpg";
import image3 from "../assets/sbiImage.jpg";

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="experienceCard">
        <div className="card_face">
          <img src={tataLogo} className="tataLogo" />
          <div>
            <div className="experienceDate">11/2022 - 04/2024</div>
            <div className="experienceLocation">
              <img src={locationLogo} />
              Navi Mumbai, India
            </div>
          </div>
          <div className="experienceDetail">
            <ul>
              <li>Developed role-based UI customization for the SBI Smart application, enhancing personalization</li>
              <li>Implemented seamless UI components (forms, tables, animations, skeletons) and integrated APIs using Axios</li>
              <li>Built an automated PDF generation feature, reducing manual work by 60%</li>
            </ul>
          </div>
        </div>
        <div className="card_face backsideCard">
          <img src={image1}/>
          <img src={image3}/>
          <img src={image2}/>
        </div>
      </div>

      <div className="experienceCard">
        <div className="card_face">
          <h3>Techhighway system Inc</h3>
          <div>
            <div className="experienceDate">04/2024 - Present</div>
            <div className="experienceLocation">
              <img src={locationLogo} />
              Pune, India
            </div>
          </div>
          <div className="experienceDetail">
            <ul>
              <li>Developed a real-time chat application using Twilio, supporting group/private messaging and secure file sharing</li>
              <li>Designed and developed responsive UI for mobile and desktop using Material UI</li>
              <li>Implemented multi-language support with i18next, enabling users to switch between 9+ languages</li>
              <li>Integrated multiple REST APIs, improving app interactivity and performance</li>
            </ul>
          </div>
        </div>
        <div className="card_face backsideCard">
          <div className="company-info">
            <h3>Techhighway system Inc</h3>
            <p>A leading technology solutions provider</p>
            <div className="tech-stack">
              <h4>Tech Stack:</h4>
              <ul>
                <li>React.js</li>
                <li>Material UI</li>
                <li>Twilio</li>
                <li>i18next</li>
                <li>REST APIs</li>
                <li>Redux</li>
                <li>JavaScript</li>
                <li>Jira</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
