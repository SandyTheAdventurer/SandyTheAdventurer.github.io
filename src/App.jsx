import './App.css'
import logo from './assets/prof.svg';

function MyInfo()
{
  return (
    <div className='info'>
    <img src={logo} alt="Profile" className="profile-pic" />
    <p>I am Sandeep Suresh. I am an ML Engineer and I love Reinforcement Learning</p>
    <p>Check out my <br />
      <a href="www.github.com/SandyTheAdventurer/" target='_blank'> Github</a>
      <br />
      <a href="www.linkedin.com/in/sandeep-suresh-17847428a/" target='_blank'> LinkedIn</a>
      <br />
      <a href="www.huggingface.co/SandyTheAdventurer" target='_blank'> Huggingface</a>
    </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <title>Sandy's Portfolio</title>
    <div className="column left">
      <h3>My Projects</h3>
    </div>
    <div className="column centre">
      <h3>Description</h3>
    </div>
    <div className="column right">
      <h3>About Me</h3>
      <MyInfo />
      </div>
    </div>
  );
}

export default App
