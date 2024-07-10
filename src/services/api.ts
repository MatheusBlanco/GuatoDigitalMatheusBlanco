import axios from 'axios';

function setupAPIClient(ctx = undefined) {
  const api = axios.create();

  return api;
}

export const api = setupAPIClient();
