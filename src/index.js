import './index.css';

import {getUsers} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let userBody = "";

  result.forEach(user => {
    userBody +=
    `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstname}</td>
      <td>${user.lastname}</td>
      <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = userBody;
});