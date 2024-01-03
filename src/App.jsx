import React, { useState, useEffect, useMemo } from "react";
import Logo from "./pages/Logo";
import humanImg from "./assets/human_log.png";
import react from "./assets/react-2.svg";
import aLogo from "./assets/arrow.svg";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Experience from "./pages/Experience";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState([false, ""]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const newY = Math.round(window.scrollY / 60);
      setScrollY(newY);
    });
  }, []);
  const handleButtonClick = (val) => {
    setIsButtonClicked([!isButtonClicked[0], val]);
    setTimeout(() => {
      if(val == "first"){
        window.location.href = "https://typingtrainer51.netlify.app";
      }else if(val == "second"){
        window.location.href = "https://main--infofood.netlify.app";
      }
    }, 200);
  };
  const Star = () => {
    const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <>
        {spans.map(sp => <span key={sp} className="stars"></span>)}
      </>
    );
  }
  return (
    <div className="App">
      <section className="firstPage">
        <div
          className={`left  ${
            scrollY === 0 ? "slide-in-left" : "slide-out-left"
          }`}
        >
          <span className="mesHi">Hello There,</span>
          <span className="name">I'm Parag</span>
          <span className="discription">
            Passionate React.js developer with a year of experience creating
            clean, engaging interfaces. Eager to collaborate on innovative
            projects.
            <span className="fontColor"> Let's connect!</span>
          </span>
        </div>
        <div
          className={`right ${
            scrollY === 0 ? "slide-in-right" : "slide-out-right"
          }`}
        >
          <Logo />
          <img src={humanImg} className="humanImg" />
        </div>
      </section>
      <section className="secondPage">
        <div className={`roller ${scrollY >= 9 ? "falling" : ""}`}>
          <img src={react} />
        </div>
        <header className={`${scrollY >= 1 ? "focus-in-contract" : ""}`}>
          Personal Projects
        </header>
        <div className="project1">
          <div className={`projectCard ${scrollY >= 2 ? "slide-in-left" : ""}`}>
            <Project1 />
          </div>
          <div
            className={`description ${
              scrollY >= 2 &&
              isButtonClicked[0] &&
              isButtonClicked[1] == "first"
                ? "slide-out-fwd-center"
                : scrollY >= 2
                ? "bounce-in-right"
                : ""
            }`}
          >
            <div className="detail">
              Typing Trainer web application using featuring email & password
              login and one-click Google sign-in. The project includes profile
              personalization options, feedback and tips sections, a leaderboard
              system, and two interactive typing games. Firebase ensures secure
              authentication and data storage, while CSS enhances the intuitive
              UI for optimal performance. Technologies that used in it is HTML,
              CSS, JavaScript, React.js, React-Route, Redux, firebase
            </div>
            <div className="moreDetailbtn">
              <button
                className="circular"
                onClick={() => {
                  handleButtonClick("first");
                }}
              >
                <img src={aLogo} height={"25px"} />
              </button>
            </div>
          </div>
        </div>
        <div className="project1">
          <div
            style={{ backgroundColor: "#1c1d27" }}
            className={`projectCard ${scrollY >= 10 ? "slide-in-left" : ""}`}
          >
            <Project2 />
          </div>
          <div
            className={`description ${
              scrollY >= 10 &&
              isButtonClicked[0] &&
              isButtonClicked[1] == "second"
                ? "slide-out-fwd-center"
                : scrollY >= 10
                ? "bounce-in-right"
                : ""
            }`}
          >
            <div className="detail">
              Indulge your senses with Food Info, the cutting-edge food web app
              built using React. Whether you're a foodie searching for new
              culinary experiences or someone looking for convenient meal ideas
              or details, Food Info is your go-to platform for all things
              food-related. It involves complete details about food health
              Labels, calories, Nutrition, ingredients, and digest labels.
              Technologies mostly used is HTML, CSS, JavaScript, React.js,
              React-Route, REST- API.
            </div>
            <div className="moreDetailbtn">
              <button
                className="circular"
                onClick={() => {
                  handleButtonClick("second");
                }}
              >
                <img src={aLogo} height={"25px"} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="thirdPage">
        <header className={`${scrollY >= 21 ? "focus-in-contract" : ""}`}>
          Experience
        </header>
        <Experience />
      </section>
      <section className="fourPage">
        <header className={`${scrollY >= 33 ? "focus-in-contract" : ""}`}>
          About Me
        </header>
        <Star/>
        <div className="aboutContainer">
        <p className="aboutMePara">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello there! I'm Parag Bhosale, and I hail from Dighanchi, my mother's
          hometown. My childhood was predominantly spent there, and it's also
          where I completed my high school education. When it came time for
          graduation, I moved to Sangola, where I delved into the world of
          programming languages. During my academic journey, I developed a keen
          interest in coding, which eventually led me to a rewarding opportunity
          at TCS (Tata Consultancy Services). My initial training took place in
          Chennai, where I honed my coding skills and gained valuable insights.
          Post-training, I embarked on a professional journey as a software
          engineer, landing a role on the SBI project located in Navi Mumbai. In
          this role, I specialize in utilizing technologies such as Git, Linux,
          and my personal favorite, React JS. I find immense joy in working with
          React and leveraging its capabilities to create innovative solutions.
          I am passionate about continuously learning and growing in the dynamic
          field of software development. My experiences have equipped me with a
          solid foundation, and I look forward to contributing my skills and
          expertise to future endeavors.
        </p>
        </div>
      </section>
      <section className="fifthPage">
      <header className={`${scrollY >= 44 ? "focus-in-contract" : ""}`}>
          Achievements
        </header>
        <div className="achivementContent">
        <div className="achievement">
        <div className={`magic-matrix ${scrollY >= 47 ? "swirl-in-fwd" : ""}`}>
          <div className="row">
            <div>21</div>
            <div>05</div>
            <div>23</div>
            <div>02</div>
            <hr className="row1"/>
          </div>
          <div className="row">
            <div>07</div>
            <div className="red">18</div>
            <div className="red">12</div>
            <div>14</div>
            <hr className="row2"/>
          </div>
          <div className="row">
            <div>06</div>
            <div className="red">20</div>
            <div className="red">01</div>
            <div>24</div>
            <hr className="row3"/>
          </div>
          <div className="row">
            <div>17</div>
            <div>08</div>
            <div>15</div>
            <div>11</div>
          </div>
        </div>
            <p className={`matrixDis ${scrollY >= 47 ? "scale-in-bottom" : ""}`}>During my 9th year, I was inspired by the mathematician Ramanujan to design a magic matrix, where rows, columns, and diagonals all add up to the same number.</p>
        </div>
        <div className={`tcsRank ${scrollY >= 47 ? "bounce-in-right" : ""}`}>
          <p>Distinguished by my outstanding performance during the TCS Ignite training, I secured the remarkable 7th position out of a cohort comprising 260 highly skilled students. My commitment to excellence and unwavering dedication set me apart, contributing to the dynamic and collaborative learning environment of the program.</p>
        </div>
        </div>
        </section>
        <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <div className="footerData">
    <h2>Thanks for exploring my work!</h2>
    <p className="footerDetail">I'm passionate about creating innovative solutions that blend functionality and design. Each project in my portfolio represents a unique challenge I've embraced, showcasing my skills in web development, design, and problem-solving. I believe in the power of collaboration and am always eager to take on new and exciting projects. If you're interested in learning more about my work, have specific inquiries, or would like to discuss potential collaborations, I'd love to connect. Feel free to reach out—I'm here to bring your ideas to life!</p>
    </div>
    <div className="footerBottom">
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/parag-bhosale-916878223/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <p>&copy;2023 Parag Bhosale | All Rights Reserved</p>
    </div>
  </footer>
    </div>
  );
}

export default React.memo(App);
