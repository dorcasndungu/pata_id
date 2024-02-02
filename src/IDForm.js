// IDForm.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function IDForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const history = useHistory();

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

    // For simplicity, navigate to the search results page
    history.push('/search');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">ID Information Form</h2>
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
          <label htmlFor="photo">Photo:</label>
          <input type="file" className="form-control-file" id="photo" accept="image/*" onChange={handlePhotoChange} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default IDForm;
