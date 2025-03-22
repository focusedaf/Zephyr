import { CTA } from "../models/cta.models.js";

// email from users n save it in db

const getEmail = async (req, res) => {
  // user can already have a account on the site or maynot have one

  try {
    const { email } = req.body;

    if (!email) {
      console.log("Email is required to receive future updates");
    }

    const userEmail = await CTA.create({ email });

    return res
      .status(200)
      .json({ success: true, message: "email submitted successfully" });
  } catch (error) {
    console.error("email submission error", error);
    return res.status(500);
  }
};

export { getEmail };
