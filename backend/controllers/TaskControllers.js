const TaskModel = require("../models/TaskModel");

// Get Tasks
module.exports.getTasks = async (req,res) => {
    const tasks = await TaskModel.find();
    res.send(tasks);    
};

// Save Tasks
module.exports.saveTasks = (req,res) => {

    const {task} =req.body;
    
        TaskModel.create({task})
            .then((data) => {
                console.log("Saved Successfully...");
                res.status(201).send(data);
            })
            .catch((err) => {
                console.log(err);
                res.send({error: err, msg: "Something went worng!"})
            });

};

// Update Function
module.exports.updateTask = (req,res) => {

    const {id} = req.params;
    const {task} =req.body;
        
        TaskModel.findByIdAndUpdate(id, {task}) 
            .then(() => res.send("Updated Successfully..."))   
            .catch((err) => {
                console.log(err);
                res.send({error: err, msg: "Something went worng!"})
            });
    
    };

//Delete Function

module.exports.deleteTask = (req,res) => {

    const {id} = req.params;
    const {task} =req.body;
        
        TaskModel.findByIdAndDelete(id) 
            .then(() => res.send("Deleted Successfully..."))   
            .catch((err) => {
                console.log(err);
                res.send({error: err, msg: "Something went worng!"})
            });
    
    };