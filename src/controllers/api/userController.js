const { userService } = require("../../services");

const getUsers = async (req, res) => {
  try {
    const data = await userService.getUser();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await userService.getUserId(id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers, getUserId };
