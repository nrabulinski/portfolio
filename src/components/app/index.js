import React from 'react';
import './app.css';
import 'normalize.css';
import Me from '../../assets/me.jpg';
import Lang from '../lang';
import Project from '../project';
import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';

function App() {
  return (
    <div id="profile">
      <section id="header">
        <img src={Me} id="pic" alt="Myself"></img>
        <div id="info">
          <p id="name" className="big">Nikodem Rabuliński</p>
          <p className="small">nikodem@rabulinski.com</p>
          <p id="desc">Full-stack and systems developer</p>
          <div>
            <a href="https://github.com/nrabulinski">
              <img src={GitHub} class="icon" alt="GitHub Logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/nrabulinski/">
              <img src={LinkedIn} class="icon" alt="LinkedIn Logo"></img>
            </a>
          </div>
        </div>
          <div id="langs">
            <p className="big">Strongest technologies</p>
            <Lang name="Rust" level="10" />
            <Lang name="JavaScript" level="10" />
            <Lang name="PostgreSQL" level="8" />
          </div>
      </section>
      <section id="skills">
        <p className="big">Skills</p>
      </section>
      <section id="about">
        <p className="big">About me</p>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a est interdum, varius mi a, aliquet nulla. In nec volutpat nibh, non rutrum ex. Nulla euismod orci vitae nunc maximus, sed efficitur turpis molestie. Morbi eu dignissim risus. Proin sit amet tellus a dolor malesuada pellentesque. Proin id elit non urna ullamcorper accumsan a id ligula. Mauris hendrerit laoreet sem quis auctor. Morbi elementum, lorem quis faucibus eleifend, velit felis commodo lacus, at tempor turpis justo sed magna. Morbi commodo tempus mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget lorem nibh. Maecenas aliquet massa ultrices pulvinar congue. Nam et porta orci, a ullamcorper ligula.</p> */}
      </section>
      <section id="projects">
        <p className="big">Projects</p>
        <Project name="This website" techs={['react']} links={[['Repository', 'https://github.com/nrabulinski/portfolio']]}>
          <p>It's my first serious attempt at making a proper, proffesional-looking and responsive React website.</p>
        </Project>
        <Project name="brainrust" techs={['rust']} links={[['Repository', 'https://github.com/nrabulinski/brainrust']]}>
          <p>A simple brainf*ck interpreter and compiler (with LLVM backend) written in Rust. Maintained in my spare time as a fun side-project.</p>
          <p>Planned features include better and more optimizations, dynamic memory allocation and more.</p>
        </Project>
        <Project name="Prosper" techs={['rust']} links={[['Repository', 'https://github.com/nrabulinski/prosper']]}>
          <p>My first ever attempt at creating a programming language from scratch. Currently the project is stalled but I have written a working lexer, parser, simple semantic checker and code generator. The code generation is using LLVM API.</p>
          <p>The end goal for this language is to become self-hosted and interoperate with LLVM's C API directly.</p>
        </Project>
        {/* <Project name="That alcohol price comparison website thingy" techs={['react', 'rust', 'postgres']}>
          <p>Single sentence</p>
        </Project> */}
      </section>
      <footer>
        <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a></p>
        <p>&copy; 2020 Nikodem Rabuliński</p>
      </footer>
    </div>
  );
}

export default App;
