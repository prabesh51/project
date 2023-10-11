/*
 Prabesh Bhattarai = 104085535
 Ashim Adhakari = 104104333
*/


import React from 'react';
import Layout from '../components/Layout';
import './Home.css'; // Import the CSS file
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      
      {/* Front section with a welcome message */}
      <div class="front">
        <h1 id="welcome">Welcome to Hackon</h1>
        <div class="button"> 
          {/* Navigation link to Signin page */}
          <NavLink id="link" to={"/Signin"}>Join With Us</NavLink>
        </div>
      </div>

      {/* Headline section */}
      <div class="head_line">
        <h1>Solidity Contract Audit</h1>
      </div>

      {/* Introduction section */}
      <section class="intro">
        <h3>Welcome to Hackon Smart Contract Audits</h3>
        <p class>Ensuring the security and reliability of your blockchain-based projects is our top priority. Our team of expert auditors is dedicated to thoroughly reviewing and analyzing your smart contracts to identify vulnerabilities and potential risks.</p>
      </section>

      {/* Approach section */}
      <section class="approach">
        <h2>Our Approach</h2>
        <p>Our auditing process combines automated tools with manual review to ensure a comprehensive assessment. We analyze the codebase, review potential attack vectors, and offer actionable recommendations to strengthen your smart contracts.</p>
      </section>

      {/* Get Started section */}
      <section class="get-started">
        <h2>Get Started</h2>
        <p>Protect your blockchain projects with our Smart Contract Audits. Contact us today to discuss your needs and receive a customized audit plan tailored to your project's requirements.</p>
        <p>Remember, security is not just a feature—it's a necessity. Choose Hackon for thorough and reliable Smart Contract Audits.</p>
      </section>

    </Layout>
  );
}; 

export default Home;
