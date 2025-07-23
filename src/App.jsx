import { useEffect, useState } from 'react';
import './App.css'
import logo from './assets/prof.svg';

function MyInfo()
{
  return (
    <div className='info'>
    <img src={logo} alt="Profile" className="profile-pic" />
    <p>I am Sandeep Suresh. I am an ML Engineer and I love Reinforcement Learning</p>
    <p>Check out my <br />
      <a href="https://github.com/SandyTheAdventurer/" target='_blank'> Github</a>
      <br />
      <a href="https://www.linkedin.com/in/sandeep-suresh-17847428a/" target='_blank'> LinkedIn</a>
      <br />
      <a href="https://huggingface.co/SandyTheAdventurer" target='_blank'> Huggingface</a>
    </p>
    </div>
  );
}

function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {fetch('https://api.github.com/users/SandyTheAdventurer/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
    .catch(error => console.error('Error fetching repos:', error));
  }, []);
 return (
    <div className="App">
      <div className="column left">
        <h3>My Projects</h3>
        {repos.length === 0 ? (
          <p>Loading projects from GitHub...</p>
        ) : (
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} rel="noreferrer">
                  {repo.name}
                </a>: {repo.description || "No description"}
              </li>
            ))}
          </ul>
        )}
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
