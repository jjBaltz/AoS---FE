import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import UserCard from './cards/UserCard';

export default function ReturnUser() {
  const { user } = useAuth();
  return (
    <div className="profile-bg">
      <div
        className="text-center justify-content-center d-flex
        flex-d row wrap"
        style={{
          height: '90vh',
          padding: '30px',
          margin: '0 auto',
        }}
      >
        <div className="header-1">Your Profile</div>
        <UserCard userObj={user} />
        <div className="profile-buttons">
          <Link href="/activity/new" passHref>
            <Button className="new-activity">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </Button>
          </Link>
          <Link href="/activity/random" passHref>
            <Button className="play-activity">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-collection-play" viewBox="0 0 16 16">
                <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1m2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848z" />
                <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5z" />
              </svg>
            </Button>
          </Link>
          <Link href="/memories" passHref>
            <Button className="memories-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-paper-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="m3 7.5 3.5 2L8 8.75l1.5.75 3.5-2v-6A1.5 1.5 0 0 0 11.5 0h-7A1.5 1.5 0 0 0 3 1.5zM2 3.133l-.941.502A2 2 0 0 0 0 5.4v.313l2 1.173zm12 3.753 2-1.173V5.4a2 2 0 0 0-1.059-1.765L14 3.133zm-3.693 3.324L16 6.873v6.5zm5.634 4.274L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M5.693 10.21 0 13.372v-6.5zM8 1.982C9.664.309 13.825 3.236 8 7 2.175 3.236 6.336.31 8 1.982" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
