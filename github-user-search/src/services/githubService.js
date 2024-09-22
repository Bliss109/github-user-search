import axios from 'axios';

// Create an Axios instance with the GitHub API base URL
const githubAPI = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
  }
});

// Function to search for GitHub users
export const searchUsers = async (query) => {
  const response = await githubAPI.get(`search/users?q=${query}`);
  return response.data;
};

