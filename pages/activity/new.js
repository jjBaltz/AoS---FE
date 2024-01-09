import React from 'react';
import ActivityForm from '../../components/forms/ActivityForm';

export default function AddActivity() {
  return (
    <div className="bg-img">
      <div className="new-act-text text-center">
        Create an Activity
      </div>
      <div className="act-form justify-content-center align-content-center">
        <ActivityForm />
      </div>
    </div>
  );
}
