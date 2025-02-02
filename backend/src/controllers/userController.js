import { User } from "../models/User.js";

export const userController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { username } = req.body;
      const user = await User.findOneAndUpdate(
        { username },
        { status: "online" },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  logoutUser: async (req, res) => {
    try {
      const { username } = req.body;
      const user = await User.findOneAndUpdate(
        { username },
        { status: "offline" },
        { new: true }
      );
      console.log({ user });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
