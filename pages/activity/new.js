import React from 'react';
import ActivityForm from '../../components/forms/ActivityForm';

export default function AddMember() {
  return (
    <>
      <div className="new-act-text">
        <h2>Create Activities</h2>
      </div>
      <div className="act-form">
        <ActivityForm />
      </div>
    </>
  );
}
