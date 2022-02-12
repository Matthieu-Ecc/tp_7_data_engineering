// post.js
const fetch = require('node-fetch');

async function getPosts(userId) {
  const response = await fetch(
    `http://localhost:3003/api/`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

module.exports = {
  getPosts,
};