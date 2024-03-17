import {Router} from 'express';
const router = Router();
import * as studentController from '../controller/studentController'


router.post("/createstudent", studentController.createStudent);

router.get("/liststudent", studentController.listStudent);

router.put("/updatestudent", studentController.updateStudent);

router.delete("/deletestudent/:registerno", studentController.deleteStudent);

router.get("/getstudentbyid/:id", studentController.listStudent);


export default router;