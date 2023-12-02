/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMemories } from '../utils/data/memoryData';
import { useAuth } from '../utils/context/authContext';
import MemoryCard from '../components/cards/MemoryCard';

function ShowMemories() {
  const [memories, setMemories] = useState([]);

  const { user } = useAuth();

  const getAllMemories = () => {
    getMemories(user.uid).then(setMemories);
  };

  useEffect(() => {
    getAllMemories();
  }, []);

  return (
    <div className="text-center">
      <div className="header">Your Memories</div>
      <Link href="/activity/randomize" passHref>
        <Button className="newActivity">Start New Memory</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {memories.map((memory) => (
          <MemoryCard key={memory.memoryId} memoryObj={memory} onUpdate={getAllMemories} />
        ))}
      </div>
    </div>
  );
}

export default ShowMemories;
