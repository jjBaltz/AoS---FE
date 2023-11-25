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
    <div className="text-center">
      <div className="header">Activities List</div>
      <Link href="/activity/new" passHref>
        <Button className="newActivity">Add An Activity</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activityObj={activity} onUpdate={getAllActivities} />
        ))}
      </div>
    </div>
  );
}

export default ShowActivities;
