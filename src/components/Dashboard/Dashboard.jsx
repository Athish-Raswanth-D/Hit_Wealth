import React, { useState } from "react";
import { db, doc, setDoc } from "../../firebase"; // Import db, doc, and setDoc from firebase.js
import "./Dashboard.css"; // Adjust the path to your CSS file

const ProfileInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);  // Toggle editing mode
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (isEditing) {
      try {
        // Reference to the Firestore document in the 'profiles' collection
        const userRef = doc(db, "profiles", "userProfile");  // You can customize the document name
        await setDoc(userRef, profile);  // Save the profile data to Firestore
        alert("Profile saved to Firestore!");
      } catch (error) {
        console.error("Error saving profile data: ", error);
        alert("Failed to save profile!");
      }
    }
    setIsEditing(!isEditing);  // Toggle editing mode off after save
  };

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
          onChange={handleChange}  // Handle text input change
        />
      </div>
      <div className="info">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          disabled={!isEditing}
          onChange={handleChange}  // Handle text input change
        />
      </div>
      <div className="info">
        <label>Contact:</label>
        <input
          type="tel"
          name="contact"
          value={profile.contact}
          disabled={!isEditing}
          onChange={handleChange}  // Handle text input change
        />
      </div>
      <button onClick={handleSave}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
};

export default ProfileInformation;