/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getActivities } from '../utils/data/activityData';
import { useAuth } from '../utils/context/authContext';
import ActivityCard from '../components/cards/ActivityCard';

function ShowActivities() {
  const [activities, setActivities] = useState([]);

  const { user } = useAuth();

  const getAllActivities = () => {
    getActivities(user.uid).then(setActivities);
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  return (
    <div className="image text-center">
      <div className="header">
        Activities List
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-postage-heart-fill" viewBox="0 0 16 16">
          <path d="M4.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM8 11C2.175 7.236 6.336 4.31 8 5.982 9.664 4.309 13.825 7.236 8 11" />
          <path d="M4.5 0a1 1 0 0 1-2 0H1v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 1 1 0 2v1a1 1 0 1 1 0 2v1h1.5a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0H15v-1a1 1 0 1 1 0-2v-1a1 1 0 1 1 0-2V9a1 1 0 1 1 0-2V6a1 1 0 1 1 0-2V3a1 1 0 1 1 0-2V0h-1.5a1 1 0 1 1-2 0h-1a1 1 0 1 1-2 0h-1a1 1 0 0 1-2 0zM4 14a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z" />
        </svg>
      </div>
      <Link href="/activity/new" passHref>
        <Button className="add-activity">Add An Activity</Button>
      </Link>
      <div className="d-flex flex-wrap flex-md-row justify-content-center">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activityObj={activity} onUpdate={getAllActivities} />
        ))}
      </div>
    </div>
  );
}

export default ShowActivities;
