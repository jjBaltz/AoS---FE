import { useEffect, useState } from 'react';
import UserForm from '../components/forms/UserForm';
import ReturnUser from '../components/ReturnUser';
import { checkUser } from '../api/userData';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const [member, setMember] = useState(null);

  const { user } = useAuth();
  useEffect(() => {
    checkUser(user.uid)
      .then((result) => setMember(result))
      .catch(() => setMember(null));
  }, [user.uid]);

  return member ? <ReturnUser /> : <UserForm />;
}
