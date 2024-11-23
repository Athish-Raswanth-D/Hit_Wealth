import React, { useState } from 'react';
import { db, addDoc, collection } from '../../firebase';  // Import Firestore functions

const Dashboard = () => {
  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim()) {
      try {
        // Add name to the Firestore 'users' collection
        await addDoc(collection(db, 'users'), {
          name: name,
          timestamp: new Date(),
        });
        console.log('Name added to Firestore');
      } catch (error) {
        console.error('Error adding name to Firestore: ', error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;