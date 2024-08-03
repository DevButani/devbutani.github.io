import './Home.css';
import GHLogo from './images/github-logo.png';

function Home() {
    return (
        <div className="Home">
            <div className="container-fluid center">
                <h1>Welcome to My Website</h1>
                <h2>View my Projects</h2>
                <div className="buttons">
                    <a target='_blank' rel="noreferrer" href="https://github.com/DevButani">
                        <button><img src={GHLogo} alt="Github logo"/>Github</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;