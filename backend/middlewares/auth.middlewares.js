import { getUser } from "../utils/sessionStore.js";

async function LoggedinUsers(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) {
    return res.redirect("/user/login");
  }

  const user = await getUser(userUid);

  if (!user) {
    return res.direct("/user/login");
  }
  req.user = user;
  next();
}

export { LoggedinUsers };
