// in-memory storage using a data structure such as map
const sessionIdToUserMap = new Map();

function setUser(id, user) {
  sessionIdToUserMap.set(id, user);
}

// used to send session id to client side 
function getUser(id) {
  return sessionIdToUserMap.get(id);
}

export { setUser, getUser };
