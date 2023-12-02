const dbUrl = 'https://localhost:7271';

const getActivities = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/activities`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getActivitiesByUser = (UID) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/activities/users/${UID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleActivity = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/activities/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getOpenActivities = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/activities/open`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createActivity = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/activities/five`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateActivity = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/activities/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const addTagToActivity = (activityId, tagId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/activities/${activityId}/tags/${tagId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const removeTagFromActivity = (activityId, tagId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/activity/${activityId}/tags/${tagId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const addMemoryToActivity = (activityId, memoryId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/activities/${activityId}/memoriess/${memoryId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getActivities,
  getActivitiesByUser,
  getSingleActivity,
  getOpenActivities,
  createActivity,
  updateActivity,
  addTagToActivity,
  removeTagFromActivity,
  addMemoryToActivity,
};
