// App.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handlePhotoChange = (e) => setPhoto(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      location,
      phone,
      photo,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ID Information Form</h1>
      </header>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" className="form-control" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone (optional):</label>
          <input type="text" className="form-control" id="phone" value={phone} onChange={handlePhoneChange} />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo :</label>
          <input type="file" className="form-control-file" id="photo" accept="image/*" onChange={handlePhotoChange} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
