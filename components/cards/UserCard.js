/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function UserCard({ userObj }) {
  console.warn(userObj);
  return (
    <Card className="card-body d-flex flex-md-row flex-column px-2" style={{ width: '600px', margin: '20px' }}>
      <Card.Img src={userObj.photoURL} alt={userObj.displayName} style={{ width: '300px', height: '300px' }} />
      <Card.Body>
        <Card.Title>{userObj.displayName}</Card.Title>
        <Card.Text>{userObj.email}</Card.Text>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};

export default UserCard;
