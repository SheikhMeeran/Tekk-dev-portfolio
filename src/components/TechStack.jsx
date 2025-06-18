import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
import Cloud from '../assets/cloud.png';
import internet from '../assets/internet.png';
import three from '../assets/three tier.png';
import onpremise from '../assets/onpremise.png';
import nTier from '../assets/n-tier.png';
import orchestration from '../assets/orchestration-layer.webp';

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
    { name: 'JavaScript', img: js },
    { name: 'NGINX', img: nginx },
  ],
  Deployment: [
    { name: 'Cloud', img: Cloud },
    { name: 'onpremise', img: onpremise },
  ],
  Architecture: [
    { name: 'internet', img: internet },
    { name: 'three tier', img: three },
    { name: 'n-tier', img: nTier },
    { name: 'orchestration', img: orchestration },
  ],
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const logosRef = useRef(null);
  const isInView = useInView(logosRef, { once: true, margin: '-50px' });

  const containerStyle = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '30px 20px',
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflowX: 'hidden',
  };

  const titleStyle = {
    fontSize: '1rem',
    lineHeight: 1.6,
    fontWeight: 600,
    textAlign: 'left',
    marginBottom: '20px',
    paddingLeft: '0px',
  };

  const descriptionWrapper = {
    width: '100%',
    maxWidth: '100%',
    marginBottom: '30px',
    padding: '0px',
    textAlign: 'left',
  };

  const descriptionStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#000',
    textAlign: 'left',
  };

  const tabsContainer = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: '40px',
    gap: '10px',
    paddingLeft: '0px',
  };

  const tabStyle = (tab) => ({
    padding: '10px 20px',
    borderRadius: '25px',
    backgroundColor: activeTab === tab ? '#305694' : '#f0f0f0',
    color: activeTab === tab ? '#ffffff' : '#000000',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
    fontWeight: '500',
    fontSize: '0.85rem',
  });

  const logosContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '30px 40px',
    width: '100%',
    maxWidth: '100%',
    margin: '20px auto',
    paddingLeft: '0px',
  };

  const logoCard = {
    flex: '1 1 20%',
    maxWidth: '100px',
    height: 'auto',
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
      {/* Animate heading drop-in */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={titleStyle}
      >
        Technologies<span style={{ color: '#3b82f6' }}>.</span>
      </motion.div>

      <div style={descriptionWrapper}>
        <p style={{ fontSize: '0.95rem', marginBottom: '10px', textAlign: 'left' }}>
          One partnership delivers all the experts you need
        </p>
        <p style={descriptionStyle}>
          <strong>Vertical-Blockchain</strong>: The world is moving to Web 3.0, and blockchain is the backbone of a successful business.
          We integrate blockchain into your business using wallet development, smart contracts, tokenization, and creating customized NFT marketplaces.
          One partnership delivers all the experts you need.
        </p>
      </div>

      <div style={tabsContainer}>
        {Object.keys(techData).map((tab) => (
          <button key={tab} style={tabStyle(tab)} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {/* Logos with scroll-triggered animation */}
      <motion.div
        ref={logosRef}
        style={logosContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {techData[activeTab].map((tech, index) => (
          <div key={index} style={logoCard}>
            <img src={tech.img} alt={tech.name} style={logoImage} />
            <div>{tech.name}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
