import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './AboutPage2.module.css';

const AboutPage2: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tsx' | 'css'>('tsx');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tsxCode = `
import React from 'react';
import './AboutPage2.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutPage2: React.FC = () => {
  return (
    <div className="aboutPage2Container">
      <section className="heroSection">
        <h1>Our Team</h1>
        <p>Meet the dedicated team behind our company's success.</p>
      </section>
      <section className="carouselSection">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Team Carousel 1" />
            <p className="legend">Team Member 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Team Carousel 2" />
            <p className="legend">Team Member 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Team Carousel 3" />
            <p className="legend">Team Member 3</p>
          </div>
        </Carousel>
      </section>
      <section className="valuesSection">
        <h2>Our Values</h2>
        <p>We believe in integrity, innovation, and customer satisfaction.</p>
        <div className="valueBoxes">
          <div className="valueBox">
            <h3>Integrity</h3>
            <p>We adhere to the highest standards of integrity and ethical behavior.</p>
          </div>
          <div className="valueBox">
            <h3>Innovation</h3>
            <p>We strive to be industry leaders through innovation and excellence.</p>
          </div>
          <div className="valueBox">
            <h3>Customer Satisfaction</h3>
            <p>We are committed to providing the best customer experience.</p>
          </div>
        </div>
      </section>
      <section className="testimonialsSection">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"This company is amazing! They really care about their customers."</p>
            <p>- Happy Customer</p>
          </div>
          <div className="testimonial">
            <p>"Fantastic team and outstanding service!"</p>
            <p>- Satisfied Client</p>
          </div>
        </div>
      </section>
      <section className="contactSection">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more about our company, feel free to reach out to us.</p>
        <div className="contactDetails">
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage2;
  `;

  const cssCode = `
.aboutPage2Container {
  padding: 2rem;
  text-align: center;
}

.pageContent {
  margin-bottom: 2rem;
}

.heroSection {
  background-color: #e0f7fa;
  padding: 2rem;
  border-radius: 8px;
}

.heroSection h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.heroSection p {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
}

.carouselSection {
  margin: 2rem 0;
}

.valuesSection {
  margin: 2rem 0;
}

.valuesSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.valuesSection p {
  font-size: 1.2rem;
  color: #555;
}

.valueBoxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.valueBox {
  width: 30%;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  text-align: left;
}

.valueBox h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.valueBox p {
  font-size: 1.2rem;
  color: #555;
}

.testimonialsSection {
  margin: 2rem 0;
}

.testimonialsSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.testimonials {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.testimonial {
  width: 45%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.testimonial p {
  font-size: 1.2rem;
  color: #555;
}

.contactSection {
  margin: 2rem 0;
}

.contactSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.contactDetails {
  font-size: 1.2rem;
  color: #555;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.toggleButton {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.copyButton {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.copyButton.copied {
  background-color: #28a745;
}

.codeBox {
  white-space: pre-wrap;
  overflow-x: auto;
}
  `;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeToDisplay = activeTab === 'tsx' ? tsxCode : cssCode;

  return (
    <div className={styles.aboutPage2Container}>
      <div className={styles.pageContent}>
        <section className={styles.heroSection}>
          <h1>Our Team</h1>
          <p>Meet the dedicated team behind our company's success.</p>
        </section>
        <section className={styles.carouselSection}>
          <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div className = {styles.carouseltext}>
              <h3>Who We Are</h3>
              <p>Wells Fargo Stories</p>
              <p>Explore our stories of how we're helping customers succeed and communities thrive. Learn More</p>
            </div>
            <div className = {styles.carouseltext}>
              
            <h3>Corporate Responsibility</h3>
              <p>Learn about our Corporate Responsibility activities</p>
              <p>We're helping to create long-term economic growth and improved quality of life for everyone in our communities. Learn More</p>
            </div>
            <div className = {styles.carouseltext}>
              
            <h3>Corporate Responsibility</h3>
              <p>Learn about where we give</p>
              <p>We're building stronger communities by focusing on housing affordability, small business growth, financial health and sustainability. Learn More</p>
            </div>
          </Carousel>
        </section>
        <section className={styles.valuesSection}>
          <h2>Our Values</h2>
          <p>We believe in integrity, innovation, and customer satisfaction.</p>
          <div className={styles.valueBoxes}>
            <div className={styles.valueBox}>
              <h3>Integrity</h3>
              <p>We adhere to the highest standards of integrity and ethical behavior.</p>
            </div>
            <div className={styles.valueBox}>
              <h3>Innovation</h3>
              <p>We strive to be industry leaders through innovation and excellence.</p>
            </div>
            <div className={styles.valueBox}>
              <h3>Customer Satisfaction</h3>
              <p>We are committed to providing the best customer experience.</p>
            </div>
          </div>
        </section>
        <section className={styles.testimonialsSection}>
          <h2>Testimonials</h2>
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <p>"This company is amazing! They really care about their customers."</p>
              <p>- Happy Customer</p>
            </div>
            <div className={styles.testimonial}>
              <p>"Fantastic team and outstanding service!"</p>
              <p>- Satisfied Client</p>
            </div>
          </div>
        </section>
        <section className={styles.contactSection}>
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to learn more about our company, feel free to reach out to us.</p>
          <div className={styles.contactDetails}>
            <p>Email: contact@company.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main St, Anytown, USA</p>
          </div>
        </section>
      </div>
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${activeTab === 'tsx' ? styles.active : ''}`}
          onClick={() => setActiveTab('tsx')}
        >
          TSX
        </button>
        <button
          className={`${styles.toggleButton} ${activeTab === 'css' ? styles.active : ''}`}
          onClick={() => setActiveTab('css')}
        >
          CSS
        </button>
      </div>
      <div className={styles.codeContainer}>
        <button
          className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
          onClick={() => copyToClipboard(codeToDisplay)}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
        <pre className={styles.codeBox}>{codeToDisplay}</pre>
      </div>
    </div>
  );
};

export default AboutPage2;
