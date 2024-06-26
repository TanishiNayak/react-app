import React, { useState } from 'react';
import styles from './FeatureSection2.module.css';

const FeatureSection2: React.FC = () => {
  const [showTSX, setShowTSX] = useState(true);

  const handleToggle = () => {
    setShowTSX(!showTSX);
  };

  const tsxCode = `
import React from 'react';
import styles from './FeatureSection2.module.css';

const FeatureSection2: React.FC = () => {
  return (
    <div className={styles.featureSectionContainer}>
      <div className={styles.textContainer}>
        <h1>Deploy faster</h1>
        <h2>A better workflow</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
        <ul className={styles.features}>
          <li>
            <div className={styles.icon}>🚀</div>
            <div>
              <h3>Push to deploy</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            </div>
          </li>
          <li>
            <div className={styles.icon}>🔒</div>
            <div>
              <h3>SSL certificates</h3>
              <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
            </div>
          </li>
          <li>
            <div className={styles.icon}>💾</div>
            <div>
              <h3>Database backups</h3>
              <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/800x400" alt="Example" />
      </div>
    </div>
  );
};

export default FeatureSection2;
`;

  const cssCode = `
.featureSectionContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9fafb;
}

.textContainer {
  max-width: 600px;
}

.textContainer h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.textContainer h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.textContainer p {
  font-size: 16px;
  margin-bottom: 30px;
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon {
  font-size: 40px;
  margin-right: 20px;
}

.imageContainer {
  max-width: 800px;
}

.imageContainer img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.codeSection {
  margin-top: 40px;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.toggleButton {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #e2e8f0;
  color: #1a202c;
}

.toggleButton.active {
  background-color: #3182ce;
  color: #fff;
}

.codeContainer {
  position: relative;
  background-color: #1a202c;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: auto;
  max-height: 200px;
}

.copyButton {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #3182ce;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
`;

  return (
    <div>
      <div className={styles.featureSectionContainer}>
        <div className={styles.textContainer}>
          <h1>Deploy faster</h1>
          <h2>A better workflow</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          <ul className={styles.features}>
            <li>
              <div className={styles.icon}>🚀</div>
              <div>
                <h3>Push to deploy</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}>🔒</div>
              <div>
                <h3>SSL certificates</h3>
                <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}>💾</div>
              <div>
                <h3>Database backups</h3>
                <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://via.placeholder.com/800x400" alt="Example" />
        </div>
      </div>
      <div className={styles.codeSection}>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleButton} ${showTSX ? styles.active : ''}`}
            onClick={handleToggle}
          >
            TSX
          </button>
          <button
            className={`${styles.toggleButton} ${!showTSX ? styles.active : ''}`}
            onClick={handleToggle}
          >
            CSS
          </button>
        </div>
        <div className={styles.codeContainer}>
          <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText(showTSX ? tsxCode : cssCode)}>
            Copy
          </button>
          <pre>
            <code>{showTSX ? tsxCode : cssCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection2;
