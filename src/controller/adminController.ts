import { Request, Response } from "express";
import * as adminModel from '../model/admin.model'




/*************Admin Login**************/

const adminLogin = async (req: Request, res: Response): Promise<void> => {
console.log('inside admin login controller')
console.log(req.body)

const {email, password} = req.body

const adminDetail = {
    email,
    password,
}

const result = await adminModel.adminLogin(adminDetail);
      console.log("===1===")
      console.log(result)

      if(result.data == "usernotFound"){
        res.status(409).json({ message: 'admin not found'})
      }
      else if (result.data == 'userFound'){
        res.status(200).json({message:'admin found'})
      }
      else{
        res.status(400).json({message:'not able to login'})
      }

}

export{adminLogin}