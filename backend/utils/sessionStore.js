// TODO: Replace this with Redis for production use

import redisClient from "../config/redisClient.js";

async function setUser(sessionId, user) {
  await redisClient.set(`session:${sessionId}`, JSON.stringify(user), {
    EX: 3600
  });
}

async function getUser(sessionId) {
  const data = await redisClient.get(`session:${sessionId}`);
  return data ? JSON.parse(data) : null;
}

export { setUser, getUser };
