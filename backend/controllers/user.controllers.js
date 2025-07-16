import { User } from "../models/user.models.js";

// login
const LoginUser = async (req, res) => {
  try {
    const { email, pwd } = req.body;

    if (!email || !pwd) {
      return res.status(400).send("Credentials required");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User does not exist");
    }

    // TODO: Add password validation here using bcrypt or similar

    return res.status(200).send("Logged in successfully");
  } catch (error) {
    console.error("Error logging in", error);
    return res.status(500).send("Server error");
  }
};
// signup
const RegisterUser = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;

    if (!username || !fullname || !email || !password) {
      return res.status(400).send("Missing Credentials");
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      res.status(409).send("User with this username or email already exists");
    }
    const user = await User.create({
      username,
      fullname,
      email,
      password,
    });

    const createdUser = await User.findById(user._id);

    if (!createdUser) {
      res.status(500).send("Unable to create the user");
    }

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log("Error registering user", error);
    return res.status(500).send("Server error");
  }
};

export { LoginUser, RegisterUser };
