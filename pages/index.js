import { useEffect, useState } from 'react';
import UserForm from '../components/forms/UserForm';
import ReturnUser from '../components/ReturnUser';
import { checkUser } from '../utils/data/userData';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const [newUser, setNewUser] = useState();

  const { user } = useAuth();
  useEffect(() => {
    checkUser(user.uid)
      .then((result) => setNewUser(result))
      .catch(() => setNewUser(null));
  }, [user.uid]);

  return newUser ? <ReturnUser /> : <UserForm />;
}
