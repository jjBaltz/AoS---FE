/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { getOpenActivities } from '../../utils/data/activityData';
import ActivityCard from '../../components/cards/ActivityCard';

function RandomActivities() {
  const [openActivities, setOpenActivities] = useState();
  const [chosenActivity, setChosenActivity] = useState();
  const { user } = useAuth();

  const Randomize = () => {
    const activity = openActivities[Math.floor(Math.random() * openActivities?.length)];
    setChosenActivity(activity);
  };

  useEffect(() => {
    getOpenActivities(user.userId).then(setOpenActivities);
  }, []);

  return (
    <div className="text-center">
      <div className="d-flex flex-wrap justify-content-center align-content-center flex-d row wrap">
        <div className="header-2">
          <svg viewBox="0 0 500 150">
            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500">
              <textPath xlinkHref="#curve">
                Start An Activity!
              </textPath>
            </text>
          </svg>
        </div>
        <div>
          <Button type="button" className="start-activity" onClick={Randomize}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-shuffle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5" />
              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="shown-card d-flex flex-wrap flex-md-column justify-content-center align-content-center">
        {chosenActivity
          ? (
            <>
              <ActivityCard activityObj={chosenActivity} key={chosenActivity.activityId} />
              <Link href={`/memory/newMemory/${chosenActivity.activityId}`} passHref>
                <Button className="create-memory">Create This Memory</Button>
              </Link>
            </>
          ) : ''}
      </div>
    </div>
  );
}

export default RandomActivities;
