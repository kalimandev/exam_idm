const User = require("../models/userSchema")


module.exports = {
    async addUser(req, res) {
        const user = req.body;
        const persone = new User({ email: user.email, password: user.password });
        res.send(await persone.save());
    },
    async getAllUsers (req, res) {
        const users = await User.find();
        res.send(users);
    },
    async getUserbyId(req, res) {
        const email = req.params["id"];
        const user = await User.find({email:email});
        res.send(user);
    },
    async updateUserById(req, res) {
        const user = req.body;
        const id = req.params["id"];
        const findUserByEmail = User.findOne({email:id})
        const updatedUser = await User.findOneAndUpdate(findUserByEmail,user);
        res.send(user)
    },
    async deleteUserbyId(req, res) {
        const id = req.params["id"];
        const findUserByEmail = User.findOne({email:id})
        const deleteu = await findUserByEmail.remove();
        res.send(deleteu);
    },
    
}