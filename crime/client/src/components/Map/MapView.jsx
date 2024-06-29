import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import HeatmapLayer from './HeatmapLayer';
import './MapView.css'; // Ensure this path is correct

const MapView = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div className="loading">Loading...</div>;

  return (
    <div className="map-page">
      <header className="header">
        <h1>Crime Watch</h1>
        <p>Real-time Crime Reporting and Safety Information</p>
      </header>
      
      <main className="main-content">
      <section className="map-section">
          <h2>Crime Map</h2>
          <p>Explore the map below to view real-time crime reports and hotspots.</p>
          <div className="map-container">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              zoom={10}
              center={{ lat: 37.7749, lng: -122.4194 }}
            >
              <HeatmapLayer />
            </GoogleMap>
          </div>
        </section>
        <section className="intro-section">
          <h2>About Cyber Crime</h2>
          <p>Cyber crime refers to illegal activities conducted through the internet or other digital means. These crimes include hacking, identity theft, phishing, and more. Cyber criminals use technology to access personal information, steal identities, or manipulate data for fraudulent purposes.</p>
        </section>
        <section className="technical-data-section">
          <h2>Technical Data on Cyber Crime</h2>
          <p>According to recent reports, cyber crime costs the global economy billions of dollars each year. The most common types of cyber crimes include:</p>
          <ul>
            <li>Phishing: 32% of all data breaches</li>
            <li>Malware: 30% of data breaches</li>
            <li>Ransomware: 20% increase year-over-year</li>
            <li>Denial of Service (DoS): 15% of attacks target large enterprises</li>
          </ul>
        </section>
        <section className="types-section">
          <h2>Types of Cyber Crime</h2>
          <p>Cyber crime encompasses a wide range of activities. Here are some of the most common types:</p>
          <ul>
            <li>Hacking: Unauthorized access to computer systems</li>
            <li>Identity Theft: Stealing personal information for fraudulent purposes</li>
            <li>Phishing: Fraudulent attempts to obtain sensitive information</li>
            <li>Ransomware: Malicious software that blocks access to data until a ransom is paid</li>
            <li>Cyberstalking: Harassment or stalking using electronic communications</li>
          </ul>
        </section>
        <section className="laws-section">
          <h2>Laws Against Cyber Crime</h2>
          <p>Several laws have been enacted globally to combat cyber crime. Some of the key laws include:</p>
          <ul>
            <li><strong>Computer Fraud and Abuse Act (CFAA)</strong> - United States</li>
            <li><strong>General Data Protection Regulation (GDPR)</strong> - European Union</li>
            <li><strong>Personal Data Protection Act (PDPA)</strong> - Singapore</li>
            <li><strong>Information Technology Act</strong> - India</li>
          </ul>
        </section>
        
        <section className="reporting-section">
          <h2>How to Report Cyber Crime</h2>
          <p>If you have been a victim of cyber crime, it is important to report it immediately. Follow these steps to report a cyber crime:</p>
          <ul>
            <li>Contact your local law enforcement agency.</li>
            <li>Report the crime to the FBI's Internet Crime Complaint Center (IC3).</li>
            <li>Notify your bank or financial institution if your financial information was compromised.</li>
            <li>Change your passwords and secure your accounts.</li>
          </ul>
        </section>
        <section className="safety-tips-section">
          <h2>Tips for Staying Safe Online</h2>
          <p>Here are some tips to help you stay safe online and protect yourself from cyber crime:</p>
          <ul>
            <li>Use strong, unique passwords for all your accounts.</li>
            <li>Enable two-factor authentication wherever possible.</li>
            <li>Be cautious of phishing emails and suspicious links.</li>
            <li>Keep your software and devices updated with the latest security patches.</li>
            <li>Use antivirus and anti-malware software to protect your devices.</li>
          </ul>
        </section>
        <section className="resources-section">
          <h2>Resources</h2>
          <p>For more information on cyber crime and how to protect yourself, check out the following resources:</p>
          <ul>
            <li><a href="https://www.fbi.gov/investigate/cyber" target="_blank" rel="noopener noreferrer">FBI Cyber Crime Division</a></li>
            <li><a href="https://www.ic3.gov/" target="_blank" rel="noopener noreferrer">Internet Crime Complaint Center (IC3)</a></li>
            <li><a href="https://www.consumer.ftc.gov/topics/identity-theft" target="_blank" rel="noopener noreferrer">Federal Trade Commission - Identity Theft</a></li>
            <li><a href="https://staysafeonline.org/" target="_blank" rel="noopener noreferrer">National Cyber Security Alliance</a></li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Crime Watch. All rights reserved.</p>
        <p>Providing real-time crime reporting and safety information.</p>
      </footer>
    </div>
  );
};

export default MapView;
