
// Dependencies
import express from "express";
import * as taskController from '../app/controllers/taskControllers.js';



// Create Route
const router = express.Router();



//---- Routing -----
// create Task
router.post('/createTask', taskController.createTask);

// read Task
router.get('/readTask', taskController.readTask);

// update Task
router.put('/updateTask', taskController.updateTask);

// delete Task
router.delete('/deleteTask', taskController.deleteTask);


// file upload route
router.post('/upload', taskController.uploadFile);




// Finally Export
export default router;
