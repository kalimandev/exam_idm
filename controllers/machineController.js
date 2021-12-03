const Machine = require("../models/machineSchema");


module.exports = {
    async addUMachine(req, res) {
        const machine = req.body;
        const newMachine = new Machine({nom : machine.nom, ip : machine.ip,  os: machine.os,etat : machine.etat});
        res.send(await newMachine.save());
    },
    async getAllMachines (req, res) {
        const machines = await Machine.find();
        res.send(machines);
    },

      async updateMachineByIP(req, res) {
        const machine = req.body;
        const id = req.params["id"];
        
        const findMachineByIp = Machine.find({ip:id})
        console.log('///////////// machine by id /////////////////');
        console.log(findMachineByIp);
        const updatedMachine = await Machine.findOneAndUpdate(findMachineByIp, machine);
        res.send(machine)
    },
    
    
}