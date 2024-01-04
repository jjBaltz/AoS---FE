const dbUrl = 'https://localhost:7271';

const getMemories = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/memories`, {
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

const getSingleMemory = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/memories/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve((data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createMemory = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/memories/${payload.activityId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteMemory = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/memories/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getMemories,
  getSingleMemory,
  createMemory,
  deleteMemory,
};
