import {Router} from 'express';
import * as adminController from '../controller/adminController'
const router = Router();


router.post("/login", adminController.adminLogin);

export default router;