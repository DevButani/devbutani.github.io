import './Projects.css';
import GUIimg from './images/gui-img.png'

function Projects() {
    return (
        <div className="container-fluid Projects">
          <h1>Projects</h1>
          <br/>
          <h2>Academic Portal Using Python (Tkinter and Pandas):
            <a className="link" target='_blank' rel="noreferrer" href="https://github.com/DevButani/Academic-portal"> Link </a>
          </h2>
          <img className="img-fluid" src={GUIimg} alt="GUI"/>
        </div>
    );
}

export default Projects;