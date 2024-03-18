import { Request, Response } from "express";
import * as studentModel from "../model/student.model";



/*************STUDENT CREATION**************/

const createStudent = async (req: Request, res: Response): Promise<void> => {
    console.log('students created')
    console.log(req.body)
    const {
        registerNumber,
        studentName,
        email,
        mobileNumber,
        batch,

    } = req.body;


    const studentDetails = {
        registerNumber,
        studentName,
        email,
        mobileNumber,
        batch,

    }

    const result = await studentModel.createStudent(studentDetails);
    console.log("===1===")
    console.log(result)
    if (result.data == "dataExist") {
        res.status(409).json({ message: 'student already exist' })
    }
    else if (result.data == 'inserted') {
        res.status(200).json({ message: 'student inserted successfully' })
    }
    else {
        res.status(400).json({ message: 'student insertion  failed' })
    }
}


/************ LIST STUDENT****************/

const listStudent = async (req: Request, res: Response) => {
    console.log('students list')
    const result = await studentModel.listStudent()

    if (result.data == "nostudent") {
        res.status(409).json({ message: 'student list is empty' })
    }
    else if (result.success == true) {
        res.status(200).json({ studentData: result.data })
    }
    else {
        res.status(400).json({ message: 'student listing failed' })
    }
}


/***************UPDATE STUDENT ***************/

const updateStudent = async (req: Request, res: Response) => {
    console.log('updated students')

    const {
        registerNumber,
        studentName,
        email,
        mobileNumber,
        batch,
    } = req.body;

    const details = {
        registerNumber,
        studentName,
        email,
        mobileNumber,
        batch,
    };
    console.log(details);


    res.json({ message: 'student updated successfully' })
}



/***************DELETE STUDENT ***************/

const deleteStudent = async (req: Request, res: Response) => {
    console.log('deleted students')

    const {
        registerno,
    } = req.params;

    const details = {
        registerno,
    };
    console.log(details);

    const result = await studentModel.deleteStudent(details)
    if (result.success == false) {
        res.status(409).json({ message: 'Some error in deleting' })
    }
    else if (result.success == true) {
        res.status(200).json({ message: result.data })
    }
    else {
        res.status(400).json({ message: 'student listing failed' })
    }
}



export {
    createStudent,
    updateStudent,
    listStudent,
    deleteStudent
}