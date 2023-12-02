import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createActivity, getActivities, updateActivity } from '../../utils/data/activityData';

const initialState = {
  description1: '',
  description2: '',
  description3: '',
  description4: '',
  description5: '',
  UID: '',
};

function ActivityForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [setActivities] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getActivities(user.uid).then(setActivities);

    if (obj.id) setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(formInput);
    if (obj.id) {
      updateActivity(formInput).then(() => router.push('/activities'));
    } else {
      const payload = { ...formInput, UID: user.uid };
      console.log('user payload:', payload);
      createActivity(payload).then(() => {
        router.push('/activities');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Description INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="What Activity Would You Like To Add?"
          name="description1"
          value={formInput.description1}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <Form>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Acts of Service"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Quality Time"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="Words of Affirmation"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label="Physical Touch"
              name="group1"
              type={type}
              id={`inline-${type}-4`}
            />
            <Form.Check
              inline
              label="Receiving Gifts"
              name="group1"
              type={type}
              id={`inline-${type}-5`}
            />
          </div>
        ))}
      </Form>

      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="What Activity Would You Like To Add?"
          name="description2"
          value={formInput.description2}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="What Activity Would You Like To Add?"
          name="description3"
          value={formInput.description3}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="What Activity Would You Like To Add?"
          name="description4"
          value={formInput.description4}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="What Activity Would You Like To Add?"
          name="description5"
          value={formInput.description5}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit" className="createActivity">{obj.id ? 'Update' : 'Create'} +</Button>
    </Form>
  );
}

ActivityForm.propTypes = {
  obj: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
  }),
};

ActivityForm.defaultProps = {
  obj: initialState,
};

export default ActivityForm;
