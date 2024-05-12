// Asynchronous Programming
// Use fetch to retrieve user data from a public API and log the names of the users.

// async function fetchUsers() {
//     const response = fetch('https://jsonplaceholder.typicode.com/users');
//     const data = response.json();
//     data.forEach(user => {
//       console.log(user.name);
//     });
//   }
  
//   fetchUsers();

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    data.forEach(user => {
      console.log(user.name);
    });
  }
  
fetchUsers();
  