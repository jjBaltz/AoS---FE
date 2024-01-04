/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { deleteMemory } from '../../utils/data/memoryData';

function MemoryCard({ memoryObj, onUpdate }) {
  const deleteThisMemory = () => {
    if (window.confirm('Delete Memory?')) {
      deleteMemory(memoryObj.memoryId).then(() => onUpdate());
    }
  };

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
      <Button id="trash" onClick={deleteThisMemory} className="m-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
        </svg>
      </Button>
    </Card>
  );
}

MemoryCard.propTypes = {
  memoryObj: PropTypes.shape({
    memoryId: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MemoryCard;
