import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="profile-settings">
      <h1>Account Settings</h1>
      <ProfileInformation />
      <LoginAndSecurity />
      <LinkedAccounts />
      <NotificationPreferences />
      <AccountManagement />
    </div>
  );
};

// Profile Information
const ProfileInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    contact: "+1234567890",
  });

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  return (
    <div className="settings-card">
      <h2>Profile Information</h2>
      <div className="info">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          disabled={!isEditing}
          onChange={handleChange}
        />
      </div>
      <div className="info">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          disabled={!isEditing}
          onChange={handleChange}
        />
      </div>
      <div className="info">
        <label>Contact:</label>
        <input
          type="tel"
          name="contact"
          value={profile.contact}
          disabled={!isEditing}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleEditToggle}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
};

// Login and Security
const LoginAndSecurity = () => {
  return (
    <div className="settings-card">
      <h2>Login and Security</h2>
      <div className="info">
        <label>Password:</label>
        <button>Change Password</button>
      </div>
      <div className="info">
        <label>Two-Factor Authentication:</label>
        <input type="checkbox" />
      </div>
      <div className="info">
        <label>Login History:</label>
        <ul>
          <li>Last login: 11/22/2024</li>
          <li>Previous login: 11/21/2024</li>
        </ul>
      </div>
    </div>
  );
};

// Linked Accounts
const LinkedAccounts = () => {
  return (
    <div className="settings-card">
      <h2>Linked Accounts</h2>
      <div className="info">
        <label>Gmail:</label>
        <button>Disconnect</button>
      </div>
      <div className="info">
        <label>Facebook:</label>
        <button>Connect</button>
      </div>
    </div>
  );
};

// Notification Preferences
const NotificationPreferences = () => {
  return (
    <div className="settings-card">
      <h2>Notification Preferences</h2>
      <div className="info">
        <label>Email Alerts:</label>
        <input type="checkbox" />
      </div>
      <div className="info">
        <label>SMS Notifications:</label>
        <input type="checkbox" />
      </div>
    </div>
  );
};

// Account Management
const AccountManagement = () => {
  return (
    <div className="settings-card">
      <h2>Account Management</h2>
      <div className="info">
        <label>Subscription:</label>
        <p>Current Plan: Premium</p>
      </div>
      <div className="info">
        <label>Delete Account:</label>
        <button className="danger">Delete Account</button>
      </div>
    </div>
  );
};

export default Dashboard;
