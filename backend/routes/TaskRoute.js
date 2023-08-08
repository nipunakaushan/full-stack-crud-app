const {Router} = require('express')
 
const { getTasks, saveTasks, updateTask, deleteTask} = require("../controllers/TaskControllers");
const router = Router();

router.get("/get", getTasks);
router.post("/save",saveTasks);
router.delete("/delete/:id", deleteTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;


