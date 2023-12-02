import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ActivityForm from '../../../components/forms/ActivityForm';
import { getSingleActivity } from '../../../utils/data/activityData';

export default function EditMeetup() {
  const [editActivity, setEditActivity] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleActivity(id)?.then(setEditActivity);
  }, [id]);

  console.log('id and obj:', id, editActivity);

  return (<ActivityForm obj={editActivity} />);
}
