import { useAuth } from '../utils/context/authContext';
import UserCard from './cards/UserCard';

export default function ReturnUser() {
  const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* Hello {user.displayName} */}
      <UserCard userObj={user} />
    </div>
  );
}
