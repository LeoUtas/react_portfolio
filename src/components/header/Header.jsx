import React from 'react';
import './header.css';
import { Canvas } from '@react-three/fiber';
import Particles from './particlesnoise';
// import TypingEffect from "./typingEffect";
import Headersocialnetwork from './Headersocialnetwork';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h1>Good day, I'm Hoang</h1>
        <h2 className="header_h3_icons">
          <a href="https://github.com/LeoUtas" target="_blank" rel="noreferrer">
            <FaGithub />{' '}
          </a>

          <a
            href="https://www.linkedin.com/in/hoangng84/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </h2>
        <h3>
          I study and solve problems using technical tools (i.e., Figma for UI
          design, React for the frontend, Python for the backend, model
          training, and cloud services for the database). I call it full-stack
          problem-solving
        </h3>

        <Canvas
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <Particles count={8000} />
        </Canvas>
        <div className="header_items">
          <Headersocialnetwork className="header_item" />
        </div>
      </div>
    </header>
  );
}

export default Header;
