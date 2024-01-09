/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import {
  createActivity, getActivities, updateActivity, addTagToActivity,
}
  from '../../utils/data/activityData';

const initialState = {
  userId: 0,
  description: '',
  memories: [],
  tags: [],
};

function ActivityForm({ activityObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [setActivities] = useState([]);
  const [tagValues, setTagValues] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getActivities().then(setActivities);
    if (activityObj.activityId) {
      setFormInput(activityObj);
      const tagValueIds = [];
      // eslint-disable-next-line react/prop-types
      for (let i = 0; i < activityObj.tags.length; i++) {
        // eslint-disable-next-line react/prop-types
        tagValueIds.push(activityObj.tags[i].tagId);
      }
      setTagValues(tagValueIds);
    }
  }, [activityObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activityObj.activityId) {
      updateActivity(formInput).then(() => router.push('/activities'));
    } else {
      const payload = { ...formInput, userId: user.userId };
      createActivity(payload).then((activity) => {
        if (tagValues[0]) {
          tagValues.forEach((tagId) => addTagToActivity(activity.activityId, tagId).then(() => {}));
        }
        router.push('/activities');
      });
    }
  };

  const handleToggleClick = (e) => {
    const state = tagValues;
    const id = Number(e.target.htmlFor);
    if (!state.includes(id)) {
      state.push(id);
      setTagValues(state);
      const newTag = { tagId: id };
      formInput.tags.push(newTag);
    } else if (state.includes(id)) {
      const index = state.findIndex((element) => element === id);
      state.splice(index, 1);
      setTagValues(state);
      const i = formInput.tags.findIndex((element) => element.tagId === id);
      formInput.tags.splice(i, 1);
    }
  };

  return (
    <div className="act-form d-flex flex-wrap flex-column align-content-center">
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
          <Form.Control
            type="text"
            placeholder="What Activity Would You Like To Add?"
            name="description"
            value={formInput.description}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <ToggleButtonGroup type="checkbox" value={tagValues}>
          <ToggleButton style={{ bordercolor: 'white' }} id={1} onClick={handleToggleClick} value={1}>
            Acts of Service
          </ToggleButton>
          <ToggleButton id={2} onClick={handleToggleClick} value={2}>
            Quality Time
          </ToggleButton>
          <ToggleButton id={3} onClick={handleToggleClick} value={3}>
            Words of Affirmation
          </ToggleButton>
          <ToggleButton id={4} onClick={handleToggleClick} value={4}>
            Physical Touch
          </ToggleButton>
          <ToggleButton id={5} onClick={handleToggleClick} value={5}>
            Receiving Gifts
          </ToggleButton>
        </ToggleButtonGroup>

        <div className="d-flex flex-wrap flex-column align-content-center">
          <Button type="submit" className="createActivity">{activityObj.activityId ? 'Update' : 'Create'} +</Button>
        </div>
      </Form>
    </div>
  );
}

ActivityForm.propTypes = {
  activityObj: PropTypes.shape({
    description: PropTypes.string,
    activityId: PropTypes.number,
    UID: PropTypes.string,
  }),

};

ActivityForm.defaultProps = {
  activityObj: initialState,
};

export default ActivityForm;
