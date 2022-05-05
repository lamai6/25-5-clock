import { useState } from 'react';
import gitHubLogo from '@images/github.png';

const ghRepoUrl = 'https://github.com/lamai6/25-5-clock';
const ghLogoStyle = {
  position: 'absolute',
  top: '1em',
  right: '1em',
  opacity: 0.4,
  transition: 'opacity 0.3s ease-in',
};

function GitHub() {
  const [style, setStyle] = useState(ghLogoStyle);

  const increaseOpacity = () =>
    setStyle((prevStyle) => ({ ...prevStyle, opacity: 1 }));

  const decreaseOpacity = () =>
    setStyle((prevStyle) => ({ ...prevStyle, opacity: 0.4 }));

  return (
    <div
      onMouseEnter={increaseOpacity}
      onMouseLeave={decreaseOpacity}
      style={style}
      id="github-logo-box"
    >
      <a
        href={ghRepoUrl}
        target="_blank"
        title="View this project repository on GitHub"
        rel="noreferrer noopener"
      >
        <img src={gitHubLogo} alt="GitHub Logo" />
      </a>
    </div>
  );
}

export default GitHub;
