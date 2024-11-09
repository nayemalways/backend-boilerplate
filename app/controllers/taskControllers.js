import  {movefile} from '../utility/moveFile.js';
import {UPLOAD_FOLDER} from '../config/config.js';

// create
export const createTask = async (req, res) => {
    return res.json({message: "Task created Successfully!"});
}

// read
export const readTask = async (req, res) => {
    return res.json({message: "Task read Successfully!"});
}

// update
export const updateTask = async (req, res) => {
    return res.json({message: "Task update Successfully!"});
}

// delete
export const deleteTask = async (req, res) => {
    return res.json({message: "Task delete Successfully!"});
}




// file upload
export const uploadFile = async (req, res) => {
    const file = req.files.file;
    const folderPath = UPLOAD_FOLDER(file.name); // file name require

    await movefile(file, folderPath);
    // res.send(`File upload Success`);
    res.json({status: `File Upload Success`}); 
}