/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ActivityCard({ activityObj }) {
  console.warn(activityObj);
  return (
    <Card className="card-body d-flex flex-md-row flex-column px-2" style={{ width: '600px', margin: '20px' }}>
      <Card.Body>
        <Card.Title>{activityObj.description}</Card.Title>
      </Card.Body>
    </Card>
  );
}

ActivityCard.propTypes = {
  activityObj: PropTypes.shape({
    activityId: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default ActivityCard;
