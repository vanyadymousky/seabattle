
const myHeaders = new Headers({
  'Content-Type': 'application/json',
  'Encoding': 'UTF8',
});

export const saveName = (username) => fetch('//localhost:3002/users/save-name', {
  body: JSON.stringify({
    username,
  }),
  method: 'POST',
  headers: myHeaders,
  credentials: 'include',
  mode: 'cors',
});
