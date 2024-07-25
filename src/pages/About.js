import './About.css';
import GDLogo from './googledrive-logo.png'

function About() {
    return (
        <div className="container-fluid About">
          <h1>About Me</h1>
          <br/>
          <h3>I am a Dual Degree (BTech + MTech) student in CSE Department in IIT Kharagpur.</h3>
          <h3>Passionate about fields involving solving a problem through innovative techniques.</h3>
          <h3>Coding experience in programming languages like C, C++, Python and Javascript </h3>
          <h3> as well as with libraries/frameworks like ReactJS, Bootstrap, NumPy, Tkinter and Pandas.</h3>
          <h3>My hobbies are competitive programming and playing table tennis and badminton.</h3>
          <div className="link-box">          
            <img src={GDLogo} alt="Google Drive logo"/><a target='_blank' rel="noreferrer" className="link" href="https://drive.google.com/file/d/1CbqdcjyOhdszFF6lJFrck93ZPuo4wAUg/view?usp=sharing">Resume</a>
          </div>
        </div>
    );
}

export default About;