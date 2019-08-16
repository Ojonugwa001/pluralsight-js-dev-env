import 'whatwg-fetch';

// export getUsers = () => { get('users') }
export function getUsers() {
  return get('users');
}

 const get = (url) => {
  return fetch(url).then(onSuccess, onError);
}

const onSuccess = (response) => {
  return response.json();
}

const onError = (error) => {
  console.log(error); // eslint-disable-line no-console
}