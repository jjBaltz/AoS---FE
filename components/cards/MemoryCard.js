/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function MemoryCard({ memoryObj }) {
  console.warn(memoryObj);
  return (
    <Card className="card-body d-flex flex-md-row flex-column px-2" style={{ width: '600px', margin: '20px' }}>
      <Card.Body>
        <Card.Title>{memoryObj.description}</Card.Title>
      </Card.Body>
      <Link href={`/memory/${memoryObj.memoryId}`} passHref>
        <Button variant="primary" className="m-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
          </svg>
        </Button>
      </Link>
    </Card>
  );
}

MemoryCard.propTypes = {
  memoryObj: PropTypes.shape({
    memoryId: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default MemoryCard;
