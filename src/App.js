import './App.css';
import React, { useState } from 'react';


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

    // Here you can handle the submission, for now, let's just log the data
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
        {/* Your logo goes here */}
        <h1>ID Information Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Location:
            <input type="text" value={location} onChange={handleLocationChange} />
          </label>
          <br />
          <label>
            Phone (optional):
            <input type="text" value={phone} onChange={handlePhoneChange} />
          </label>
          <br />
          <label>
            Photo:
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
