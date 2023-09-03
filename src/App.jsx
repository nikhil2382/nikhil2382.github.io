/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useEffect } from 'react';
import profileImage from './image/img_profile.jpg';
import profileImageBG from './image/img_profile_bg.png';
import './App.css';

function App() {
  const [experience, setExperience] = useState(0);

  const calculateMonthsDifference = (startDate, endDate) => {
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    const monthDifference = endDate.getMonth() - startDate.getMonth();
    return months + monthDifference;
  };

  useEffect(() => {
    const currentDate = new Date();
    const startDate = new Date('06/27/2022'); // MM/DD/YYYY
    const monthsOfExperience = calculateMonthsDifference(startDate, currentDate);
    setExperience(monthsOfExperience);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="profile">
          <img
            src={profileImage}
            className="profile-image"
            alt="Profile"
          />
        </div>

        <div className="name">Nikhil</div>

        <div className="role">React-Native Developer</div>

        <hr className="divider" />
      </div>

      <div className="content-container">
        <div className="rectangle">
          <div className="text-container">
            <div className="intro">
              I’m
              {' '}
              <span className="highlight">Nikhil Prajapati</span>
            </div>

            <div className="intro">
              <span className="highlight">React-Native</span>
              {' '}
              Developer
            </div>

            <div className="experience">
              I am a passionate React Native developer with
              {' '}
              {experience}
              {' '}
              months of hands-on experience in the field. My journey in mobile app development has equipped me with a strong command of React Native, allowing me to build cross-platform applications efficiently. I&apos;m well-versed in version control with Git, and I take pride in crafting smooth and engaging user experiences through my proficiency in animations, UI/UX design principles, and tools like Figma. Additionally, I have a deep understanding of state management using Redux, enabling me to develop scalable and maintainable applications. My commitment to delivering high-quality code and user-friendly interfaces drives me to continually expand my skill set and stay up-to-date with the latest trends in mobile app development.
            </div>

          </div>

          <img
            src={profileImageBG}
            className="profile-bg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
