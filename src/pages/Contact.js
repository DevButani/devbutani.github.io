import './Contact.css';
import GMLogo from './images/gmail-logo.png'
import LILogo from './images/linkedin-logo.png'
import GHLogo from './images/github-logo.png';
import CFLogo from './images/codeforces-logo.png';

function Contact() {
    return (
        <div className="container-fluid Contact">
          <h1>Contact Me</h1>
          <br/>
          <ul className="container-fluid">
            <li><img src={GMLogo} alt="GMail logo"/><a target='_blank' rel="noreferrer" className="link" href="mailto:devbutani26@gmail.com">devbutani26@gmail.com</a></li>
            <li><img src={LILogo} alt="LinkedIn logo"/><a target='_blank' rel="noreferrer" className="link" href="https://www.linkedin.com/in/dev-butani-b570212b7">Dev Butani</a></li>
            <li><img src={GHLogo} alt="Github logo"/><a target='_blank' rel="noreferrer" className="link" href="https://github.com/DevButani">Github</a></li>
            <li><img src={CFLogo} alt="Codeforces logo"/><a target='_blank' rel="noreferrer" className="link" href="https://codeforces.com/profile/errors">Codeforces</a></li>
          </ul>
        </div>
    );
}

export default Contact;