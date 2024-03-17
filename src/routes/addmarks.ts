import {Router} from 'express';
const router = Router();
import * as addmarksController from '../controller/addmarksController'
import * as getMarksController from '../controller/getmarksController'


router.post("/addmarks", addmarksController.addmarks);
router.get("/getmarks/:registerNumber/:batch", getMarksController.getMarks)

export default router;

