import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ActivityForm from '../../../components/forms/ActivityForm';
import { getSingleActivity } from '../../../utils/data/activityData';

export default function EditActivity() {
  const [editActivity, setEditActivity] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleActivity(id).then(setEditActivity);
  }, [id]);

  return (
    <div className="bg-img">
      <div className="new-act-text text-center">
        Update an Activity
      </div>
      <div className="act-form justify-content-center align-content-center">
        <ActivityForm activityObj={editActivity} />
      </div>
    </div>
  );
}
