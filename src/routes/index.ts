import studentRouter from './student'
import {Router} from 'express';
import adminRouter from './admin'

import addmarksRouter from './addmarks'

const router = Router();

router.use("/admin",adminRouter)

router.use("/student", studentRouter);

router.use("/marks",addmarksRouter)
 




export default router;
