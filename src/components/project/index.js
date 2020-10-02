import React from 'react';
import './project.css';
import Rust from '../../assets/rust.svg';
import ReactIcon from '../../assets/react.svg';
import Postgres from '../../assets/postgres.svg';

const techs = {
  'rust': {
    name: 'Rust',
    icon: Rust,
    link: 'https://www.rust-lang.org/'
  },
  'react': {
    name: 'React',
    icon: ReactIcon,
    link: 'https://reactjs.org/'
  },
  'postgres': {
    name: 'PostgreSQL',
    icon: Postgres,
    link: 'https://www.postgresql.org/'
  }
};

function Tech(props) {
  const tech = techs[props.name] ?? techs['rust'];
  return (
    <a className="tech" href={tech.link}>
      <img src={tech.icon} alt={`${tech.name} Logo`}></img>
      <p>{tech.name}</p>
    </a>
  )
}

function Project(props) {
  return (
    <div className="project">
      <p className="project-name">{props.name}</p>
      <div className="project-info">
        <div className="project-desc">
          {props.children}
          <div className="project-links">
          {props.links?.map(([name, url]) => (
            <span className="project-link">
              <a href={url}>{name}</a>
            </span>
          ))}
          </div>
        </div>
        <div className="techs">
          {props.techs.map(tech => (<Tech name={tech} />))}
        </div>
      </div>
    </div>
  );
}

export default Project;