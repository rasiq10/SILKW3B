const db = require("../models");
const silkw3b = db.silkw3b;

//create and save new contact
exports.create = (req,res) =>{
     if(!req.body.name){
        res.status(400).send({messge: "Name cannot be empty"});
        return;
     }

     const contact = new silkw3b({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        message: req.body.message
     });
     contact
        .save(contact)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Error occured while creating or saving the contact"
            });
        });
}