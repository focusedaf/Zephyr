import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../utils/sessionStore.js";
import redisClient from "../config/redisClient.js";

// login
const LoginUser = async (req, res) => {
  try {
    const { email, pwd } = req.body;

    if (!email || !pwd) {
      return res.status(400).send("Credentials required");
    }

    const checkPwd = validatePwd(pwd);
    if (checkPwd) {
      return res.status(400).json({ message: checkPwd });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User does not exist");
    }

    const pwdCheck = await bcrypt.compare(pwd, user.password);
    if (!pwdCheck) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const sessionID = uuidv4();
    await setUser(sessionID, user);

    return res
      .status(200)
      .cookie("uuid", sessionID, { httpOnly: true })
      .json({ message: "Logged in successfully" });
  } catch (error) {
    console.error("Error logging in", error);
    return res.status(500).json({ message: "Server error" });
  }
};
// signup
const RegisterUser = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;

    if (!username || !fullname || !email || !password) {
      return res.status(400).json({ message: "Missing Credentials" });
    }

    const checkPwd = validatePwd(password);
    if (checkPwd) {
      return res.status(400).json({ message: checkPwd });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this username or email already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    console.log(hash);

    const user = await User.create({
      username,
      fullname,
      email,
      password: hash,
    });

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log("Error registering user", error);
    return res.status(500).json({ message: "Server error" });
  }
};

function validatePwd(password) {
  if (password.length < 8) {
    return "Password needs to be at least 8 characters";
  }
  if (!/[a-z]/.test(password)) {
    return "Password needs at least one lowercase letter";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password needs at least one uppercase letter";
  }
  if (!/[0-9]/.test(password)) {
    return "Password needs at least one number";
  }
  if (!/[^a-zA-Z0-9]/.test(password)) {
    return "Password needs at least one special character";
  }
  return null;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const LogOut = async (req,res) => {
  // Reads the uid from req.cookies
  // Deletes the associated session from Redis (e.g., DEL session:<uid>)

  try {
    const userUid = req.cookies?.uid;
    if(userUid){
      await redisClient.del(userUid)
      res.clearCookie("uuid")
    }
    res.redirect("/user/login")
  } catch (error) {
     return res.status(500).json({ message: "Logout Failed" });
  }

}
export { LoginUser, RegisterUser, LogOut };
