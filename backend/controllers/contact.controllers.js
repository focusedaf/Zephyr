import { Contact } from "../models/contact.models.js";

// queries n feedback from users n save it in db
const createContact = async (req, res) => {
  try {
    const { query, feedback, email } = req.body;

    if (!query || !feedback || !email) {
      console.log("All fields are required");
    }

    const info = await Contact.create({ query, feedback, email });

    return res
      .status(200)
      .json({ success: true, message: "contact form submitted successfully" });
  } catch (error) {
    console.error("contact form submission failed", error);
    return res.status(500);
  }
};

export { createContact };
