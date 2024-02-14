const bodyParser = require("body-parser");

exports.getUsers = async (req, res) => {
    const user = {
      name: "Marcos",
      last_name: "Fonseca",
      age: 23,
    };
    return res.status(200).json(user);
  };

exports.createUsers = async(req, res) => {
    const newUser = {
        user: req.body.user,
    };
    try {
        const submittedUser = await User.create(newUser);
        res.send(submittedUser);
    } catch(error){
        res.status(500).send({ error: "Falha ao criar usuário." });
    }
   
}