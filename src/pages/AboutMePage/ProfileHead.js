import React from 'react';
import './AboutMePage.css';
import profilePic from '../../media/profile.jpg';

function ProfileHead() {
  return (
    <div className="profile-head">
      {/* Replace with the actual profile image */}
      <img src={profilePic} alt="Profile" />
    </div>
  );
}

export default ProfileHead;
