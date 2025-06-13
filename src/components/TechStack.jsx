import React, { useState } from 'react';
import html from '../assets/html-5.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import jquery from '../assets/jquery.png';
import java from '../assets/java.png';
import dotnet from '../assets/social.png';
import sass from '../assets/sass.png';

import php from '../assets/php.png';
import python from '../assets/python.png';
import github from '../assets/github.png';
import mysql from '../assets/mysql.png';
import mongodb from '../assets/leaf.png';
import django from '../assets/django.png';
import nginx from '../assets/nginx.png';
import apache from '../assets/apache.jpg';
import Cloud from '../assets/cloud.png';
import internet from '../assets/internet.png';
import three  from '../assets/three tier.png';
import onpremise  from '../assets/onpremise.png';

const techData = {
  Frontend: [
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: js },
    { name: 'jQuery', img: jquery },
    { name: 'Java', img: java },
    { name: '.NET', img: dotnet },
    { name: 'SASS', img: sass },
  ],
  Backend: [
    { name: 'PHP', img: php },
    { name: 'Python', img: python },
    { name: 'GitHub', img: github },
    { name: 'MySQL', img: mysql },
    { name: 'MongoDB', img: mongodb },
    { name: 'Django', img: django },
    { name: 'JavaScript', img: js }, // reused
    { name: 'NGINX', img: nginx },
    // { name: 'Apache', img: apache },
  ],
  Deployment: [
    { name: 'Cloud', img: Cloud },
    { name: 'onpremise', img: onpremise },
 
    // { name: 'Apache', img: apache },
  ],
  Architecture: [
    { name: 'internet', img: internet },
    { name: 'three tier', img: three },
    { name: 'Cloud', img: Cloud },
    { name: 'Python', img: python },
 
    // { name: 'Apache', img: apache },
  ],
};


const TechStack = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const containerStyle = {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '30px 20px',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-start',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: '20px',
  };

  const descriptionStyle = {
    maxWidth: '800px',
    margin: '10px 0px 30px',
    textAlign: 'left',
    fontSize: '1.4rem',
    lineHeight: '1.8',
    color: '#333',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const tabsContainer = {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    marginBottom: '40px',
    gap: '10px',
  };

  const tabStyle = (tab) => ({
    padding: '12px 24px',
    borderRadius: '25px',
    backgroundColor: activeTab === tab ? '#305694' : '#f0f0f0',
    color: activeTab === tab ? '#ffffff' : '#000000',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  });

  const logosContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    gap: '40px 50px',
    width: '100%',
    maxWidth: '100%',
    margin: '20 auto',
  };

  const logoCard = {
    flex: '1 1 20%',
    maxWidth: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const logoImage = {
    maxWidth: '80px',
    maxHeight: '80px',
    marginBottom: '8px',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>
        Technologies<span style={{ color: '#3b82f6' }}>.</span>
      </div>
<div>
  <p>One partnership delivers all the experts you need</p>
</div>
      <div style={descriptionStyle}>
        <strong>Vertical-Blockchain</strong>: The world is moving to Web 3.0, and blockchain is the backbone of a successful business. We integrate blockchain into your business using wallet development, smart contracts, tokenization, and creating customized NFT marketplaces. One partnership delivers all the experts you need.
      </div>

      <div style={tabsContainer}>
        {Object.keys(techData).map((tab) => (
          <button key={tab} style={tabStyle(tab)} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      <div style={logosContainer}>
        {techData[activeTab].map((tech, index) => (
          <div key={index} style={logoCard}>
            <img src={tech.img} alt={tech.name} style={logoImage} />
            <div>{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
