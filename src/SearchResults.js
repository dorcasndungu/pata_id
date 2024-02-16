// SearchResults.js

import React from 'react';
import Card from 'react-bootstrap/Card';

const dummyIDs = [
  {
    id: 1,
    name: 'John Doe',
    location: 'Main Library',
    photoUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'Student Center',
    photoUrl: 'https://via.placeholder.com/150',
  },
  // Add more dummy data as needed
];

const SearchResults = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Pata ID</h1>
      <h2 className="text-center mb-4">A website dedicated to find lost ids</h2>
      <h2 className="text-center mb-4">Search Results</h2>
      <div className="row">
        {dummyIDs.map((id) => (
          <div className="col-md-4 mb-4" key={id.id}>
            <Card className="custom-card">
              <Card.Img variant="top" src={id.photoUrl} alt={id.name} />
              <Card.Body>
                <Card.Title>{id.name}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {id.location}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
