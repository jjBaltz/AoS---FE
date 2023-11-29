/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
// import Link from 'next/link';
import { getOpenActivities } from '../../utils/data/activityData';
import ActivityCard from '../../components/cards/ActivityCard';

function RandomActivities() {
  const [openActivities, setOpenActivities] = useState();
  const [chosenActivity, setChosenActivity] = useState();

  const Randomize = () => {
    const activity = openActivities[Math.floor(Math.random() * openActivities?.length)];
    setChosenActivity(activity);
  };

  useEffect(() => {
    getOpenActivities().then(setOpenActivities);
  }, []);

  return (
    <div className="text-center">
      <div className="d-flex flex-wrap">
        <Button type="button" className="startActivity" onClick={Randomize}>Start An Activity!</Button>
      </div>
      {chosenActivity
        ? (
          <>
            <ActivityCard activityObj={chosenActivity} key={chosenActivity.activityId} />
            {/* <Link href={`/memory/newMemory/${chosenActivity.activityId}`} passHref>
              <Button>Create Memory</Button>
            </Link> */}
          </>
        ) : ''}
    </div>
  );
}

export default RandomActivities;
