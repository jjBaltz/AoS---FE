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
    <Card
      className="mem-card card-body d-flex flex-row px-2 flex-md-column"
      style={{
        width: '400px',
        margin: '20px',
        height: '400px',
        overflow: 'hidden',
        padding: '10px',
      }}
    >
      <Card.Body className="mem-desc">
        {memoryObj.description}
      </Card.Body>
      <div className="card-buttons">
        <Link href={`/memory/${memoryObj.memoryId}`} passHref>
          <Button className="view-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
          </Button>
        </Link>
        <Button className="trash-button" onClick={deleteThisMemory}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
          </svg>
        </Button>
      </div>
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
