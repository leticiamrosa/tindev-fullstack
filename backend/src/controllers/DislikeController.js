const Dev = require("./DevController");

module.exports = {
  async store(req, res) {
    const { devID } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devID);

    if (!targetDev) {
      return res.status(400).json({ error: "Dev not exists" });
    }

    loggedDev.dislike.push(targetDev._id);

    await loggedDev.save();
    return res.json(loggedDev);
  }
};
