import './Projects.css';
import GUIimg1 from './images/gui-img1.png'
import GUIimg2 from './images/gui-img2.png'
import Carousel from 'react-bootstrap/Carousel';

function Projects() {
    return (
        <div className="container-fluid Projects">
          <h1>Projects</h1>
          <br/>
          <Carousel>
            <Carousel.Item interval={5000}>
              <div className="container-fluid text-center">
                <h2><a className="link" target='_blank' rel="noreferrer" href="https://github.com/DevButani/RRTS"> Road Repair Tracking Software </a></h2>
                <img className="img-fluid" src={GUIimg1} alt="Road Repair Tracking Software"/>
              </div> 
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="container-fluid text-center">
                <h2><a className="link" target='_blank' rel="noreferrer" href="https://github.com/DevButani/Academic-portal"> Academic Portal </a></h2>
                <img className="img-fluid" src={GUIimg2} alt="Academic Portal"/>
              </div> 
            </Carousel.Item>
          </Carousel>
        </div>
    );
}

export default Projects;