import { useEffect, useState } from 'react';
import './App.css';
import AgentField from './AgentField.jsx';
import {
  GITHUB_USER,
  profile,
  about,
  stats,
  experience,
  publications,
  projects,
  skills,
  education,
  hiddenRepos,
} from './data.js';

const repoUrl = (name) => `https://github.com/${GITHUB_USER}/${name}`;

const BANNER = `███████╗ █████╗ ███╗   ██╗██████╗ ██╗   ██╗
██╔════╝██╔══██╗████╗  ██║██╔══██╗╚██╗ ██╔╝
███████╗███████║██╔██╗ ██║██║  ██║ ╚████╔╝
╚════██║██╔══██║██║╚██╗██║██║  ██║  ╚██╔╝
███████║██║  ██║██║ ╚████║██████╔╝   ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝    ╚═╝`;

function Nav() {
  const sections = ['about', 'experience', 'projects', 'research', 'skills', 'contact'];
  return (
    <header className="nav">
      <a href="#top" className="nav-brand">SANDY.EXE</a>
      <nav>
        {sections.map((s) => (
          <a key={s} href={`#${s}`}>{s}</a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <AgentField />
      <div className="hero-content">
        <p className="prompt"><b>sandy@aurora</b>:~$ whoami</p>
        <pre className="ascii" aria-hidden="true">{BANNER}</pre>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}<span className="cursor" aria-hidden="true" /></p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">See my work</a>
          <a className="btn" href={`mailto:${profile.email}`}>Get in touch</a>
        </div>
        <ul className="hero-links">
          {profile.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <h2><span className="section-mark">&gt;</span>{title}</h2>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <img src={profile.avatar} alt={profile.name} className="avatar" />
        <div>
          {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <ul className="stats">
            {stats.map((s) => (
              <li key={s.label} className="panel">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.org}>
            <div className="timeline-head">
              <h3>{e.title} <span className="at">@ {e.org}</span></h3>
              <span className="meta">{e.date ? `${e.date} · ` : ''}{e.place}</span>
            </div>
            <ul>
              {e.points.map((p) => <li key={p.slice(0, 20)}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <div className="cards">
        {projects.map((p) => (
          <article className="card panel" key={p.name}>
            <h3>
              <a href={repoUrl(p.repo)} target="_blank" rel="noreferrer">{p.name} ↗</a>
            </h3>
            <p className="card-highlight">{p.highlight}</p>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <MoreRepos />
    </Section>
  );
}

function MoreRepos() {
  const [repos, setRepos] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const featured = new Set(projects.map((p) => p.repo));
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        return res.json();
      })
      .then((data) =>
        setRepos(data.filter((r) => !r.fork && !featured.has(r.name) && !hiddenRepos.has(r.name))),
      )
      .catch((error) => {
        console.error('Error fetching repos:', error);
        setFailed(true);
      });
  }, []);

  return (
    <div className="more-repos">
      <h3>More on GitHub</h3>
      {failed ? (
        <p className="muted">
          Couldn’t load repositories right now — browse them on{' '}
          <a href={`https://github.com/${GITHUB_USER}?tab=repositories`} target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      ) : repos === null ? (
        <p className="muted">Loading repositories…</p>
      ) : (
        <ul className="repo-list">
          {repos.map((r) => (
            <li key={r.id}>
              <a href={r.html_url} target="_blank" rel="noreferrer">{r.name}</a>
              {r.language && <span className="lang">{r.language}</span>}
              {r.description && <p>{r.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Research() {
  return (
    <Section id="research" title="Research">
      <div className="pubs">
        {publications.map((p) => (
          <article key={p.title} className="pub panel">
            <h3>{p.title}</h3>
            <p className="meta">{p.venue}</p>
            <p>{p.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills & education">
      <div className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <h3>{s.group}</h3>
            <ul className="tags">
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="edu">
        {education.map((e) => (
          <div key={e.title} className="edu-item panel">
            <h3>{e.title}</h3>
            <p>{e.org}</p>
            <p className="meta">{e.date} · {e.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="contact-lead">
        Open to research collaborations, internships and anything involving agents that learn.
      </p>
      <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
      <ul className="hero-links">
        {profile.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </>
  );
}

export default App;
