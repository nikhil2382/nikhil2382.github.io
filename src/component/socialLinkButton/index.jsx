/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function SocialLinkButton({ icon, onPress }) {
  return (
    <div className="social-button-container" onClick={onPress}>
      <img src={icon} className="icon" alt="" />
    </div>
  );
}

SocialLinkButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
