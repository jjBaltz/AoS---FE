/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMemory } from '../../utils/data/memoryData';
import { getSingleActivity } from '../../utils/data/activityData';
import ActivityCard from '../../components/cards/ActivityCard';

export default function ViewMemory() {
  const [memoryDetails, setMemoryDetails] = useState({});
  const [activity, setActivity] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleMemory(id).then((mem) => {
      getSingleActivity(mem.activityId).then(setActivity);
      setMemoryDetails(mem);
    });
  }, [id]);

  // const createdAt = new Date(memoryDetails.date);
  // const formatDate = (date) => {
  //   const mm = String(date.getMonth() + 1).padStart(2, '0');
  //   const dd = String(date.getDate()).padStart(2, '0');
  //   const yyyy = date.getFullYear();
  //   return `${mm}-${dd}-${yyyy}`;
  // };
  // const formattedMemoryTime = formatDate(createdAt);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="mem-act">
          <ActivityCard activityObj={activity} key={memoryDetails.activityId} />
        </div>
        <div className="text-black ms-5 details">
          <h3>
            {memoryDetails.description}
          </h3>
          {/* <p>Memory Made: {formattedMemoryTime}</p> */}
        </div>
      </div>
    </>
  );
}
