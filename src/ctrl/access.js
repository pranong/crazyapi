const ctrl = {}
module.exports = ctrl

ctrl.allAccess = async (req, res) => {
  res.status(200).send("Public Content.");
}

ctrl.userBoard = async (req, res) => {
  res.status(200).send("User Content.");
}

ctrl.moderatorBoard = async (req, res) => {
  res.status(200).send("Moderator Content.");
}

ctrl.adminBoard = async (req, res) => {
  res.status(200).send("Admin Content.");
}
