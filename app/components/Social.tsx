import React from "react";
import {
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiGithub />,
    link: "https://github.com/baezor",
  },
  { iconName: <FiTwitter />, link: "https://twitter.com/" },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/feed/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noopener">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
