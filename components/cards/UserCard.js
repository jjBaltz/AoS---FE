/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function UserCard({ userObj }) {
  return (
    <Card
      id="user-card"
      style={{
        width: '60%',
        height: '53%',
        padding: '20px',
      }}
    >
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
