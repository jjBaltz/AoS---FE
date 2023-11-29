import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import MemoryForm from '../../../components/forms/MemoryForm';
import { getSingleActivity } from '../../../utils/data/activityData';
import ActivityCard from '../../../components/cards/ActivityCard';

export default function AddMemory() {
  const [activity, setActivity] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleActivity(id).then(setActivity);
  }, [id]);

  return (
    <>
      <div className="new-memory-text">
        <h2>Create Memory</h2>
        <ActivityCard activityObj={activity} key={activity.activityId} />
      </div>
      <div className="memory-form">
        {/* <MemoryForm activityId={id} /> */}
      </div>
    </>
  );
}
